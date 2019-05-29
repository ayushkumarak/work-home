const fs=require('fs')
const name=require('./utils.js')
console.log(name)

fs.appendFileSync('t.txt','hw')
setTimeout(()=>{
console.log('hello world')
},4000)
