import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles,MuiThemeProvider,createTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import cardstyle from "../styles/Card.module.css"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin:"1em"
    }
})
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

const ItemSelect = ({children,itemIndex,removeItem,count}) => {
    const classes = useStyles();

    return ( 
        <div>

<Card id="card" className={`${classes.root} ${cardstyle.card}`} variant="outlined" >
      <CardContent>
      <MuiThemeProvider theme={THEME}>
        <Typography variant="h4" align="center" className="font-weight-bold" >
         <span className="text-capitalize">Item</span>
        </Typography>
        </MuiThemeProvider>
       

        
      </CardContent>
      
      <CardActions>
      
      <Button onClick={()=>removeItem(itemIndex)}>{itemIndex}</Button>
      </CardActions>
    </Card>



        </div>
     );
}
 
export default ItemSelect;