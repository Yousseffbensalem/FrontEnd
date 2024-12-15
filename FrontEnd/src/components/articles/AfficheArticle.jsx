import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const AfficheArticle = ({article,setarticles}) => {
    const { id } = useParams();

const navigate=useNavigate(); 
const deleteArticles = async (id) => {
if (!window.confirm("Are you sure you want to delete")) {
return;
}
axios.delete(`http://localhost:3001/api/articles/${id}`)
.then(() => {
console.log('successfully deleted!')
setarticles(article.filter((cat) => cat._id !== id));
}).catch((error) => {
console.log(error)
})

}

const columns = useMemo(
() => [
{
accessorKey: 'imageart',
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
accessorKey: 'designation',
header: 'Nom articles',
size: 100,
},

{
accessorKey: '_id',
header: 'actions',
size: 10,
Cell: ({ cell, row }) => (
<div style={{ display: 'flex', justifyContent: 'space-between',

gap: '0.5rem' }}>
<Button onClick={() => {navigate(`/article/edit/${cell.row.original._id}`)}}
variant="contained"
color="warning"
style={{ fontSize: '10px', padding: '12px 24px' }}
>
<i className="fa-solid fa-pen-to-square"></i>Update
</Button>



<Button
onClick={() => {deleteArticles(cell.row.original._id)}}
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
[article],
);
const table = useMaterialReactTable({
columns,
data : article
});
return (
<div className='container'>
{article &&  article.length > 0 && <MaterialReactTable table={table} /> }
</div>
)
}
export default AfficheArticle