const i18nJsMock = {
  I18n: () => {
    return {
      t: jest.fn((str) => str),
    };
  },
};

module.exports = i18nJsMock;
