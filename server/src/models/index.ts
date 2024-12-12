import sequelize from "../config/connection.js";
import { UserFactory } from "./users.js";

//Creates a User object. Passing sequelize as an argument so that sequelize can intialise that User into the database.
const User = UserFactory(sequelize);


// Exports sequelize and User for use in other files (our routes and application to be used).
export {sequelize, User };

