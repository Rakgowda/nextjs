import React,{useState,useRef} from 'react';
import CustomerDeatil from "../components/CustomerDetail"
import Button from '@material-ui/core/Button';
import ItemSelect from "../components/itemSelectList"
import theme from "../styles/Theme.module.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  

function Buy(props) {
const classes = useStyles();
    const [custDetail, setcustDetail] = useState({})
    const CustomerName = useRef("")
    const CustomerAdd = useRef("")
    const CustomerPhone = useRef("")

    const [customerNextButton,setcustomerNextButton] = useState(true);
    const [nextCust, setnextCust] = useState(false)
    const [itemCount, setitemCount] = useState([])
    const itemCountRef = useRef(0)

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
    }

    function onClickItemPrev(){
         CustomerName.current = custDetail.name
         CustomerAdd.current = custDetail.add
         CustomerPhone.current = custDetail.phone
        setnextCust(false)
    }
    function incrementCount()
    {
        debugger
        itemCountRef.current = itemCountRef.current+1;
        
        let newitem = [...itemCount,itemCountRef.current]
        setitemCount(newitem)
    }
    function removeItem(index)
    {
            let newitem = itemCount.filter(e=>e!=index)
            setitemCount(newitem)
    }
    function item()
    {
        let item=[];
        for(let i=0;i<itemCount.length;i++)
        {
            item.push(<ItemSelect key={i} count={i} itemIndex={itemCount[i]} removeItem={removeItem}></ItemSelect>)
        }

        item.push(<Fab color="primary" aria-label="add" onClick={incrementCount}>
        <AddBoxIcon />
      </Fab>) ;
        return item;
    }

    return (
        <div>
            <h1>Buy</h1>
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

            {!nextCust?"":(
                    <div>

                        <div className="d-flex  justify-content-center mt-5 flex-wrap">
                                            {item()}
                        </div>

                       
                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                                onClickItemPrev
                            } 
                            className={theme.placeBottomleft}
                        >
                            Prev 
                        </Button>

                        < Button size = "medium"
                        variant = "contained"
                        color = "primary"
                        onClick = {
                                onClickItemPrev
                            } 
                            className={theme.placeBottomRight}
                        >
                            Next 
                        </Button>
                       

                    </div>
            )}
           

        </div>
    );
}

export default Buy;