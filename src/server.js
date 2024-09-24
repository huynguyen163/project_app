require('dotenv').config();
// const express = require('express'); // commonjs
// const configViewEngine = require('./config/viewEngine');
// const webRouters= require('./routers/web')
// const connection= require('./config/database')

import express from 'express';
import configViewEngine from './config/viewEngine';
import webRouters from './routers/web';
import connection from './config/database';

const app = express();// app express


//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config template engine
configViewEngine(app);

//khai báo routers
app.use('/', webRouters);


// connection();

const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;




app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});