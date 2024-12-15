import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AfficheArticle from './AfficheArticle'
const Listarticles = () => {

const[articles,setarticles]=useState([])
const fetcharticles=async()=>{
await axios.get("http://localhost:3001/api/articles")
.then(res=>{
setarticles(res.data)
console.log(res.data)
})
.catch(error=>{
    console.log(error)

})
}

useEffect(()=>{
    fetcharticles()
},[])

    


return (
    <div>
<h1>Liste Articles</h1>
<AfficheArticle article={articles} setarticles={setarticles}/>
</div>
)
}


export default Listarticles