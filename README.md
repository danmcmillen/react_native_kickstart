# React Native Kickstart

This is a React Native project to kick start application development, it is based on expo and typescript, it follows
clean and solid principles, industry best practices, as well opinionated configurations, conventions, and libraries

# Application Overview

The project is designed with a modular structure, consisting of a core package that can be utilized by every feature,
and a features package that is organized based on individual feature types. This approach allows for the reuse of core
components across different features, and it facilitates the independent development of additional features.

Core includes the following items:

- **API**: Client/networking configurations and utilities.
- **Components**: Common reusable components that can be integrated into various features.
- **Configuration**: Environment-based configurations for the application (e.g., development, staging, production).
- **Store**: Utilities for state management, such as unwrapping network responses or handling errors.
- **Theme**: The application theme, which can be configured and applied to all features.

Features should follow this structure:

- Feature name
  - **API**: Specific API calls required for the feature's functionality.
  - **Components**: UI components that handle the feature's UI and behavior, which can leverage core components.
  - **Screens**: Screen definitions for the feature, typically container components that represent entire screens.
  - **Store**: State management for the feature's functionality.

# Project Configuration

This project is built using [Expo](https://expo.dev/), a platform for developing, building, and deploying React Native
apps. It also utilizes [TypeScript](https://www.typescriptlang.org/) for static typing, [ESLint](https://eslint.org/)
for linting, and [Prettier](https://prettier.io/) for code formatting.

A mock API server is configured for rapid development and testing. The `mock-api` directory contains a sample database that
is parsed into an API, which can be utilized during development. Unit testing is set up
using [Jest](https://jestjs.io/), and [Husky](https://typicode.github.io/husky) ensures that committed code is
lint-free, formatted, and passes all unit tests.

Environment-specific values can be added to the environment directory, which are then loaded
by [dotenv](https://www.npmjs.com/package/dotenv) and made available to the project via core configurations.

Below is a list of the default scripts that can be run, along with descriptions of their purpose:

- `start`: Starts the Expo development server.
- `start:dev`: Starts the Expo development server with the "dev" environment configuration.
- `start:prod`: Starts the Expo development server with the "prod" environment configuration.
- `build:dev`: Builds the app for the "dev" environment and exports the assets to a specified URL.
- `build:prod`: Builds the app for the "prod" environment and exports the assets to a specified URL.
- `android`: Starts the Expo development server and opens the app in an Android emulator.
- `ios`: Starts the Expo development server and opens the app in an iOS simulator.
- `web`: Starts the Expo development server and opens the app in a web browser.
- `test`: Runs unit tests using Jest.
- `lint`: Lints the project using ESLint.
- `lint:fix`: Lints the project using ESLint and automatically fixes any fixable issues.
- `format`: Formats the project using Prettier.
- `prepare`: Installs Husky for pre-commit hooks.
- `mock-api`: Starts the mock API server using [json-server](https://www.npmjs.com/package/json-server) and watches
  the `mock/db.json` file on port 5000.

# Components and Styling

Reusable components should utilize the core theming package, which is based on light and dark themes. If you follow
the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology and have an interface inventory,
this pattern can be extended. All styles should use the [StyleSheet API](https://reactnative.dev/docs/stylesheet) with
no inline styles (unless they need to be computed).

# API Layer

This project uses [Axios](https://axios-http.com/) for making network calls, with helper methods located in the core
package and some reference patterns in the features directory.

# State Management

[Zustand](https://github.com/pmndrs/zustand) is used for global state management, as it is simple and lightweight
compared to other frameworks. The [Context API](https://react.dev/reference/react/useContext)
and [state hooks](https://react.dev/reference/react/useState) can also be used. For global shared state, prefer Zustand
stores or the Context API. For component-specific state, use state hooks.

# Error Handling

Basic error handling is set up with Zustand stores wrapping API error results and setting an error response in the
store. This is one approach to handling and mapping API errors. Unexpected errors should be managed
using [error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary).

# Testing

The project employs unit testing with [Jest](https://jestjs.io/)
and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/). Test files are co-located with source files. Code
coverage is generated and should be maintained at a high level.

# Localization

Localization is achieved using [i18n-js](https://github.com/fnando/i18n-js)
and [Expo Localization](https://docs.expo.dev/versions/latest/sdk/localization/). Translations should be created for
each feature and locale that the application supports.

# Application Dependencies

## Dependencies

- [axios](https://axios-http.com/): - A popular HTTP client for making API requests.
- [expo](https://expo.dev/): - A framework and platform for building universal React applications.
- [expo-constants](https://docs.expo.dev/versions/latest/sdk/constants/): - Provides system information that
  remains constant throughout the app's life.
- [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/): - Provides access to
  localization and internationalization features.
- [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/): - A component for handling the status
  bar on mobile devices.
- [i18n-js](https://github.com/fnando/i18n-js): - A library for managing translations and localization.
- [jest](https://jestjs.io/): - A JavaScript testing framework.
- [jest-expo](https://github.com/expo/expo/tree/master/packages/jest-expo): - Jest preset and utilities for
  testing Expo projects.
- [lodash](https://lodash.com/): - A utility library that provides helpful functions for working with arrays,
  objects, and more.
- [react](https://reactjs.org/): - A JavaScript library for building user interfaces.
- [react-native](https://reactnative.dev/): - A framework for building native apps using React.
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/): - Provides a
  more native touch system for gesture handling in React Native applications.
- [zustand](https://github.com/pmndrs/zustand): - A lightweight and straightforward state management library for
  React applications.

## Dev Dependencies

- [@babel/core](https://babel.dev/): - A JavaScript compiler that transforms your ES6/ESNext code into ES5 for
  better browser compatibility.
- [@testing-library/jest-native](https://github.com/testing-library/jest-native): - Custom Jest matchers for
  testing React Native applications.
- [@testing-library/react-native](https://github.com/callstack/react-native-testing-library): - A lightweight
  testing library for React Native applications.
- [@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest): - TypeScript
  definitions for Jest.
- [@types/lodash](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash): - TypeScript
  definitions for Lodash.
- [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react): - TypeScript
  definitions for React.
- [@types/react-test-renderer](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-test-renderer):
  - TypeScript definitions for react-test-renderer.
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin):
  - An ESLint plugin that provides lint rules specifically for TypeScript code.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser): - A
  parser that allows ESLint to lint TypeScript code.
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter): - A library for mocking axios requests
  for testing.
- [dotenv](https://github.com/motdotla/dotenv): - Loads environment variables from a `.env` file.
- [eslint](https://eslint.org/): - A popular JavaScript linter for identifying and reporting on patterns in
  code.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): - A config that disables ESLint
  rules that conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): - An ESLint plugin that runs
  Prettier as an ESLint rule.
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): - React specific linting rules for
  ESLint.
- [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native): - React Native
  specific linting rules for ESLint.
- [husky](https://github.com/typicode/husky): - A Git hooks manager that simplifies running tasks before
  committing or pushing code.
- [json-server](https://github.com/typicode/json-server): - A simple command line tool for serving a REST API
  from a JSON file.
- [prettier](https://prettier.io/): - An opinionated code formatter for JavaScript, TypeScript, and more.
- [typescript](https://www.typescriptlang.org/): - A typed superset of JavaScript that adds static types and
  compiles to plain JavaScript.
