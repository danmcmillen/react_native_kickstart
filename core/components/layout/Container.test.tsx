import Container from './Container';
import React from 'react';
import { ThemeProvider } from '../../theme/ThemeContext';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Container', () => {
  const renderContainer = (children: React.ReactNode) => {
    return render(
      <ThemeProvider>
        <Container>{children}</Container>
      </ThemeProvider>
    );
  };

  test('renders the children', () => {
    const { getByText } = renderContainer(<Text>Test Text</Text>);
    expect(getByText('Test Text')).toBeTruthy();
  });
});
