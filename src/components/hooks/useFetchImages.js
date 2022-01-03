import  { useEffect,useState } from 'react'
import Axios from "axios"

export default function useFetchImages(page,searchtype) {
    const [Images, setimage] = useState([])
    const [error, seterror] = useState("")
    const [load, setload] =useState(true)
    // const [Imagescroll, setimagescroll] = useState([])
    // console.log(searchtype)
    const path= !searchtype? "/photos" :"/search/photos"
    const api="https://api.unsplash.com"
    const key ="QSWOJDe-vhUJ-FlrvWHG6uNsFequf03C06kNkOsySNI"


    const url =`${api}${path}/?client_id=${key}&page=${page}&query=${searchtype}`
    console.log(searchtype)
    
    useEffect(()=>{
       setload(true)
        Axios.get(url).then(res=>{
            if (searchtype) {
            setimage([ ...res.data.results])}
            else{
                setimage([ ...res.data])
            }
            // setimagescroll([...Imagescroll,...res.data]) 
            // console.log(Imagescroll)
            setload(false)                        
            }).catch(e=>{seterror("some thing wrong  url not found")
            })
    },[page,searchtype])
    
    return [Images, setimage ,error,load]
   
}
