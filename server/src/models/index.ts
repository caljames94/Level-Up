import sequelize from "../config/connection.js";
import { UserFactory } from "./users.js";
import { ClassFactory } from "./classes.js";

const User = UserFactory(sequelize);
const Class = ClassFactory(sequelize);


export { sequelize, User, Class };

