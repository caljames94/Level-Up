import { DataTypes, Sequelize, Model } from "sequelize";

interface ClassAttributes {
  class_id: number;
  class_name: string;
  instructor: string;
  difficulty: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  capacity: number;
  current_bookings: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ClassCreationAttributes extends ClassAttributes {}

export class Class extends Model<ClassAttributes, ClassCreationAttributes> implements ClassAttributes
{
  public class_id!: number;
  public class_name!: string;
  public instructor!: string;
  public difficulty!: string;
  public description!: string;
  public start_time!: string;
  public end_time!: string;
  public location!: string;
  public capacity!: number;
  public current_bookings!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function ClassFactory(sequelize: Sequelize): typeof Class {
  Class.init(
    {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      current_bookings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    }
  );

  return Class;

}

