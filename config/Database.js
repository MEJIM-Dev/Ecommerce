const {Sequelize} = require("sequelize")

const db = new Sequelize("ecommerce","taskmastarh","taskmastarh",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = db;