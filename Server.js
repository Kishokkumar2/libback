const mongoose=require('mongoose')
const express=require('express')
const app =express()
const cors=require('cors')
const Schema=require('./Schema')
const Schema1=require('./Schema1')

require('dotenv').config()
const PORT=process.env.PORT
app.use(express.json())

app.use(cors())
mongoose.connect('mongodb://localhost:27017/liba').then(function(){
    console.log("connected")
})
app.get('/k',async function(req,res){
  
    Schema.find({}).then(users =>res.json(users)).catch(err => res.json(err))
})
app.get('/gets/:id',async function(req,res){
    const id = req.params.id;
    Schema.findById({_id:id}).then(users =>res.json(users)).catch(err => res.json(err))
})

app.post('/book1',async function(req,res){
    const {names,email,age} = req.body
  
    console.log('aa',names,email,age)


    Schema.create(req.body).then(users =>res.json(users)).catch(err => res.json(err))
})
app.put('/updatebook/:id',async function(req,res){
    const id = req.params.id;
    Schema.findByIdAndUpdate({_id: id},{names:req.body.names,
        email:req.body.email,
        age:req.body.age})
    .then(users =>res.json(users)).catch(err => res.json(err))

})
app.delete('/delete/:id',async function(req,res){
    const id = req.params.id;
    Schema.findByIdAndDelete({_id:id}).then(users =>res.json(users)).catch(err => res.json(err))
})
app.post('/Add1',async function(req,res){
    const {sno1,names1,Roll1,Book1,Due1} = req.body
  
    console.log('aa',sno1,names1,Roll1,Book1,Due1)


    Schema1.create(req.body).then(users =>res.json(users)).catch(err => res.json(err))
})
app.delete('/delete1/:id',async function(req,res){
    const id = req.params.id;
    Schema1.findByIdAndDelete({_id:id}).then(users =>res.json(users)).catch(err => res.json(err))
})
app.get('/k1',async function(req,res){
  
    Schema1.find({}).then(users =>res.json(users)).catch(err => res.json(err))
})
app.get('/k3',async function(req,res){
  
    Schema1.find({}).then(users =>res.json(users)).catch(err => res.json(err))
})

app.listen(PORT)