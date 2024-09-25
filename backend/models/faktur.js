const mongoose = require('mongoose')
mongoose.connect(process.env.url_DB)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

const schema = mongoose.Schema({
        orderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'faktur'
        }
})

const dataFaktur=mongoose.model('dataFaktur',schema)
module.exports=dataFaktur