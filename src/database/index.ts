import config from 'config';
import Sequelize from 'sequelize';
import PlansModel from '@models/plans.model';
import { logger } from '@utils/logger';

const env: dbConfig = config.get('env');
// logger.info(`Connecting DB via '${env}' profile`);
const { pool, showsql , host,database,user,password }: dbConfig = config.get('dbConfig');
// let host = process.env.DB_ADDRESS;
// let database = process.env.DB_NAME;
// let user = process.env.DB_USER;
// let password = process.env.DB_PASSWORD;

// logger.info(`DB host:'${host}', DB name:'${database}', DB user:'${user}', DB password:***`);
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
  Plans: PlansModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

const Plan = sequelize.define('Plans', {});

export default DB;
