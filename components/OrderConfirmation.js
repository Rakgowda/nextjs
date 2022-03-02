import React from "react";
import Image from "next/image";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SuccessStyle from "../styles/Order.module.css"

const SuccessPage = ({onBuyOverView}) => {
    return ( 
        <div className={SuccessStyle.card}>
       
        <Card style={{ "min-width": 300 }}>
      <CardContent>
         <img src="../success-svgrepo-com.svg" className={SuccessStyle.succes}></img>
        <ul className={SuccessStyle.list}>
            <li>ID :343535 </li>
            <li>Date : 13/3/3333</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button size="small"
        variant = "contained"
        color = "primary"
        style={{margin:"auto"}}
        onClick={onBuyOverView}
        >Buy OverView</Button>
      </CardActions>
    </Card>
        </div>
     );
}
 
export default SuccessPage;