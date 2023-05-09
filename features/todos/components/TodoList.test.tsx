import React from 'react';
import { render } from '@testing-library/react-native';
import TodoList from './TodoList';
import { ThemeProvider } from '../../../core/theme/ThemeContext';
import { useTodoStore } from '../store/todoStore';

// Mock the useTodoStore hook
jest.mock('../store/todoStore', () => ({
  useTodoStore: jest.fn(),
}));

describe('TodoList', () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ];
  const fetchTodos = jest.fn();

  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>,
    );
  };

  beforeEach(() => {
    (useTodoStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        todos,
        fetchTodos,
      };
      return selector(state);
    });
  });

  afterEach(() => {
    fetchTodos.mockClear();
  });

  it('should render the TodoList correctly', () => {
    const { getByText } = renderComponent();

    todos.forEach((todo) => {
      expect(getByText(todo.title)).toBeDefined();
    });
  });

  it('should call fetchTodos on mount', () => {
    renderComponent();
    expect(fetchTodos).toHaveBeenCalledTimes(1);
  });
});
