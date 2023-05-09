import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../theme/ThemeContext';
import StyledText from './StyledText';
import { lightTheme } from '../../theme/themes';

describe('StyledText', () => {
  it('renders the provided text', () => {
    const { getByText } = render(
      <ThemeProvider>
        <StyledText name="Test Header" type="h1" testID="styled-text" />
      </ThemeProvider>
    );

    expect(getByText('Test Header')).toBeTruthy();
  });

  it('applies h1 style when type is h1', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <StyledText name="Test Header" type="h1" testID="styled-text" />
      </ThemeProvider>
    );

    const styledText = getByTestId('styled-text');
    expect(styledText.props.style).toEqual(lightTheme.h1);
  });

  it('applies h2 style when type is h2', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <StyledText name="Test Header" type="h2" testID="styled-text" />
      </ThemeProvider>
    );

    const styledText = getByTestId('styled-text');
    expect(styledText.props.style).toEqual(lightTheme.h2);
  });
});
