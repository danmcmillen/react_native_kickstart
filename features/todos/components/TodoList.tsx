import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/todoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <FlatList
        style={styles.container}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    width: '100%',
  },
});

export default TodoList;
