
// import React,{useState} from 'react'
// // import PhotoBox from '../gallary/PhotoBox'
// import InfiniteScroll from "react-infinite-scroll-component"
// import Photo from '../gallary/Photo'
// import useFetchImages from '../hooks/useFetchImages'

// export default function Gallaryscroll() {
//     const [page, setpage] = useState(1)
    
//     const [Imagescroll, setimagescroll ,error,load] =useFetchImages(page)


//     function handleRemove(index){
//         setimagescroll(Imagescroll.filter((img,i)=>i!==index))
//         }

//     return (
//     <InfiniteScroll dataLength={Imagescroll.length} next={()=>{setpage(page+1)}}
//      hasMore={true}>
//         <section className='container'> 
//             <h1>From Unsplah</h1>
//         {error.length>0 ?<p> {error}</p>  :
        
//         <div className='image-box'>
//             {
//             Imagescroll.map((img,index)=>{ return (
//                 <Photo Image={img.urls.regular} index={index}  handleRemove={handleRemove}/>
//         )})}
//         </div>

        
//         }
        
//         </section>    
//         </InfiniteScroll>
//     )
// }
