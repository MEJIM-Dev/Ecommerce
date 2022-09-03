const { DataTypes } = require("sequelize");
const sequelize = require("../config/Database");

const model = sequelize.define("order",{
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports= model;