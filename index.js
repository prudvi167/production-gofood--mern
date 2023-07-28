const express=require('express');
const mongoDB=require('./db');
const path=require('path');
require('dotenv').config()
const app=express();
const port=5000;
mongoDB(process.env.MONGO_URI);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use("/api",require('./Routes/createUser'));
app.use("/api",require('./Routes/displayData'));
app.use("/api",require('./Routes/OrderData'));

app.use(express.static(path.join(__dirname,"../build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../build/index.html"))
})
app.listen(port,()=>{
    console.log(`the server is setup at the port ${port}`);
})