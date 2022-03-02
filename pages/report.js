import TextField from "@material-ui/core/TextField";
import CardLayout from "../components/card/card";
import React, { useState,useEffect } from "react";
import Search from "../components/search/search";
import Switch from "../components/switch/switch";
import CollapsibleTable from "../components/collapsibleTable/collapsibleTable";
import advanceSearch from "../components/advanceSearch/advanceSearch";
function Report(props) {
  const [flag, setFlag] = useState(false);
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    console.log("asd")
    const buyrows = createBuy()
    console.log(buyrows)
    setRows(buyrows)
  },[])

  function createBuy() {
    return [
      createData(110001, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110002, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110003, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110004, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110005, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110006, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110007, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110008, "12/12/2021", "Buy", 2000, "Paid"),
      createData(110009, "12/12/2021", "Buy", 2000, "Paid"),
      createData(1100010, "12/12/2021", "Buy", 2000, "Paid"),
      createData(1100011, "12/12/2021", "Buy", 2000, "Paid"),
    ];
  }
  function createSell() {
    return [
      createData(110001, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110002, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110003, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110004, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110005, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110006, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110007, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110008, "12/12/2021", "Sell", 2000, "Paid"),
      createData(110009, "12/12/2021", "Sell", 2000, "Paid"),
      createData(1100010, "12/12/2021", "Sell", 2000, "Paid"),
      createData(1100011, "12/12/2021", "Sell", 2000, "Paid"),
    ];
  }
  function createData(itemID, date, type, amount, status, price) {
    
    return {
      itemID,
      date,
      type,
      amount,
      status,
      price,
      itemDetail: [
        { ItemName: 'Raagi', quantity: '10', price: 3 },
        { ItemName: 'Wheat', quantity: '20', price: 1 },
      ],
    };
  }

  function onClickHandle(f){
    if(f)
    {
      setRows(createSell())
    }
    else{
      setRows(createBuy())

    }
      setFlag(f)
  }
  const [todayData, settodayData] = useState([
    {
      title: "today's buy",
      data: [
        ["Items", 7],
        ["qunatities", 3],
        ["amount", 300],
      ],
      color: "primary",
    },
    {
      title: "today's sell",
      data: [
        ["Items", 7],
        ["qunatities", 6],
        ["amount", 300],
      ],
      color: "error",
    },
  ]);


  return (
    <div>
      <h1>Report</h1>
      <div className="d-flex  justify-content-center mt-5">
        {todayData.map((item) => {
          return (
            <div className="m-2" key={item.itemType}>
              <CardLayout data={item} edit="false"></CardLayout>
            </div>
          );
        })}
      </div>
     
      <div className="d-flex justify-content-center flex-wrap flex-column align-items-center m-3">
      
        <div className="mb-4">
      <Switch flag={flag} onClickHandle={onClickHandle}>      
      </Switch>
      </div>
      <CollapsibleTable rowData={ rows}>
        </CollapsibleTable>
      </div>
      
    </div>
    
  );
}

export default Report;
