import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface CompletableTextProps {
  text: string;
  onPress: () => void;
  completed: boolean;
}

const CompletableText = (props: CompletableTextProps) => {
  const { completed, text, onPress } = props;
  const { theme } = useTheme();
  const textStyle: TextStyle = {
    ...theme.h2,
    color: completed ? theme.secondary : theme.primary,
    textDecorationLine: completed ? 'line-through' : 'none',
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CompletableText;
