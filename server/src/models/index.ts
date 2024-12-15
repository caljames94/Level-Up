import sequelize from "../config/connection.js";
import { User } from "./users.js"; // Import User model
import { Class } from "./classes.js"; // Import Class model

// Ensure Sequelize initializes associations (if any)
export { sequelize, User, Class };
