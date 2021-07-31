const express = require('express');
const app = express();
const DataRouters = require('./src/routers/data');


app.use('/autonomousdispatch/api',DataRouters);


app.listen(3000,()=>{
    console.log('listenning at port 3000')
})