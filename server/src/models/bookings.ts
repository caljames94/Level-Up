import { Model, DataTypes, Sequelize } from "sequelize";
import { Class } from "./classes.js";
import { User } from "./users.js";

interface BookingAttributes {
    booking_id: number;
    user_id: number;
    class_id: number;
    booking_date: Date;
}

interface BookingCreationAttributes extends Omit<BookingAttributes, "booking_id"> {}

class Booking extends Model<BookingAttributes, BookingCreationAttributes> implements BookingAttributes {
    public booking_id!: number;
    public user_id!: number;
    public class_id!: number;
    public booking_date!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Declare associations
    public readonly user?: User;
    public readonly class?: Class;
}

export function BookingFactory(sequelize: Sequelize): typeof Booking {
    Booking.init(
        {
            booking_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: User,
                    key: "user_id",
                },
            },
            class_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Class,
                    key: "class_id",
                },
            },
            booking_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            tableName: "bookings",
            timestamps: true,
        }
    );

    // Define associations
    Booking.belongsTo(User, { foreignKey: 'user_id' });
    Booking.belongsTo(Class, { foreignKey: 'class_id' });
    
    return Booking;
}

export { Booking };
