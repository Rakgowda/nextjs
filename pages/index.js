import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "../components/nav"
import CardLayout from '../components/card/card';
import React,{useState} from 'react';



export default function Home() {

  const [todayData, settodayData] = useState(
    [{
      title:"today's buy",
    data:[
      ["Items",7],
      ["qunatities",3],
      ["amount",300]
    ],
    "color":"primary"
},
{
  title:"today's sell",
data:[
  ["Items",7],
  ["qunatities",6],
  ["amount",300]
],
"color":"error"
}
]

  );
  
  
  return (

    <>
    
 
      <h1 className="text-left">Hey Rakshith,</h1>

      <div className="d-flex  justify-content-center mt-5">

      {todayData.map(item=>{

        return <div className="m-2" key={item.itemType}>
        <CardLayout data={item} edit="false"></CardLayout>

        </div>
      })}
        
        
      </div>

      <div>

      </div>
   
    
    </>
    
  )
}
