import { useTodoStore } from '../store/todoStore';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import TouchableText from '../../../core/components/elements/TouchableText';
import { spacing } from '../../../core/theme/themes';
import { useTheme } from '../../../core/theme/ThemeContext';

const AddTodoItem = () => {
  const { theme } = useTheme();
  const createTodo = useTodoStore((state) => state.createTodo);
  const [newTodo, setNewTodo] = React.useState('');
  const handleAddTodo = () => {
    if (newTodo.trim().length > 0) {
      createTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <View style={styles.actions}>
      <TextInput
        multiline
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="What needs to be done?"
        style={{ ...theme.textInput }}
        placeholderTextColor={theme.secondary}
      />
      <TouchableText text={'Add'} onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: spacing.large,
    width: '100%',
  },
});
export default AddTodoItem;
