import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Admin } from '@/interfaces/models/admins.interface';

export type AdminCreationAttributes = Optional<Admin, 'id' | 'name' | 'username' | 'phone' | 'email' | 'password'>;

export class AdminModel extends Model<Admin, AdminCreationAttributes> implements Admin {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public phone: string;
  public password: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function (sequelize: Sequelize): typeof AdminModel {
  AdminModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return AdminModel;
}
