const express=require("express");
const path=require("path");
const hbs=require("hbs");
const { NotFoundError, ErrorHandler } = require("./public/js/utils");
const { header,navList } = require("./db");
const app=express();
hbs.registerPartials(path.join(__dirname,"views/hbs/partials"))
app.use(express.static("public"))
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res,next)=>{
    res.render("hbs/index.hbs",{header,navList})
});

app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000,()=>{
    console.log("web server connected")
})