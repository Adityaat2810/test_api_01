
require('dotenv').config()
const express =require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes');
const errorMiddleware=require('./middleware/errorMiddleWare')
const cors = require('cors')

var app=express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



//routes
app.use('/api',productRoute)

app.get('/',(req , res)=>{
   res.send("hello node api ")
})
app.get('/blog',(req , res)=>{
    res.send("hello blog i am adity api ")
})


app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("mongodb connected");
    app.listen(PORT,()=>{
        console.log('Node api app is running on port 3000')
    })
    
})
.catch((error)=>{
    console.log(error);
})
