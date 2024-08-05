const dbs=require("./database");

async function RandomQuote(req,res)
{
    const data=await dbs.getdb().collection("quote").find({}).toArray();
    const length=data.length;
    const nos= Math.floor((Math.random() * length));
    const quote=data[nos];
    res.json({Quote:quote.quote});
}


module.exports={
    RandomQuote:RandomQuote
}