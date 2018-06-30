const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'part-timer',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/part-timer-development',
  },

  test: {
    root: rootPath,
    app: {
      name: 'part-timer',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/part-timer-test',
  },

  production: {
    root: rootPath,
    app: {
      name: 'part-timer',
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/part-timer-production',
  },
};

module.exports = config[env];
