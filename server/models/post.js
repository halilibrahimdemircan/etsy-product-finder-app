"use strict";

const Sequelize = require("sequelize");
const { sampledb } = require("./db");


module.exports = sampledb.define(
    "post",
    {
        title: {
            type: Sequelize.CHAR(15),
            allowNull: false,
        },
        content: {
            type: Sequelize.CHAR(15),
            allowNull: false,
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: true,
    }
);
