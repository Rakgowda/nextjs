import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles,MuiThemeProvider,createTheme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cardstyle from "../styles/Card.module.css"
import TextField from '@material-ui/core/TextField';
import themestyle from "../styles/Theme.module.css"

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
      h4: {
        "fontWeight": 700,
      },
    },
  });

const CustomerDeatil = (props) => {

    const classes = useStyles();


    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-5r">
            <Card id="card" className={`${classes.root} ${cardstyle.card}`} variant="outlined" >
      <CardContent>
      <MuiThemeProvider theme={THEME}>
        <Typography  color={"primary"} variant="h4" align="center" className="font-weight-bold" >
         <span className="text-capitalize">customer detail</span>
        </Typography>
        </MuiThemeProvider>

        <form className={classes.root} noValidate autoComplete="off">
        <div className="d-flex justify-content-center flex-column " >  

         <div className="m-2 d-flex justify-content-center">
                <TextField id="outlined-basic" label="Customer Name" 
                
                inputProps={{
                maxLength: 15,
                step: "1.0"
                
                }}
                onChange={props.onChange}
                defaultValue={props.CustomerName.current}
                inputRef={props.CustomerName}
                />
        </div> 
         <div className="m-2 d-flex justify-content-center">
                <TextField id="outlined-basic" label="Address" 
                
                inputProps={{
                maxLength: 50,
                step: "1.0"
                
                }}
                onChange={props.onChange}
                defaultValue={props.CustomerAdd.current}
                inputRef={props.CustomerAdd}
                />
        </div> 
         <div className="m-2 d-flex justify-content-center">
                <TextField id="outlined-basic" label="Phone Number" 
                
                inputProps={{
                maxLength: 10,
                step: "1.0"
                
                }}
                onChange={props.onChange}
                defaultValue={props.CustomerPhone.current}
                inputRef={props.CustomerPhone}
                /> 
        </div> 
       
        
        
          
        </div>
       </form>
      </CardContent>
      
      <CardActions className={`${classes.actionbotton}`}>
    
      <Button size="medium" variant="contained" color="primary" 
      onClick={props.onClicCusNext}
      disabled={props.customerNextButton}>
        Next
      </Button>
      </CardActions>
    </Card>
        </div>
     );
}
 
export default CustomerDeatil;