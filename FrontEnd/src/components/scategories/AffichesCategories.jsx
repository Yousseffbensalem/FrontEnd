import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AffichesCategorie = ({scategories,setsCategories}) => {
const navigate=useNavigate(); 
const deletesCategorie = async (id) => {
if (!window.confirm("Are you sure you want to delete")) {
return;
}
axios.delete(`http://localhost:3001/api/scategories/${id}`)
.then(() => {
console.log('successfully deleted!')
setsCategories(scategories.filter((cat) => cat._id !== id));
}).catch((error) => {
console.log(error)
})

}

const columns = useMemo(
() => [
{
accessorKey: 'imagescategorie',
header: 'Image',
Cell: ({ cell }) => (
<Box
sx={{
display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<img
alt=""
width={200}
height={80}
src={cell.getValue()}
loading="lazy"
style={{ borderRadius: '5%' }}
/></Box>),

},
{
accessorKey: 'nomscategorie',
header: 'Nom Catégorie',
size: 100,
},

{
accessorKey: '_id',
header: 'actions',
size: 10,
Cell: ({ cell, row }) => (
<div style={{ display: 'flex', justifyContent: 'space-between',

gap: '0.5rem' }}>
<Button onClick={() => {navigate (`/scategories/edit/${cell.row.original._id}`)}}
variant="contained"
color="warning"
style={{ fontSize: '10px', padding: '12px 24px' }}
>
<i className="fa-solid fa-pen-to-square"></i>Update
</Button>



<Button
onClick={() => {deletesCategorie(cell.row.original._id)}}
variant="contained"
color="error"
style={{ fontSize: '10px', padding: '12px 24px' }}
>
<i className="fa fa-trash"></i>Delete
</Button>
</div>
)
},
],
[scategories],
);
const table = useMaterialReactTable({
columns,
data : scategories
});
return (
<div className='container'>
{scategories && scategories.length > 0 && <MaterialReactTable table={table} /> }
</div>
)
}
export default AffichesCategorie