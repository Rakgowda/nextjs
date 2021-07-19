import React,{useState,useEffect} from 'react';
import CardLayout from '../components/card';

function Item(props) {

    const [item, setitem] = useState([]);
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
            },



        ]
        setitem(items)
    }, [item])


    return (
        <>
        <h1>Item's</h1>
        <div className="d-flex  justify-content-center mt-5">
            {item.map(i=>{
                return (
                    <div className="m-2" key={item.itemType}>
                    <CardLayout data={i}></CardLayout>
                    </div>
                )
            })}
            </div>
        </>
    );
}

export default Item;