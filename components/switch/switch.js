import React,{useState} from 'react'
import switchStyle from "./switch.module.css"

export default function Switch(props){

    function handleAnimation(e){
        debugger
        if(props.flag)
        {
            e.target.parentElement.classList.add(switchStyle.reverse)

        }
    }
     
    return (
        <React.Fragment>
        <input type='checkbox' className={switchStyle.input} checked={props.flag} />
            <div className={`${switchStyle.switch} ${'d-flex justify-content-center flex-wrap'}`}>
            <div className={`${switchStyle.switch_left } ${"m-1"} `} onClick={(e)=>{
                handleAnimation(e)
                props.onClickHandle(false)
                }}>Buy</div>
            <div className={`${switchStyle.switch_right } ${"m-1"}`}
            onClick={(e)=>{
                props.onClickHandle(true)
                }}
            >Sell</div>
            </div>
        </React.Fragment>
    )
}
