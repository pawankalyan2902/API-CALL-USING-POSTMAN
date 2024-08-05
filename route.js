const express=require("express");
const router=express.Router();

const controller=require("./quoteController");
router.get("/",controller.RandomQuote);

module.exports=router;
