import React from 'react';
import { render } from '@testing-library/react-native';
import App from "./App";
import {UserScreen} from "./presentation/screens/UserScreen";

// Mock UserScreen component
jest.mock('./presentation/screens/UserScreen', () => ({
    UserScreen: jest.fn(() => null),
}));

describe('App', () => {
    it('renders UserScreen component', () => {
        render(<App />);

        expect(UserScreen).toHaveBeenCalledTimes(1);
    });
});
