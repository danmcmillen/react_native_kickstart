import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface HeaderProps extends TextProps {
  name: string;
  type: 'h1' | 'h2';
}

const StyledText = (props: HeaderProps) => {
  const { theme } = useTheme();
  const themeStyle = props.type === 'h1' ? theme.h1 : theme.h2;
  const style = props.style ? [props.style, themeStyle] : themeStyle;
  return (
    <>
      <Text {...props} style={style}>
        {props.name}
      </Text>
    </>
  );
};

export default StyledText;
