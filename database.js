const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;

let database;

async function initDb()
{
    const databaseServer=await MongoClient.connect("mongodb://localhost:27017/<database>");
     database=await databaseServer.db("quote");
}

function getdb()
{
    return database;
}

module.exports={
    initDb:initDb,
    getdb:getdb
}

