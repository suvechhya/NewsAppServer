import express from 'express';
import api from './api/api';

const app = express();

require('./middleware/appMiddleware')(app);
app.use('/api', api);

app.use((err, req, res) => {
  res.status(500).send(err.errmsg);
});

module.exports = app;
