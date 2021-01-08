import React,{useState,useEffect} from 'react'
import Style from './SectionSecond.module.css'

const SectionSecond=()=>{
    let [name, setName]=useState('');
    let [array, setArray]=useState([])

    useEffect(() => {
        setArray(['ram'])
        
    }, [name])
    const inputBox=(e)=>{
        setName(e.target.value)
    }
    const addName=()=>{
        setArray([...array, name])
    }
    
    return(
        <div className={Style.body}>
            <input placeholder="Name"  onChange={inputBox}></input>
            <button onClick={addName}>Add Name</button>
            <div className={Style.media}>
               {     
                array.map((e)=>{
                    console.log(e)
                    return(
                        <p>{e}</p>
                    )
                })
          
               }
            </div>
        </div>
    )
}
export default SectionSecond;