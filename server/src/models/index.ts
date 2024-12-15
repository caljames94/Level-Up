import sequelize from "../config/connection.js";

import { UserFactory } from "./users.js";
import { ClassFactory } from "./classes.js";
import { BookingFactory } from "./bookings.js";
import { User } from "./users.js"; // Import User model
import { Class } from "./classes.js"; // Import Class model

const User = UserFactory(sequelize);
const Class = ClassFactory(sequelize);
const Booking = BookingFactory(sequelize);


export { sequelize, User, Class, Booking };
