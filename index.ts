import express from "express"
import 'dotenv/config' // LOAD ENVIRONMENT VARIABLES FOR SERVER


const app=express();


app.listen(4000,()=>console.log("ABP WEB CONTROL SERVER HAS BEEN STARTED"))