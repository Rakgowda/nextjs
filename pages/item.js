import React,{useState,useEffect} from 'react';
import CardLayout from '../components/card';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab:{
        position: "absolute",
        bottom: "2em",
        right: "2em"
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    noitem:{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%),"
    }
  }));

function Item(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [item, setitem] = useState([]);

    const itemName = React.useRef("");
    const itemGST = React.useRef("");
    const itemRate = React.useRef("");
    const isEditing = React.useRef(false);
    const getIndex = React.useRef();

    const [buttondisable,setbuttondisable] = useState(true)

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      isEditing.current =false;
      setOpen(false);
      setbuttondisable(true);
      
    };

    function checkFieldValue(){
      debugger
      // console.log(itemName)
      let currentGst =itemGST.current.value
      let currentRate = itemRate.current.value
      currentGst = currentGst.replace(/[^0-9 .]/g, '');
      
      currentRate = currentRate.replace(/[^0-9 .]/g, '');

      if(currentGst.split(".").length >2)
      {
        currentGst = currentGst.split(".")[0] +"."+ currentGst.split(".")[1]; 
      }
      if(currentRate.split(".").length >2)
      {
        currentRate = currentRate.split(".")[0] +"."+ currentRate.split(".")[1]; 
      }
      itemGST.current.value = currentGst
      itemRate.current.value = currentRate
      let itemname = itemName.current.value;
      let itemgst = itemGST.current.value;
      let itemrate = itemRate.current.value;

      if(itemname != "" && itemgst !="" && itemrate != "")
      {
        setbuttondisable(false);
      }
      else if(buttondisable==false){
        setbuttondisable(true);
      }
    }

    function onSubmit(){
      debugger
      let items= []
      let itemdata ={
        title:itemName.current.value,
        data:[
          [
            "rate",itemRate.current.value],
            ["gst",itemGST.current.value],
            ["lastUpdated","20/12/2020","#01937C"]
        ],
        "color":"primary"
      }
      

      if(!isEditing.current)
      {
        items=[...item,itemdata];
        setitem(items);
      }
      else{
        items =item;
        items[getIndex.current] = itemdata;
        setitem(items)
      }
      
      handleClose();

    }

    useEffect(() => {
        
        let items = [{
            title:"Raagi",
            data:[
              ["rate",17],
              ["gst",8],
              ["lastUpdated","20/12/2020","#01937C"]
            ],
            "color":"primary"
            },
            {
                title:"Wheat",
                data:[
                  ["rate",97],
                  ["gst",8],
                  ["lastUpdated","29/12/2020","#01937C"]
                ],
                "color":"primary"
            }
        ]
        setitem(items)
    }, [])

    function onEditHandle(item,index){
      // console.log(item)
      itemName.current = item.title;
      itemRate.current = item.data[0][1];
      itemGST.current = item.data[1][1];
      isEditing.current = true;
      getIndex.current = index;
      handleOpen()
      setbuttondisable(false)
        // alert("rak");
    }

    function deleteHandle(data,index){

      let newItem = item.filter((e,i)=> e.title!=data.title && index != i);
      setitem(newItem)

    }


    return (
        <>
        <h1>Item's</h1>
        <div className="d-flex  justify-content-center flex-wrap mt-5">
            {item.length >0 ?item.map((i,index)=>{
                return (
                    <div className="m-2" key={index}>
                    <CardLayout 
                    onEditHandle={onEditHandle}
                    deleteHandle={deleteHandle} 
                    data={i} 
                    edit="true" 
                    index={index}
                    ></CardLayout>
                    </div>
                )
            }):(
              <h2 className={classes.noitem}>No Item available</h2>
            )}
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleOpen} >
        <AddIcon />
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
       
      >
        
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Item</h2>
            <div id="transition-modal-description">
            <form className={classes.root} noValidate autoComplete="off">
      
         <div><TextField id="outlined-basic" label="Item Name" 
         inputRef={itemName} onChange={checkFieldValue} defaultValue={itemName.current} /></div>
         <div> <TextField id="outlined-basic" label="Rate" inputRef={itemRate} 
         defaultValue={itemRate.current}
          inputProps={{
            maxLength: 13,
            step: ".01",
            
          }}
         onChange={checkFieldValue} /></div>
         <div> 
           <TextField id="outlined-basic" label="GST"  inputRef={itemGST} 
         
          inputProps={{
            maxLength: 13,
            step: "1.0"
            
          }}
          defaultValue={itemGST.current}
         onChange={checkFieldValue} /></div>
         <div style={{"display": "flex","justify-content": "end","margin-top": "2em"}}>
           <Button variant="contained" color="primary" disabled={buttondisable} onClick={onSubmit}>
        Submit
      </Button></div>

    </form>
            </div>
          </div>
        
      </Modal>
        </>
    );
}

export default Item;