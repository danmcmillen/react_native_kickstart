import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/todoStore';
import CompletableText from '../../../core/components/elements/CompletableText';
import { fontSizes, spacing } from '../../../core/theme/themes';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useTheme } from '../../../core/theme/ThemeContext';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const { theme } = useTheme();
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const renderRightActions = () => {
    const onDelete = () => {
      deleteTodo(id);
    };

    const deleteButtonStyle = {
      ...styles.deleteButton,
      backgroundColor: theme.danger,
    };
    const deleteTextStyle = { ...styles.deleteText, color: theme.dangerText };

    return (
      <RectButton onPress={onDelete} style={deleteButtonStyle}>
        <Text style={deleteTextStyle}>Delete</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <CompletableText
          text={title}
          onPress={() => toggleTodo(id)}
          completed={completed}
        />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.small,
  },
  deleteButton: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: 100,
  },
  deleteText: {
    fontSize: fontSizes.small,
  },
});

export default TodoItem;
