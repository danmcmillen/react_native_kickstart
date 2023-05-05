import Constants from 'expo-constants';
import devConfig from './config.dev';
import prodConfig from './config.prod';

const { ENV } = Constants?.manifest?.extra ?? { ENV: 'dev' };

interface Config {
  apiUrl: string;
}

let config: Config;

switch (ENV) {
  case 'prod':
    config = prodConfig;
    break;
  default:
    config = devConfig;
}

export default config;
