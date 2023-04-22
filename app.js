const express=require("express");
const path=require("path");
const { NotFoundError, ErrorHandler } = require("./public/js/utils");
const { users } = require("./db");
const app=express();
app.use(express.static("public"))
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res,next)=>{
    res.render("hbs/index.hbs",{users})
});

app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000,()=>{
    console.log("web server connected")
})