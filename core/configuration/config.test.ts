import Constants from 'expo-constants';
import getConfig from './config';
import devConfig from './config.dev';
import prodConfig from './config.prod';

// Mock the 'expo-constants' module
jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ENV: 'prod',
    },
  },
}));

const setEnv = (env: string | undefined) => {
  if (!Constants.manifest?.extra) {
    throw new Error('Constants.manifest.extra is undefined');
  }
  Constants.manifest.extra.ENV = env;
};

describe('config', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should return the dev configuration when ENV is dev', () => {
    setEnv('dev');

    const config = getConfig();
    expect(config).toEqual(devConfig);
  });

  it('should return the prod configuration when ENV is prod', () => {
    setEnv('prod');

    const config = getConfig();
    expect(config).toEqual(prodConfig);
  });

  it('should return the dev configuration when ENV is not defined', () => {
    setEnv(undefined);

    const config = getConfig();
    expect(config).toEqual(devConfig);
  });
});
