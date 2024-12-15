import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from 'use-shopping-cart';

const Cards = ({article}) => {
  const {addItem}=useShoppingCart();
  const handleAdd=(article)=>{
    console.log(article)
    const product={
      id:article._id,
      title:article.designation,
      price:article.prix,
      qtestock:article.qtestock,
      image:article.imageart,
      quantity:1
    };
    addItem(article);
    console.log('article ajouté avec succes',product);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={article.imageart}
      title={article.designation}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {article.designation.substr(0,20)}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Prix:{article.prix}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <button
    className="card-button"
    onClick={() => handleAdd(article)}>
<i className="fa-solid fa-basket-shopping"></i>
      Add to cart
</button>
  </div>
  )
}

export default Cards