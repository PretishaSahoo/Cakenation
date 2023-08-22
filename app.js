// @ts-nocheck
const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose');
const bodyparser=require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/CakenationDatabase');

const cakenationSchema = new mongoose.Schema({
    name: String,
    age:String ,
    phoneno:String,
    email:String,
    address:String

});


const cake = mongoose.model('contact', cakenationSchema);


const app = express();
const port = 8000;

app.set('view engine', 'pug');


app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.get('/', (req,res)=>{
    const params={}
    res.status(200).render('index.pug',params);
})

app.get('/about', (req,res)=>{
    res.status(200).render('about.pug');
})

app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
})

app.get('/order',(req,res)=>{
    res.status(200).render('order.pug');
})

app.get('/classes',(req,res)=>{
    res.status(200).render('classes.pug');
})

// app.post('/classes' , (req,res)=>{
//     const params={'message':'Your Form has been Submitted!'}
//     res.status(200).render('classes.pug',params)
// })


app.post('/classes',(req,res)=>{
    var myData = new cake(req.body) 
    myData.save().then(()=>{
        res.send("This Item has been saved to the database!")
    }).catch(()=>{
        res.status(400).send("Item not saved in the database")
    })
})



app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})
