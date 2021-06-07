const express = require ("express")
const connect=require("./config/connectDB")

const app = express()

app.use(express.json())
//connect to DB
connect()
//routes

app.use("/api/items",require("./routes/Item") )

// middleware

const port =5000
app.listen (port , err=>{
    err? console.log(err): console.log(`server is runnig on ${port}`)
}) 