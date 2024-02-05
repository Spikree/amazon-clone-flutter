// IMPORTS FROM PACKAGES

const express = require('express');
const mongoose = require('mongoose');

// IMPORTS FROM OTHER FILES
    const authRouter = require('./routes/auth');


// INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://Avi:Avi231189mongo@cluster0.z2vyhw8.mongodb.net/?retryWrites=true&w=majority"

// middleware
app.use(express.json())
app.use(authRouter);

// connections
mongoose.connect(DB).then(()=> {
    console.log("Connection sucessfull")
}).catch(e =>{
    console.log(e);
})

 


app.listen(PORT, function () {
    console.log(`Connected at port ${PORT}`);
});

//2:04:20


