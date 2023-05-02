import React, { useEffect } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/todoStore';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const createTodo = useTodoStore((state) => state.createTodo);

  const [newTodo, setNewTodo] = React.useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim().length > 0) {
      createTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add new todo"
        style={styles.addTodoButton}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const gray = 'gray';
const styles = StyleSheet.create({
  addTodoButton: {
    borderColor: gray,
    borderWidth: 1,
    padding: 8,
  },
});

export default TodoList;
