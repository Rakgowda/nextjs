import React,{useState} from 'react';
import appTheme from "../../styles/Theme.module.css"
import advsrchTheme from "./advanceSearch.module.css"
const AdvanceSearch =()=> {
    const [toggle, settoggle] = useState(true);
    function onClickHandler(){
    settoggle(!toggle)
    }
  return ( 
<div>
  <div className={`${appTheme.ml2} ${advsrchTheme.advanceSearch}`} onClick={onClickHandler}>
      Adance Search
  </div>
  {toggle? <div>
      AD
  </div>:""}

  </div>
  )
}

export default AdvanceSearch;
