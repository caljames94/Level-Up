"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enabling access .env variables in the server
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var sequelize_1 = require("sequelize");
// Create a connection object
var sequelize = process.env.DB_URL
    ? new sequelize_1.Sequelize(process.env.DB_URL)
    : new sequelize_1.Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        }
    });
exports.default = sequelize;
