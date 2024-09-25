const mongoose = require('mongoose')
mongoose.connect(process.env.url_DB)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


const schema = mongoose.Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:'productId'
    }
})

const orderData=mongoose.model('orderData',schema)
module.exports=orderData