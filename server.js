const express = require('express');
const mongoose = require( 'mongoose');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express()
const port = 3000

app.set('view engine','hbs')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/student').then((data) =>{
    console.log("!connected");
})
//object
const name = new mongoose.Schema({
    name:String
})

const auth = new mongoose.Schema({
    id:String,password:String
})

const signup = mongoose.model('auth',auth)
//model
const sendname = mongoose.model('detai',name)



app.get('/',(req,res) =>{
    // res.send('hi Everyone')
    res.render("dashboard")
})

app.post('/login',(req,res) =>{
    const {email,password} = req.body;
    console.log("Email Recieved" +email);
    console.log("Password" +password);

 //brcypt the password 
    bcrypt.hash(password ,10 , function(err , hash) {
        const signupdetail = signup({"id":email , "password":hash});
        signupdetail.save().then((res) =>{
            console.log(res)
        })
        res.render("dashboard")
    })
})
app.listen(port ,async () => {
    console.log('example app listening on the port ${port}')

    //creating instance
    let data = new sendname({name:'simran'})
    // let data = new sendname([{name:'inde'},{name:'hlo'} ,{name:'yaara' ,roll:'18'}]);
        //sending data to mongoDB save method is used
    data.save().then((res) =>{
        console.log(res)
    })
    let fetchdata = await sendname.find().then((res)=>{
        console.log(res);
    })
})






