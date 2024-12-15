const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const corsOptions = {
    origin: "http://localhost:3000", // Allowed origin
    credentials: true, // Allow credentials (cookies, headers)
  };
app.use((req, res, next) => { 
res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS'); 
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
next(); 
});
app.use(cors(corsOptions));
app.use(express.json())
const categorieRouter=require("./routes/categorie.route")
const scategorieRouter=require('./routes/scategorie.route')
const articleRouter=require('./routes/article.route')
const paymentRouter =require("./routes/payment.route.js");
const userRouter=require("./routes/user.route.js")
dotenv.config()
app.get("/",(req,res)=>{
    res.send("page accueil")
})
app.get("/contact",(req,res)=>{
    res.send("page contact")
})

// Connexion à la base données
mongoose.connect(process.env.DATABASE)
    .then(() => {console.log("Connexion à la base de données réussie");
   }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
   });
   
app.use("/api/categories",categorieRouter)
app.use("/api/scategories",scategorieRouter)
app.use("/api/articles",articleRouter)
app.use('/api/payment', paymentRouter);
app.use("/api/users",userRouter);
app.listen(process.env.PORT)
console.log("application executée sur le port " + process.env.PORT)
module.exports = app;