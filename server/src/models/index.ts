import sequelize from "../config/connection.js";
import { UserFactory } from "./users.js";
import { ClassFactory } from "./classes.js";
import { BookingFactory } from "./bookings.js";

const User = UserFactory(sequelize);
const Class = ClassFactory(sequelize);
const Booking = BookingFactory(sequelize);


export { sequelize, User, Class, Booking };

