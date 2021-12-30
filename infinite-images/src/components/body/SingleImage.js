import "./singleimage.css"
import React from 'react'
import { useState } from 'react'



export default function SingleImage({Image,index,handleRemove}) {
    const [ishover, sethover] = useState(false)
    return (
        <div className={`image-container `} onMouseEnter={()=>{sethover(true)}}
         onMouseLeave={()=>{sethover(false)}}>
             
             <div className={` ${ishover ? "arrange ":"hide"}`}>
             <i className='fa fa-trash-o' onClick={()=>handleRemove(index)}></i>
                 <div className="icons">
                 <i className='fa fa-heart-o'></i>
                 <i className='fa fa-download'></i></div>
                 
             </div>

            <img src={Image} alt="somethig missing" key={index}   />
        </div>
    )
}
