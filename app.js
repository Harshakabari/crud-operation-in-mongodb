const express = require('express');
const app = express();

const userModel = require('./usermodel')


app.get('/',(req,res)=>{
    res.send("hooo");
})


// all code of mongoose can be asynchronise
app.get('/create',async (req,res)=>{
    let createuser = await userModel.create({
        name:"harsh",
        email:"hars@gmail.con",
        username:"hars"
    })

    res.send(createuser);

})


app.get('/read',async (req,res)=>{
    let alluser = await userModel.find({username:"hars"});
    res.send(alluser)
}) 


app.get('/update',async (req,res)=>{
    let updateuser = await userModel.findOneAndUpdate({username:"hars"},{name:"hahrsh anilbhai akabari"},{new:true})
    res.send(updateuser)

}) 

app.get('/delete',async (req,res)=>{
    let deleteuser = await userModel.findOneAndDelete({username:"hars"});
    res.send(deleteuser)
}) 



app.get('/',(req,res)=>{
    res.send("hooo");
})

app.listen(3000);
