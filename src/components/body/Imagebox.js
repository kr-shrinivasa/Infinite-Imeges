
// import React, { useEffect } from 'react'
import { useState } from 'react'
import PhotoBox from '../gallary/PhotoBox'
// import useFetchImages from '../hooks/useFetchImages'
// import SingleImage from './SingleImage'

import "./Imagebox.css"
// import SingleImage from './SingleImage'

export default function Imagebox() {
    

    // const[savesearch,setsaveSearch]= useState("")
    const [search, setsearch] = useState("")
  
    const [typingTimeout, settypingTimeout ] = useState("")
    
    function handleclick(e){
        // console.log("working")
        if (search){
    //    setsaveSearch(search)
        // setsearch("")
        }
    }

    function handlechange(e){
        // console.log(e.target.value)
        
        const text =e.target.value
        console.log(text)
        clearTimeout(typingTimeout);
        const timeout =setTimeout(()=>{
            setsearch(text)}
        ,1000)
        settypingTimeout(timeout)
        
    }
  

    return (
        <>
        <section className='header'>
        <div className="center">
            <p>search photos</p>           
            <div className='add-form'>
                <input type="text"  placeholder=' ex:Dogs,Cars Etc....' onChange={handlechange}/>
                <button onClick={handleclick}><span></span> search image</button>
            </div>
            </div>
        </section>
        <PhotoBox searchtype={search}/>
        </>
        
    )
}
