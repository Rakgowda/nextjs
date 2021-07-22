import React,{useSate,useRef} from 'react';
import CustomerDeatil from "../components/CustomerDetail"
function Buy(props) {

    const CustomerDetail = useRef({
        name:"",
        address:"",
        phone:""
    })

    return (
        <div>
            <h1>Buy</h1>

            <CustomerDeatil></CustomerDeatil>

        </div>
    );
}

export default Buy;