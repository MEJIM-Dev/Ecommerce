const db = require("./Database")
const customer = require("../model/Customer")
const order = require("../model/Order.js")
const product = require("../model/Product.js")
const seller = require("../model/Seller.js")

const connectToDb = async ()=> {
    try {
        await db.authenticate()
        console.log("connected to db")

        await db.sync()
        console.log("updated models")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb;


