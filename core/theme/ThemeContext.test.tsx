import React from 'react';
import { render, act } from '@testing-library/react-native';
import { useColorScheme, View } from 'react-native';
import { ThemeProvider, useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from './themes';

// Mock useColorScheme
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: jest.fn(),
}));

const TestComponent = () => {
  const { theme } = useTheme();
  return <View testID="theme">{JSON.stringify(theme)}</View>;
};

describe('ThemeProvider and useTheme', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should provide light theme when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(JSON.parse(getByTestId('theme').props.children)).toEqual(lightTheme);
  });

  it('should provide dark theme when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(JSON.parse(getByTestId('theme').props.children)).toEqual(darkTheme);
  });

  it('should update the theme when color scheme changes', async () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    const { getByTestId, rerender } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    act(() => {
      (useColorScheme as jest.Mock).mockReturnValue('dark');
      rerender(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );
    });

    expect(JSON.parse(getByTestId('theme').props.children)).toEqual(darkTheme);
  });
});
