import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface HeaderProps {
  name: string;
  type: 'h1' | 'h2';
}

const StyledText = (props: HeaderProps) => {
  const { theme } = useTheme();
  const style = props.type === 'h1' ? theme.h1 : theme.h2;
  return (
    <>
      <Text style={style}>{props.name}</Text>
    </>
  );
};

export default StyledText;
