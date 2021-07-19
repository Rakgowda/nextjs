import React from 'react';
import { makeStyles,MuiThemeProvider,createMuiTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import cardstyle from "../styles/Card.module.css"
import themeStyle from "../styles/Theme.module.css"
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
  });
  const THEME = createMuiTheme({
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

function CardLayout({data}) {


    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} variant="outlined">
      <CardContent>
      <MuiThemeProvider theme={THEME}>
        <Typography  color={data.color} variant="h4" align="center" className="font-weight-bold" >
         <span className="text-capitalize">{data.title}</span>
        </Typography>
        </MuiThemeProvider>
       

        <div className="d-flex flex-column">

        {data.data.map(item=>{
          return(
        <div className="d-flex justify-content-between">  
          <Typography  color="textPrimary" variant="h6" className="text-capitalize">{item[0]}</Typography>
          <Typography  color="textSecondary" variant="h6" style={{color:item[2]!=undefined?item[2]:""}}>{item[1]} </Typography>
        </div>
          )
        })}
      
       
           
        </div>
      </CardContent>
      {/* <CardActions> */}
        {/* <Button size="small">Learn More</Button> */}
      {/* </CardActions> */}
    </Card>
        </div>
    );
}

export default CardLayout;