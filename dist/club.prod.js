"use strict";var express=require("express"),path=require("path"),fs=require("fs"),app=express(),port=80;app.use("/static",express.static("static")),app.use(express.urlencoded()),app.set("viewengine","pug"),app.set("views",path.join(__dirname,"views")),app.get("/",function(e,s){});