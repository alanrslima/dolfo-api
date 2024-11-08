import {type Express} from 'express';
import {bodyParser} from '../middlewares/body-parser';
import {cors} from '../middlewares/cors';
import {contentType} from '../middlewares/content-type';
import {requestTime} from '../middlewares/request-time';
import {httpLogger} from '../middlewares/http-logger';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
  app.use(requestTime);
  app.use(httpLogger);
};
