const { request } = require('express');
const express= require ('express');

const app = express();
const port=8000;

// use express router
app.use('/',require('./router'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`); //interpolation7
    }
    console.log(`server is running on port : ${port}`);
});