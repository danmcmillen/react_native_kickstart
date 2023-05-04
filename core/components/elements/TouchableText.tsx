import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface TouchableTextProps {
  text: string;
  onPress: () => void;
}

const TouchableText = (props: TouchableTextProps) => {
  const { text, onPress } = props;
  const { theme } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={theme.h2}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableText;
