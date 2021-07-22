import React from 'react';
import { makeStyles,MuiThemeProvider,createTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import cardstyle from "../styles/Card.module.css"
import themeStyle from "../styles/Theme.module.css"
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
     
    },
    pos: {
      marginBottom: 12,
    },
    fab:{
      transition: "display 2s linear 1s"
     
      
  },
  actionbotton:{
    "display": "flex",
    "justify-content": "center"
  }
  });
  const THEME = createTheme({
    typography: {
    //   "fontFamily": "\"MyCustomFont\"",
    //   "fontSize": 20,
    //   "lineHeight": 1.5,
    //   "letterSpacing": 0.32,
    //   useNextVariants: true,
    //   suppressDeprecationWarnings: true,
      h4: {
        "fontWeight": 700,
      },
    },
  });

function CardLayout({data,edit,onEditHandle,index,deleteHandle}) {


    const classes = useStyles();
    const [isHover, setisHover] = React.useState(false);

    function hoverHandle(param) {  
      setisHover(true)
    }
    function hoverLeaveHandle(param) {  
      setisHover(false)
    }

    

    return (
        <div>
            <Card id="card" className={`${classes.root} ${cardstyle.card}`} variant="outlined" onMouseEnter={hoverHandle} 
            onMouseLeave={hoverLeaveHandle}>
      <CardContent>
      <MuiThemeProvider theme={THEME}>
        <Typography  color={data.color} variant="h4" align="center" className="font-weight-bold" >
         <span className="text-capitalize">{data.title}</span>
        </Typography>
        </MuiThemeProvider>
       

        <div className="d-flex flex-column">

        {data.data.map((item,i)=>{
          return(
        <div className="d-flex justify-content-between" key={i}>  
          <Typography  color="textPrimary" variant="h6" className="text-capitalize">{item[0]}</Typography>
          <Typography  color="textSecondary" variant="h6" style={{color:item[2]!=undefined?item[2]:""}}>{item[1]} </Typography>
        </div>
          )
        })}
      
       
           
        </div>
      </CardContent>
      
      <CardActions className={`${classes.actionbotton}`}>
      {edit !=undefined && edit =="true"?(
        <>
        <Fab id="actionIcon" color="primary" aria-label="add"  size="small" className={`${classes.fab}`} 
        style={{display:!isHover?"none":"block"}} onClick={()=>onEditHandle(data,index)}>
        <EditIcon />
      </Fab>
      <Fab id="deleteicon" color="secondary" aria-label="add"  size="small" className={`${classes.fab}`} 
      style={{display:!isHover?"none":"block"}} onClick={()=>deleteHandle(data,index)}>
      <DeleteIcon />
    </Fab>
    </>
      ):""}
      
      </CardActions>
    </Card>
        </div>
    );
}

export default CardLayout;