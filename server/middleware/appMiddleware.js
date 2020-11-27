// Morgan is used for Logging
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
// setup global middleware here

module.exports = function (app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
};
