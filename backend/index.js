const express = require('express');
const server = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

const {dbConnect} = require('./config/database');
dbConnect();

const cookieParser = require("cookie-parser");
server.use(cookieParser());

const {cloudinarySetup} = require('./config/cloudDb');
cloudinarySetup();

const {router} = require('./routes/server_routes');
server.use('v1',router); 

server.listen(port,()=>{
    console.log(`Server activated at ${PORT}`)
})

server.get('/edtecth',(req,res)=>{
    res.send('Edtech backend');
})