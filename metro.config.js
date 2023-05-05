/* eslint-disable @typescript-eslint/no-var-requires */
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    blacklistRE: exclusionList([/db\.json$/]),
  },
};

// Setup Environment Variables
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const env = process.env.ENV || 'dev';
const envFilePath = path.resolve(__dirname, `environment/.env.${env}`);
const envConfig = dotenv.parse(fs.readFileSync(envFilePath));

for (const k in envConfig) {
  process.env[k] = envConfig[k];
}
