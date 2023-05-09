import Constants from 'expo-constants';
import devConfig from './config.dev';
import prodConfig from './config.prod';

const { ENV } = Constants?.manifest?.extra ?? { ENV: 'dev' };

interface Config {
  apiUrl: string;
}

const getConfig = (): Config => {
  let config: Config;

  switch (ENV) {
    case 'prod':
      config = prodConfig;
      break;
    default:
      config = devConfig;
  }

  return config;
};

export default getConfig;
