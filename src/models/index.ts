import config from 'config';
import Sequelize from 'sequelize';
import ordersModel from './orders.model';
import logger from '../core/Logger';
import { dbConfig } from '../interfaces/db.interface';

const env: dbConfig = config.get('env');
// logger.info(`Connecting DB via '${env}' profile`);
const { pool, showsql , host,database,user,password }: dbConfig = config.get('dbConfig');

const sequelize = new Sequelize.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  timezone: '+05:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: false, // true
  },
  pool: {
    min: pool.min,
    max: pool.max,
  },
  logQueryParameters: process.env.NODE_ENV === 'local',
  logging: showsql
    ? (query, time) => {
        logger.info(time + 'ms' + ' ' + query);
      }
    : false,
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Orders: ordersModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

const Order = sequelize.define('Orders', {});

export default DB;
