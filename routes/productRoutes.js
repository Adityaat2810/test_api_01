
const express = require('express');
const router=express.Router();

const Product=require('../models/product_model')
const {getProducts,
    getProduct,
    createProduct,
    updateProduct,
deleteproduct}=require('../controller/productController')


//get data 
router.get('/product',getProducts)


// specific product
router.get('/product/:id',getProduct)

//post data 
router.post('/product',createProduct)

//updtae things
router.put('/product/:id',updateProduct)

//delete ap product
router.delete('/product/:id',deleteproduct)

module.exports=router;