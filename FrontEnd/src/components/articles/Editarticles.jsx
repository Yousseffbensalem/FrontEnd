import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Articles.css"

import { useParams,useNavigate } from 'react-router-dom';

const Editarticles= () => {
const navigate=useNavigate();
const { id } = useParams();
const[article,setarticles]=useState({})
const loadarticles=async()=>{
axios.get(`http://localhost:3001/api/articles/${id}`)
.then((response)=>{setarticles(response.data)})
.catch ((error)=> {
console.log(error);
})
}
useEffect(() => {
loadarticles()
}, [])
const handleSubmit = async(event) => {
event.preventDefault();
//faire le put dans la BD
axios.put(`https://backendecomgs1.vercel.app/api/articles/${id}`,article)
.then(res => {
console.log(res);
navigate("/articles")
})
.catch(error=>{
console.log(error)
alert("Erreur ! Modification non effectuée")
})
};
return (
<div className="form-container">

<form className="categorie-form">
<h2>Modifier Article</h2>
<div className="form-group">
<label htmlFor="designation">Nom Article</label>
<input
type="text"
id="designation"
value={article.designation}
onChange={(e) =>

setarticles({...article,designation:e.target.value})}

className="form-input"
placeholder="Entrez nom article"
/>
</div>
<div className="form-group">

<label htmlFor="imageart">Image</label>
<input
type="text"
required
id="imageart"
value={article.imageart}
onChange={(e) =>

setarticles({...article,imageart:e.target.value})}

className="form-input"
placeholder="Image"
/>
{article.imageart? <img src={article.imageart}

alt="image" width="70"/>:null}

</div>

<button type="button" className="form-submit-button" onClick={(e)=>handleSubmit(e)}>Enregistrer</button>

</form>
</div>
)
}
export default Editarticles