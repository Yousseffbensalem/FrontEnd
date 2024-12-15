
import "@fortawesome/fontawesome-free/css/all.css";
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Editarticles from "./components/articles/Editarticles";
import { CartProvider } from "use-shopping-cart";
import Insertarticle from "./components/articles/Insertarticles";
import Listarticles from "./components/articles/Listarticles";
import Editcategorie from "./components/categories/Editcategories";
import Insertcategorie from "./components/categories/Insertcategories";
import Listcategories from "./components/categories/Listcategories";
import Editscategories from "./components/scategories/Editscategories";
import Insertscategories from "./components/scategories/Insertscategories";
import Listscategories from "./components/scategories/Listscategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewcategories from "./components/categories/Viewcategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Viewarticles from "./components/articles/Viewarticles";
import Cart from './components/Client/Cart';
import Listarticlecard from "./components/Client/Listarticlecard";
import Menu from "./components/Menu";

const App=() =>{
return (
<div>
    <CartProvider>
<Router>
<Menu/>
<Routes>
<Route path="/Menu" exact element={<Menu/>}/>
<Route path="/articles" exact element={<Listarticles/>}/>
<Route path="/articles/Insertarticles" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticles/>}/>
<Route path="/article/view/:id" element={<Viewarticles/>}/>
<Route path="/categories" exact element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategories/>}/>
<Route path="/scategories" exact element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategories/>}/>
<Route path="/scategories/edit/:id" element={<Editscategories/>}/>
<Route path="/scategories/view/:id" element={<Viewscategories/>}/>
<Route path="/Client" element={<Listarticlecard/>}/>
<Route path="/cart" element={<Cart/>}/>




</Routes>
</Router>
</CartProvider>
</div>
);
}
export default App;
