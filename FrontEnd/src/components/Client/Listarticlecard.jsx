import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
const Listarticlecard = () => {
    const [articles,setArticle]=useState([])
    const fetcharticles=async()=>{
        try{
            const res= await axios.get("http://localhost:3001/api/articles")
            setArticle(res.data)
        }catch (erreur){
            console.log(erreur)
        }
    }
    useEffect(()=>{
      fetcharticles()
    },[])
    
      return (
        <div className='container'>
          <div style={{"display":'flex',"flexWrap":"Wrap","justifyContent":"left"}}>
        {
          articles.map((art,index)=>
          <Cards article={art} key={index}/>)
        }
        </div>
        </div>
      )
    }
    
    export default Listarticlecard
