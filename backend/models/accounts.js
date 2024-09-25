const mongoose = require('mongoose')
mongoose.connect(process.env.url_DB)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


const schema = new mongoose.Schema({
    nama:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    dataOrder:{
        type:mongoose.Types.ObjectId,
        ref:'order'
    },
    dataFaktur:{
        type:mongoose.Types.ObjectId,
        ref:'faktur'
    }
})

const accounts=mongoose.model('accounts',schema)
module.exports=accounts