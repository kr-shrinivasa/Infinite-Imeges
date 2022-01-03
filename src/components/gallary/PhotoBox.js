
import React, { useState } from 'react'
import useFetchImages from '../hooks/useFetchImages'
import Pagination from './Pagination'

import Photo from './Photo'
import "./photoBox.css"

export default function PhotoBox({searchtype}) {
    const [page, setpage] = useState(1)
    const [Images, setimage ,error,load] =useFetchImages(page,searchtype)


    function handleRemove(index){
        setimage(Images.filter((img,i)=>i!==index))
        }
        
    return (load? (<div className="container">
        <h1><i className='fas fa-circle-notch fa-spin'></i> loading</h1>
    </div>):(
        <section className='container'> 
            <h1>From Unsplah</h1>
        {error.length>0 ?<p> {error}</p>  :
        <>
        <Pagination Images={Images} page={page} setpage={setpage}></Pagination>
        <div className='image-box'>
            {
            Images.map((img,index)=>{ return (
                <Photo Image={img.urls.regular} index={index}  handleRemove={handleRemove}/>
        )})}
        </div></>
        }
        </section>    
    ))
}
