const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
require('dotenv').config()
const multer =require('multer')
const path=require('path')
const app=express()
app.set(express.static(path.join(__dirname,'assets')))

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'assets'))
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage,
    limits: { fileSize: 10 * 1024 * 1024 }
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// const {usernames,passwords} = ''

const accounts = require('./models/accounts')
const orderData = require('./models/order')
const dataFaktur = require('./models/faktur')
const products = require('./models/product')


app.post('/createAccounts',async(req,res)=>{
    try{
        const {namaUser,umurUser,alamatUser,mailUser,usernameUser,passwordUser}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashPasswordUser=bcrypt.hashSync(passwordUser,salt)
        const newAccountsUsers = new accounts({           
             nama:namaUser,
            age:umurUser,
            address:alamatUser,
            email:mailUser,
            username:usernameUser,
            password:hashPasswordUser})

        if(newAccountsUsers){
            await newAccountsUsers.save()
            res.status(200).send('sukses to create Accounts')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.post('/login',async(req,res)=>{
    try{
        const {user,pass} =req.body
        const usernameAuthorization=await accounts.findOne({username:user})
        if(usernameAuthorization){
            const passwordAuthorization=bcrypt.compareSync(pass,usernameAuthorization.password)
            if(passwordAuthorization){
                usernames=usernameAuthorization,
                passwords=passwordAuthorization
                res.status(200).send('sukses to login')
            }
            else{
                res.status(300).send('invalid password')
            }
        }
        else{
            res.status(300).send('invalid username')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})


app.get('/products',async(req,res)=>{
    try{      
        const getAllProducts= await products.find({})
        if(getAllProducts){
            res.status(200)
            res.json(getAllProducts)
        }
        else{
            res.status(300)
            res.send('invalid get Products')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})
app.get('/products/:id',async(req,res)=>{
    try{
        const {id} =req.params
        const findProductId=await products.findById(id)
        res.status(200).json(findProductId)
    }
    catch(Err){
        res.status(404)
        throw new Error(Err)
    }
})
app.post('/products',storage.single('img'),async(req,res)=>{
    try{
        const dataFile = req.file.originalname
        res.send(dataFile)
        console.log(dataFile)
        // const {nama,harga,text}=req.body
        // const newProducts=new products({
        //     name:nama,
        //     img:req.file.filename,
        //     price:harga,
        //     deskripsi:text
        // })
        // if(newProducts){
        //     await newProducts.save()
        //     res.status(200).json(newProducts)
        // }
        // else{
        //     res.status(300).send('invalid to new products')
        // }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})



app.post('/order/:id',async(req,res)=>{
    try{
        const {id} =req.params
        const newOrder=await orderData({
            productId:id
        })
        if(newOrder){
           await newOrder.save()
            res.status(200).send('sukses to add order products')
        }
        else{
            res.status(300).send('invalid to get order products')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.get('/order',async(req,res)=>{
    try{
        const getAllOrder=await orderData.find({})
        
        if(getAllOrder){
            res.status(200).json(getAllOrder)
        }
        else{
            res.status(300).send('invalid to get all orders')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})
app.get('/order/:id',async(req,res)=>{
    try{
        const {id} = req.params 
        const findDataOrder=await orderData({productId:id})
        if(findDataOrder){
            res.status(200).send(findDataOrder)
        }
        else{
            res.status(300).send('invalid to get data order!!')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.get('/faktur',async(req,res)=>{
    try{
        const getAllFaktur=await dataFaktur.find({})
        if(getAllFaktur){
            res.status(200).json(getAllFaktur)
        }
        else{
            res.status(300).send('invalid get faktur')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.post('/faktur/:id',async(req,res)=>{
    try{
        const {id} =req.params 
        const postFaktur = await new dataFaktur({
            orderId:id
        }) 
        if(postFaktur){
            await postFaktur.save()
            const orderFakturDelete=await orderData.findOneAndDelete({productId:id})
            if(orderFakturDelete){
                res.status(200).send('sukses to post order')
            }
        
        }
        else{
            res.status(300).send('invalid to post faktur')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.get('/faktur/:id',async(req,res)=>{
    try{
        res.status(200)
        const {id} = req.params
        const findFaktur = await dataFaktur.find({orderId:id})
        if(findFaktur){
            res.status(200).json(findFaktur)
        }
        else{
            res.status(300).send('invalid to get faktur')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
})

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})