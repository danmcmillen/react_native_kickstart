import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={theme.container} testID={props.testID}>
      {props.children}
    </SafeAreaView>
  );
};
export default Container;
