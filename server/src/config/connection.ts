// Enabling access .env variables in the server
import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Create a connection object
console.log(process.env.DB_URL, process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        }
    });

export default sequelize;