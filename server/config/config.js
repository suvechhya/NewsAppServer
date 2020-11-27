const config = {
  dev: 'dev',
  prod: 'prod',
  port: process.env.PORT || 9000,
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

module.exports = config;
