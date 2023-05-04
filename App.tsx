import React from 'react';
import { ThemeProvider } from './core/theme/ThemeContext';
import Container from './core/components/layout/Container';
import TodoListScreen from './features/todos/screens/TodoListScreen';

const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <TodoListScreen />
      </Container>
    </ThemeProvider>
  );
};

export default App;
