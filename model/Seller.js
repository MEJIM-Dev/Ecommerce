const { DataTypes } = require("sequelize");
const sequelize = require("../config/Database");

const model = sequelize.define("seller",{
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    brandName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credit: {
        type: DataTypes.FLOAT,
        allowNull: false 
    }, 
})

module.exports= model;