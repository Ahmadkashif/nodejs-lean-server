import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { CustomerType } from '@/interfaces/enums';

import { Customer } from '@/interfaces/models/customer.interface';

export type CustomerCreationAttributes = Optional<Customer, 'id' | 'fullName' | 'userName' | 'phone' | 'email' | 'disabled' | 'type'>;

export class CustomerModel extends Model<Customer, CustomerCreationAttributes> implements Customer {
  public id: number;
  public name: string;
  public userName: string;
  public email: string;
  public phone: string;
  public fullName: string;
  public disabled: boolean;
  public type: CustomerType;
  public stripeId: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CustomerModel {
  CustomerModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      userName: {
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
      disabled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      type: DataTypes.ENUM({
        values: Object.keys(CustomerType),
      })
    },
    {
      tableName: 'members',
      sequelize,
    },
  );

  return CustomerModel;
}
