import config from './config';
import devConfig from './config.dev';
import prodConfig from './config.prod';

describe('config', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('should use devConfig by default', () => {
    const originalEnv = process.env.ENV;
    process.env.ENV = 'dev';

    const configModule = config;
    expect(configModule).toEqual(devConfig);

    process.env.ENV = originalEnv;
  });

  it('should use prodConfig when ENV is set to prod', () => {
    const originalEnv = process.env.ENV;
    process.env.ENV = 'prod';

    jest.resetModules();
    const configModule = config;
    expect(configModule).toEqual(prodConfig);

    process.env.ENV = originalEnv;
  });
});
