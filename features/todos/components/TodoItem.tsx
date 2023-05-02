import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/todoStore';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const titleStyle: StyleProp<TextStyle> = completed
    ? { textDecorationLine: 'line-through' }
    : {};
  return (
    <View style={styles.container}>
      <Text style={titleStyle}>{title}</Text>
      <Switch value={completed} onValueChange={() => toggleTodo(id)} />
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default TodoItem;
