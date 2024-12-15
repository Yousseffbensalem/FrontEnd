import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AffichesCategorie from '../scategories/AffichesCategories'

const Listscategories = () => {
const[scategories,setsCategories]=useState([])
const fetchscategories=async()=>{
await axios.get("http://localhost:3001/api/scategories")
.then(res=>{
setsCategories(res.data)
console.log(res.data)
})
.catch(error=>{
    console.log(error)
})
}
useEffect(()=>{
    fetchscategories()
},[])


return (
<div>
<h1>Liste categories</h1>
<AffichesCategorie scategories={scategories} setsCategories={setsCategories}/>
</div>
)
}
export default Listscategories