import React from 'react'
import "./pagi.css"
export default function Pagination({Images,setpage,page}) {
    
    return (

        <div className="btn-div">
          {Images.map((img,index)=>{
              return <button className={`btn-small ${page ===index+1? "btn":""}`} onClick={()=>{setpage(index+1)}} key={index}> <span></span> {index+1}</button>
          })}  
        </div>

    )
}
