import { DataTypes, Sequelize, Model } from'sequelize';

interface UserAttributes {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    password_hash: string;
    profile_picture_url?: string;
}

interface UserCreationAttributes extends Omit<UserAttributes, 'user_id'> {}

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
        }, { 
            sequelize,
            timestamps: true,
            underscored: true,
            freezeTableName: true,
        }
    );

    return User;

    }

