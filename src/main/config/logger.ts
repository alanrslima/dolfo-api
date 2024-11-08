import winston from 'winston';
import 'winston-daily-rotate-file';

const transport = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: 'logs/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.json(),
    winston.format.colorize(),
    winston.format.printf(
      info => `${new Date().toISOString()} - ${info.stack}`,
    ),
  ),
  level: 'info',
  transports: [transport],
});

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     }),
//   );
// }

export {logger};
