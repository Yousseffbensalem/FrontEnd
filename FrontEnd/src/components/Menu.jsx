import React from 'react'
import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';

const Menu = ({}) => {
const{cartCount}=useShoppingCart();
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));
  
   
return (
  
<Navbar bg="primary" variant="dark">
<Container fluid>
<Navbar.Brand >Gestion Commerciale</Navbar.Brand>
<Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          </Link>
        

<Nav className="me-auto">

<Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
<Nav.Link as={Link} to="/scategories">Sous Catégories</Nav.Link>
<Nav.Link as={Link} to="/articles">Liste des Articles</Nav.Link>
<Nav.Link as={Link} to="/Client">Client</Nav.Link>
</Nav>
</Container>
<Form className="d-flex">
<FormControl
type="search"
placeholder="Search"
className="me-2"
aria-label="Search"
/>

<Button variant="success">Chercher</Button>
</Form>
</Navbar>
)
}
export default Menu