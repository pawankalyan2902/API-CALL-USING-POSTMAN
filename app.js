const express=require("express");
const app=express();

const QuoteRoute=require("./route");
app.use("/",QuoteRoute);

//database
const dbs=require("./database");

app.use(function(req,res)
{
    res.status(404).json({message:"The page not found"});
})


app.use(function(error,req,res,next)
{
    res.status(500).json({message:"There is some ionternal error"});
})



dbs.initDb().then(function()
{
    app.listen(3000);
})


