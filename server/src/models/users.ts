//A model represents a table in the database. Instances of this class represents a row in the table.

//Imported DataTypes from Sequalize
import { DataTypes, Sequelize, Model } from'sequelize';

// Created an interface that contains the structure for the User table that we will create.
interface UserAttributes {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    password_hash: string;
    profile_picture_url?: string;
}

// Then created another attribute 'UserCreationAttributes' which means whenever a user is created it is going to use the UserAttributes structure.
interface UserCreationAttributes extends UserAttributes {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password_hash!: string;
    public profile_picture_url?: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

//Then creared a function where we are initialising a book. The we have different colums with their own types. User.init maps the table (model) to the database table. It accepts two arguments, the first one is going to use the UserAttributes interface to the databse columns where we have all the details mentioned.
export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profile_picture_url: {
                type: DataTypes.STRING,
                defaultValue: null,
            },
        }, { //Created configurations related to the table
            sequelize,
            timestamps: true,
            underscored: true,
            freezeTableName: true,
        }
    );

    return User;

    }

