

import React, { useEffect,useState } from 'react'
import Axios from "axios"
// import SingleImage from '../body/SingleImage'
import Photo from './Photo'
import "./photoBox.css"

export default function PhotoBox() {
    const [Images, setimage] = useState([])
    const [page, setpage] = useState(1)
    const [error, seterror] = useState("")
    useEffect(()=>{
        
        Axios.get(`https://api.unsplash.com/photos/?client_id=QSWOJDe-vhUJ-FlrvWHG6uNsFequf03C06kNkOsySNI&page=${page}`).then(res=>{
            // console.log(res.data)
            setimage([...res.data])    
            }).catch(e=>{seterror("some thing wrong  url not found")
            console.log()})
    },[page])

    function handleRemove(index){
        setimage(Images.filter((img,i)=>i!==index))
        }
        
    return (
        <section className='container'> 
            <h1>From Unsplah</h1>
        {error.length>0 ?<p> {error}</p>  :
        <>
        <div className='image-box'>
            {
            Images.map((img,index)=>{ return (
                <Photo Image={img.urls.regular} index={index}  handleRemove={handleRemove}/>
        )})}
        </div>
        <div className="btn-div">
          {Images.map((img,index)=>{
              return <button className='btn' onClick={()=>{setpage(index+1)}}> <span></span> {index+1}</button>
          })}  
        </div> </>}
        </section>    
    )
}
