const sequelize = require("../config/Database.js");
const { DataTypes } = require("sequelize");

const model = sequelize.define("product", {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    currency:{
        type: DataTypes.STRING,
        allowNull: false
    },
    seller:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports= model;