import React, { useState } from "react";
import appTheme from "../../styles/Theme.module.css";
import advsrchTheme from "./advanceSearch.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  customise: {
    display: "flex",
    position: "absolute",
    marginTop: "20px",
    left: "0px",
    height: "400px",
    width: "100%",
  },
  papper: {
    width: "100%",
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button:{
    position: "absolute",
    bottom: "30px"
  }
}));
const AdvanceSearch = () => {
  const [toggle, settoggle] = useState(true);
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  function onClickHandler() {
    settoggle(!toggle);
  }
  function fromDateHandle(date){
    console.log(date)
    setfromDate(date)
  }
  return (
    <div>
      <div
        className={`${appTheme.ml2} ${advsrchTheme.advanceSearch}`}
        onClick={onClickHandler}
      >
        Adance Search
      </div>
      {toggle && (
        <div className={classes.customise}>
          <Paper className={classes.papper} variant="outlined" square>
            <h2 className="text-center">Advance Search</h2>
          <Grid container justifyContent="space-around" className={classes.root}>
            <TextField
              id="date"
              label="From Date"
              type="date"
              value={fromDate}
              onChange={fromDateHandle}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="To Date"
              type="date"
              defaultValue={toDate}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid container justifyContent="space-around" className={classes.root}>
            <TextField
              id="date"
              label="Status"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="ref ID"
              type="number"
              defaultValue="2017-05-25"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid container justifyContent="space-around" className={classes.button}>
            <Button variant="contained" color="primary" onClick={onClickHandler}>
        Primary
      </Button>
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default AdvanceSearch;
