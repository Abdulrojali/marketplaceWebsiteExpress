const mongoose = require('mongoose')
mongoose.connect(process.env.url_DB)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


const schema = new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:String
    },
    deskripsi:{
        type:String
    }
})

const products=mongoose.model('products',schema)
module.exports = products