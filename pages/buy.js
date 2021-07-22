import React,{useState,useRef} from 'react';
import CustomerDeatil from "../components/CustomerDetail"
import Button from '@material-ui/core/Button';

function Buy(props) {

    const [custDetail, setcustDetail] = useState({})
    const CustomerName = useRef("")
    const CustomerAdd = useRef("")
    const CustomerPhone = useRef("")

    const [customerNextButton,setcustomerNextButton] = useState(true);
    const [nextCust, setnextCust] = useState(false)

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
                   <Button size="medium" variant="contained" color="primary" 
      onClick={onClickItemPrev}
      >
        Prev
      </Button>

                    </div>
            )}
           

        </div>
    );
}

export default Buy;