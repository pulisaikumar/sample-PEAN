const PORT = process.env.PORT || 4444;

import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
//import DBConfig from "./config/db.conf";
import Routes from "./routes/index";

const app = express();

RoutesConfig.init(app);
//DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });


/*
 express =require('express'),
  path=require('path');
const  app =express();
app.use(express.static('./dist/sample-PEAN'))
app.get('/!*', (req,res)=>{
  res.sendFile(path.json(__dirname,'/dist/sample-PEAN/index.html'));})
app.listen(process.env.PORT||8080,()=>{console.log('server started')})
*/
