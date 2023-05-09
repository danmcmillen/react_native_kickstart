jest.mock('react-native/Libraries/Settings/Settings', () => ({
  getConstants: () => ({
    settings: {
      AppleLocale: 'en_US',
    },
  }),
}));

jest.mock('i18n-js', () => ({
  I18n: () => {
    return {
      t: jest.fn((str) => str),
    };
  },
}));

jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  View: jest.fn().mockImplementation((props) => props.children),
}));
