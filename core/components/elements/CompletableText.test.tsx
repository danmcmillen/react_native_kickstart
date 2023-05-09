import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../theme/ThemeContext';
import CompletableText from './CompletableText';
import { noop } from 'lodash';

describe('CompletableText', () => {
  it('renders the provided text', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CompletableText text="Test Text" onPress={noop} completed={false} />
      </ThemeProvider>
    );

    expect(getByText('Test Text')).toBeTruthy();
  });

  it('applies completed styles when completed is true', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CompletableText text="Test Text" onPress={noop} completed={true} />
      </ThemeProvider>
    );

    const textElement = getByText('Test Text');
    expect(textElement.props.style.textDecorationLine).toEqual('line-through');
  });

  it('applies non-completed styles when completed is false', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CompletableText text="Test Text" onPress={noop} completed={false} />
      </ThemeProvider>
    );

    const textElement = getByText('Test Text');
    expect(textElement.props.style.textDecorationLine).toEqual('none');
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <ThemeProvider>
        <CompletableText
          text="Test Text"
          onPress={onPressMock}
          completed={false}
        />
      </ThemeProvider>
    );

    const textElement = getByText('Test Text');
    fireEvent.press(textElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
