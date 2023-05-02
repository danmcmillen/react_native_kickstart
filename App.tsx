// src/App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './features/todos/components/TodoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
};

const white = '#fff';
const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default App;
