const express=require('express')
const app=express()

const path=require('path')

const pubdir=path.join(__dirname,'../public')
app.use(express.static(pubdir))

app.get('',(req,res)=>{
res.send('domain page')
})

app.get('/help',(req,res)=>{
res.send('help page')
})
app.listen(3000,()=>{
console.log('server port')
})