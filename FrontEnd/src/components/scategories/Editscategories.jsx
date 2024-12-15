import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams,useNavigate } from 'react-router-dom';

const Editscategories= () => {
const navigate=useNavigate();
const { id } = useParams();
const[scategories,setsCategories]=useState({})
const loadscategories=async()=>{
axios.get(`http://localhost:3001/api/scategories/${id}`)
.then((response)=>{setsCategories(response.data)})
.catch ((error)=> {
console.log(error);
})
}
useEffect(() => {
loadscategories()
}, [])
const handleSubmit = async(event) => {
event.preventDefault();
//faire le put dans la BD
axios.put(`https://backendecomgs1.vercel.app/api/scategories/${id}`,scategories)
.then(res => {
console.log(res);
navigate("/scategories")
})
.catch(error=>{
console.log(error)
alert("Erreur ! Modification non effectuée")
})
};
return (
<div className="form-container">

<form className="categorie-form">
<h2>Modifier scategories</h2>
<div className="form-group">
<label htmlFor="nomscategorie">Nom scategories</label>
<input
type="text"
id="nomscategorie"
value={scategories.nomscategorie}
onChange={(e) =>

setsCategories({...scategories,nomscategorie:e.target.value})}

className="form-input"
placeholder="Entrez nom article"
/>
</div>
<div className="form-group">

<label htmlFor="imagecategorie">Image</label>
<input
type="text"
required
id="imagecategorie"
value={scategories.imagescategorie}
onChange={(e) =>

setsCategories({...scategories,imagescategorie:e.target.value})}

className="form-input"
placeholder="Image"
/>
{scategories.imagescategorie? <img src={scategories.imagescategorie}

alt="image" width="70"/>:null}

</div>

<button type="button" className="form-submit-button" onClick={(e)=>handleSubmit(e)}>Enregistrer</button>

</form>
</div>
)
}
export default Editscategories