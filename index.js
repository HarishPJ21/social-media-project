const { request } = require('express');
const express= require ('express');

const app = express();
const port=8000;

// use express router
app.use('/',require('./router'));

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`); //interpolation7
    }
    console.log(`server is running on port : ${port}`);
});