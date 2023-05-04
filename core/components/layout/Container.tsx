import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { theme } = useTheme();
  return <SafeAreaView style={theme.container}>{props.children}</SafeAreaView>;
};
export default Container;
