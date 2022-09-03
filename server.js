const express = require("express")
const db = require("./config/DbConnection.js")
const payment = require("./routes/payment")
const app = express()
require("dotenv").config()
db()

app.use(express.json())
app.use("/api", payment)

app.listen(process.env.PORT ||"5000",(err)=>{
    if(err) return console.log(err)
    console.log("App started")
})
