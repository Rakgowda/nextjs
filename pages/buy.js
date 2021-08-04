import React,{useState,useRef} from 'react';
import CustomerDeatil from "../components/CustomerDetail"
import Button from '@material-ui/core/Button';
import ItemSelect from "../components/itemSelectList"
import theme from "../styles/Theme.module.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ItemOverView from "../components/ItemOverView"
import CustomizedSteppers from "../components/Stepper"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab:{
        display: "block",
        "margin-left": "auto",
        "margin-right": "auto",
    }
  }));
  

function Buy(props) {
const classes = useStyles();
    const [custDetail, setcustDetail] = useState({})
    const CustomerName = useRef("")
    const CustomerAdd = useRef("")
    const CustomerPhone = useRef("")

    const [customerNextButton,setcustomerNextButton] = useState(true);
    const [ItemdetailNextButton,setItemdetailNextButton] = useState(true);

    const [nextCust, setnextCust] = useState(false)
    const [itemCount, setitemCount] = useState([])
    const itemCountRef = useRef(0)
    const [nextItemAdd, setnextItemAdd] = useState(false)
    const [overview,setOverview] = useState(false)
    const [stepper,setStepper] = useState(0)
    

    function onChangeCusDeatil(){
        debugger
        CustomerPhone.current.value = CustomerPhone.current.value.replace(/[^0-9]/g, '');
        let custName = CustomerName.current.value;
        let custAdd = CustomerAdd.current.value;
        let custPhone = CustomerPhone.current.value;

        if(custName != "" && custAdd !="" && custPhone != "")
        {
            setcustomerNextButton(false);
        }
        else if(customerNextButton==false){
            setcustomerNextButton(true);
        }
    }

    function onClicCusNext()
    {
        let detail = {}
        detail.name = CustomerName.current.value
        detail.add = CustomerAdd.current.value
        detail.phone = CustomerPhone.current.value

        setcustDetail(detail)

        setnextCust(true)
        setStepper(1)
    }

    function onClickItemPrev(){
         CustomerName.current = custDetail.name
         CustomerAdd.current = custDetail.add
         CustomerPhone.current = custDetail.phone
        setnextCust(false)
        setStepper(0)
    }
    function incrementCount()
    {
        debugger
        itemCountRef.current = itemCountRef.current+1;
        let newitem ={
            display:"",
            itemName:"",
            qunatity:"",
            price:"",
            amount:"",
            id:itemCountRef.current
        }
        
        let newitemList = [...itemCount,newitem]
        setitemCount(newitemList)
        setItemdetailNextButton(true)
    }
    function removeItem(index)
    {
            let newitem = itemCount.filter(e=>e.id!=index)
            setitemCount(newitem)
            checkItemAdded(newitem)
    }
    function item()
    {
        let item=[];
        for(let i=0;i<itemCount.length;i++)
        {
            item.push(<ItemSelect 
                onChangeQunatit={onChangeQunatit}
                onChangePrice={onChangePrice}
                onitemUpdate={onitemUpdate} key={itemCount[i].id} count={i} data={itemCount[i]} removeItem={removeItem}></ItemSelect>)
        }

       
        return item;
    }



    function onitemUpdate(value,id){
        let newitem = [...itemCount]
        newitem.map(e=>{
                if(e.id == id)
                {
                    e.itemName=value;
                }
            })
        checkItemAdded(newitem)

            setitemCount(newitem)
        

    }

    function onChangeQunatit(value,id){
        debugger
        let newitem = [...itemCount]
        newitem.map(e=>{
            if(e.id == id)
            {
                
                e.qunatity=value;
                
            }
        })
        checkItemAdded(newitem)

        setitemCount(newitem)

        

    }
    function onChangePrice(value,id){
        let newitem = [...itemCount]
        newitem.map(e=>{
            if(e.id == id)
            {
                e.price=value;
               
            }
        })
        console.log(newitem)
        checkItemAdded(newitem)
        
        setitemCount(newitem)

    }

    function checkItemAdded(item)
    {
        debugger
        let flag = true;

        for(let i =0;i<item.length;i++)
        {
            if(item[i].itemName == "" || item[i].qunatity=="" || item[i].price=="")
            {
                flag = false;
                break;
            }
        }
       

        if(flag && item.length !=0)
        {
            setItemdetailNextButton(false)
        }
        else if(!ItemdetailNextButton){
            setItemdetailNextButton(true)
        }
    }
    
    function onClickNextItemPage(){
        debugger
        setnextItemAdd(true)
        setOverview(true)
        setStepper(2)
    }
    function onClickItemOverviewPrev(){
        setnextItemAdd(false)
        setOverview(false)
        setStepper(1)
    }

    return (
        <div>
            <h1>Buy</h1>
            <CustomizedSteppers stepper={stepper}></CustomizedSteppers>
            {nextCust?"":(
                    <div>
                    <CustomerDeatil 
                    CustomerName={CustomerName} 
                    CustomerAdd={CustomerAdd} 
                    CustomerPhone={CustomerPhone} 
                    onChange={onChangeCusDeatil}
                    customerNextButton={customerNextButton}
                    onClicCusNext={onClicCusNext}

                    >
                    
                    </CustomerDeatil>
                    </div>
            )}

            {(nextCust && !nextItemAdd) ?(
                    <div>
                        <Fab color="primary" aria-label="add" onClick={incrementCount} className={classes.fab}>
        <AddBoxIcon />
      </Fab>
                        <div className="d-flex  justify-content-center mt-5 flex-wrap">
                                            {item()}
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                       <div className={theme.bottom}>
                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                                onClickItemPrev
                            } 
                            className={theme.leftAlign}
                        >
                            Prev 
                        </Button>

                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                            onClickNextItemPage
                            } 
                            className={theme.rightAlign}
                            disabled={ItemdetailNextButton}
                        >
                            Next 
                        </Button>
                        </div>

                    </div>
            ):""}


            {overview && nextItemAdd?(
                <>
                <ItemOverView customerDetail={custDetail} itemDetail={itemCount}>

                </ItemOverView>
                <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                <div className={theme.bottom}>
                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                                onClickItemOverviewPrev
                            } 
                            className={theme.leftAlign}
                        >
                            Prev 
                        </Button>

                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                            onClickNextItemPage
                            } 
                            className={theme.rightAlign}
                            disabled={ItemdetailNextButton}
                        >
                            Confirmed 
                        </Button>
                        </div>
                </>
            ):""}
           

        </div>
    );
}

export default Buy;