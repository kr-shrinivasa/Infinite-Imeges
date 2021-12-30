

import React from 'react'
import { useState } from 'react'
// import SingleImage from './SingleImage'

import "./Imagebox.css"
import SingleImage from './SingleImage'



export default function Imagebox() {
    

        const [image,setimages]=useState(['https://images.unsplash.com/photo-1614715414627-c5806d69b7fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    
        'https://images.unsplash.com/photo-1610399214658-52b9fdea4627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    
        'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    
        'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"])
    
    const [newurl, setnewurl] = useState("")

    function handleclick(e){
        console.log("working")
        if (newurl){
        setimages([...image,newurl])
        setnewurl("")}
    }

    function handlechange(e){
        // console.log(e.target.value)
        setnewurl(e.target.value)
    }
    function handleRemove(index){
        setimages(image.filter((img,i)=>i!==index))
    }

    return (
        <>
        <section className='header'>
        <div className="center">
            <p>type url to add images.....</p>           
            <div className='add-form'>
                <input type="text" value={newurl} onChange={handlechange}/>
                <button onClick={handleclick}><span></span> Add Image</button>
            </div>
            </div>
        </section>
        <section className='container'>  
        <div className='image-box'>
            {image.map((img,index)=>{ return (
                <SingleImage Image={img} index={index} setimages={setimages} handleRemove={handleRemove}/>
        )})}
        </div>
        </section>
        </>
    )
}
