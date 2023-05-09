import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('App', () => {
  it('renders the TodoListScreen inside a Container and ThemeProvider', () => {
    const { getByTestId } = render(<App />);

    // Ensure the Container is rendered
    const container = getByTestId('container');
    expect(container).toBeTruthy();

    // Ensure the TodoListScreen is rendered
    const todoListScreen = getByTestId('todoListScreen');
    expect(todoListScreen).toBeTruthy();
  });
});
