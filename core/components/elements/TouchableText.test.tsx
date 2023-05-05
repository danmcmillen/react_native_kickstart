import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TouchableText from './TouchableText';
import { ThemeProvider } from '../../theme/ThemeContext';

describe('TouchableText', () => {
  const onPressMock = jest.fn();

  const renderTouchableText = (text: string) => {
    return render(
      <ThemeProvider>
        <TouchableText text={text} onPress={onPressMock} />
      </ThemeProvider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the text', () => {
    const { getByText } = renderTouchableText('Test Text');
    expect(getByText('Test Text')).toBeTruthy();
  });

  test('handles onPress event', () => {
    const { getByText } = renderTouchableText('Test Text');
    fireEvent.press(getByText('Test Text'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress if not pressed', () => {
    renderTouchableText('Test Text');
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
