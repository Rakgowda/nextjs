import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Search from '../search/search'
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.itemID}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.type}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Item Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Qunatity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total Amount (₹)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.itemDetail.map((historyRow) => (
                    <TableRow key={historyRow.ItemName}>
                      <TableCell component="th" scope="row">
                        {historyRow.ItemName}
                      </TableCell>
                      <TableCell>{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.quantity * historyRow.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    itemDetail: PropTypes.arrayOf(
      PropTypes.shape({
        ItemName: PropTypes.number.isRequired,
        quantity: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      }),
    ).isRequired,
    itemID: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
  }).isRequired,
};




const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
export default function CollapsibleTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const prevRef = React.useRef(page)
  const [rowData,setRowData] = React.useState(props.rowData)
  React.useEffect(()=>{
    setRowData(props.rowData)
    setPage(0)
  },[props.rowData])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function getTotalAmount(){
    return (rowsPerPage > 0
      ? props.rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : props.rowData
    ).map(e=>e.amount).reduce((sum,i)=>sum+i,0)
}

function onSearchHandle(event) {
  if(event.target.value!="")
  {
    debugger
    let filteredData = props.rowData.filter(e => e["itemID"].toString().indexOf(event.target.value) > -1);
    console.log(filteredData)
    setRowData(filteredData)
    if(!prevRef.current)
    {
      prevRef.current = page;

    }
    setPage(0)
  }
  else{
    setRowData(props.rowData)
    setPage(prevRef.current)
    prevRef.current = false;

  }

}
  return (
    <React.Fragment>
      <Search onSearchHandle={onSearchHandle}></Search>

    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Item ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Amount&nbsp;(rs)</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rowData
          ).map((row) => (
            <Row key={row.itemID} row={row} />
          ))}
       
        </TableBody>
        <TableBody>
        <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={2}></TableCell>
            <TableCell colSpan={2}>Total Amount</TableCell>
            <TableCell align="right">{getTotalAmount()}</TableCell>
        </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'props.rowData per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
