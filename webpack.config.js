const { merge } = require('webpack-merge');
const clientConfig = require('./webpack.config.client');
const serverConfig = require('./webpack.config.server');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return [
    merge(clientConfig, {
      mode: isDevelopment ? 'development' : 'production',
    }),
    merge(serverConfig, {
      mode: isDevelopment ? 'development' : 'production',
    }),
  ];
};
