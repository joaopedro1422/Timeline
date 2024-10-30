const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'linha-do-tempo',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

