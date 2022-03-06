import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { MemberType } from '@/interfaces/enums';

import { Member } from '@/interfaces/models/member.interface';

export type MemberCreationAttributes = Optional<Member, 'id' | 'fullName' | 'userName' | 'phone' | 'email' | 'disabled' | 'type' | 'stripeId'>;

export class MemberModel extends Model<Member, MemberCreationAttributes> implements Member {
  public id: number;
  public name: string;
  public userName: string;
  public email: string;
  public phone: string;
  public fullName: string;
  public disabled: boolean;
  public type: MemberType;
  public stripeId: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function (sequelize: Sequelize): typeof MemberModel {
  MemberModel.init(
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
        values: Object.keys(MemberType),
      }),
      stripeId: {
        allowNull: true,
        type: DataTypes.STRING(105),
      },
    },
    {
      tableName: 'members',
      sequelize,
    },
  );

  return MemberModel;
}
