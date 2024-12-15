import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AfficheCategorie from './AfficheCategorie';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';
const Listcategories = () => {
const[categories,setCategories]=useState([])
const fetchcategories=async()=>{
await axios.get("http://localhost:3001/api/categories")
.then(res=>{
setCategories(res.data)
console.log(res.data)
})
.catch(error=>{
    console.log(error)
})
}
useEffect(()=>{
    fetchcategories()
},[])

return (
<div>
<Button variant="contained" style={{ backgroundColor: 'black' }}>
<Link to="/categories/add" style={{ color: 'white',textDecoration : 'none'}}>
<i className="fa-solid fa-plus-square"></i> Nouveau
</Link>
</Button>

<h1>Liste categories</h1>
<AfficheCategorie categories={categories} setCategories={setCategories}/>



</div>
)

}
export default Listcategories