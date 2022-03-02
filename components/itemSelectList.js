import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles,MuiThemeProvider,createTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import cardstyle from "../styles/Card.module.css"
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
      margin:"1em"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button:{
      display: "block",
      "margin": "auto",
      
    }
}))
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

const ItemSelect = ({children,removeItem,data,onitemUpdate,onChangeQunatit,onChangePrice}) => {
    const classes = useStyles();
  const [item, setitem] = React.useState(data.itemName);
  const quantity = React.useRef(data.qunatity)
  const price = React.useRef(data.price)
  const [amount,setAmount] = React.useState(data.qunatity * data.price)

  const handleChange = (event) => {
    setitem(event.target.value);
    onitemUpdate(event.target.value,data.id)
    
  };
  const [isdisplay, setdisplay] = React.useState(true)

  function quantityHandle(){
    quantity.current.value = quantity.current.value.replace(/[^0-9 .]/g, '');
   
      
      onChangeQunatit(quantity.current.value,data.id)
    
    setAmount(quantity.current.value * price.current.value);
  }
  function priceHandle(){
    price.current.value = price.current.value.replace(/[^0-9 .]/g, '');
    
     
      onChangePrice(price.current.value,data.id)
    
    setAmount(quantity.current.value * price.current.value);
  }

  

    return ( 
        <div style={{display:data.display}}>

<Card id="card" className={`${classes.root} ${cardstyle.card}`} variant="outlined" >
      <CardContent className="">
      <MuiThemeProvider theme={THEME}>
        <Typography variant="h4" align="center" className="font-weight-bold" >
         <span className="text-capitalize">Item</span>
        </Typography>
        </MuiThemeProvider>
        <div className="d-flex justify-content-center align-items-center flex-column">
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Item</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          onChange={handleChange}
        >
          <MenuItem value={"ragi"}>Ragi</MenuItem>
          <MenuItem value={"wheat"}>wheat</MenuItem>
        </Select>
      </FormControl>
      <div className="mt-1">
      <TextField id="outlined-basic" label="Quantity" 
                
                inputProps={{
                maxLength: 4,
                step: "1.0"
                
                }}
                onChange={quantityHandle}
                defaultValue={quantity.current}
                inputRef={quantity}
                />
      </div>
      <div className="mt-1">
      <TextField id="outlined-basic" label="Price" 
                
                inputProps={{
                maxLength: 10,
                step: "1.0"
                
                }}
                onChange={priceHandle}
                defaultValue={price.current}
                inputRef={price}
                />
      </div>
      <div className="mt-1">
        <br></br>
      <Typography variant="h6" align="center" className="font-weight-bold" >
         <span className="text-capitalize">Amount : {amount}</span>
        </Typography>
      </div>



      </div>
        
      </CardContent>
      
      <CardActions>
      
      <Button color="secondary" variant="contained" onClick={()=>removeItem(data.id)} className={classes.button}>Delete</Button>
      </CardActions>
    </Card>



        </div>
     );
}
 
export default ItemSelect;