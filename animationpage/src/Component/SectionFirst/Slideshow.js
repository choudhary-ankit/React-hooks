import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Style from './Slideshow.module.css'

const Slideshow=()=>{
    let [name,setName]=useState(true);

const changeName=()=>{
    if(name===true){
        setName(false);
    }
    else{
        setName(true);
    }
    }
    return(
        <div className={Style.body}> 
            <div>
                {
                    name?
                    <h1>Ankit</h1>
                    :
                    <h1>Anuj</h1>
                }
                <button onClick={changeName}>Change Name</button>
            </div>
        </div>
    )
};
export default Slideshow;