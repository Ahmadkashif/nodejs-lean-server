import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Order } from '../interfaces/models/order.interface';
import { OrderType } from '../interfaces/enums';

export type OrderCreationAttributes = Optional<
  Order,
  'id' | 'name' | 'code' | 'type' | 'days' | 'price' | 'active'
>;

export class OrderModel extends Model<Order, OrderCreationAttributes> implements Order {
  public id!: number;
  public name!: string;
  public code!: string;
  public type!: OrderType;
  public days!: number;
  public price!: number;
  public active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function (sequelize: Sequelize): typeof OrderModel {
  OrderModel.init(
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
      code: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM({
          values: Object.keys(OrderType),
        }),
      },
      days: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    {
      tableName: 'orders',
      sequelize,
    },
  );

  return OrderModel;
}
