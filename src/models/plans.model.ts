import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Plan } from '../interfaces/models/plans.interface';
import { PlanType } from '../interfaces/enums';

export type PlanCreationAttributes = Optional<
  Plan,
  'id' | 'name' | 'code' | 'type' | 'days' | 'gracePeriod' | 'price' | 'active' | 'planReferenceIos' | 'planReferenceAndroid' | 'planReferenceStripe'
>;

export class PlanModel extends Model<Plan, PlanCreationAttributes> implements Plan {
  public id: number;
  public name: string;
  public code: string;
  public type: PlanType;
  public days: number;
  public gracePeriod: number;
  public price: number;
  public active: boolean;
  public planReferenceIos: string;
  public planReferenceAndroid: string;
  public planReferenceStripe: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function (sequelize: Sequelize): typeof PlanModel {
  PlanModel.init(
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
          values: Object.keys(PlanType),
        }),
      },
      days: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      gracePeriod: {
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
      },
      planReferenceIos: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      planReferenceAndroid: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      planReferenceStripe: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'plans',
      sequelize,
    },
  );

  return PlanModel;
}
