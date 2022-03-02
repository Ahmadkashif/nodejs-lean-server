import Logger from './core/Logger';
import app from './app';

app
  .listen(process.env.port, () => {
    Logger.info(`server running on port : ${process.env.port}`);
  })
  .on('error', (e) => Logger.error(e));
