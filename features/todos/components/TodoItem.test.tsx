import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem, { TodoItemProps } from './TodoItem';
import { ThemeProvider } from '../../../core/theme/ThemeContext';
import { useTodoStore } from '../store/todoStore';

// Mock the useTodoStore hook
jest.mock('../store/todoStore', () => ({
  useTodoStore: jest.fn(),
}));

describe('TodoItem', () => {
  const defaultProps: TodoItemProps = {
    id: 1,
    title: 'Test Todo',
    completed: false,
  };

  const renderComponent = (props: TodoItemProps) => {
    return render(
      <ThemeProvider>
        <TodoItem {...props} />
      </ThemeProvider>
    );
  };

  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();

  beforeEach(() => {
    (useTodoStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        toggleTodo,
        deleteTodo,
      };
      return selector(state);
    });
  });

  afterEach(() => {
    toggleTodo.mockClear();
    deleteTodo.mockClear();
  });

  it('should render the TodoItem correctly', () => {
    const { getByText } = renderComponent(defaultProps);
    expect(getByText(defaultProps.title)).toBeDefined();
  });

  it('should toggle the todo item when pressed', () => {
    const { getByText } = renderComponent(defaultProps);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    fireEvent.press(getByText(defaultProps.title));
    expect(toggleTodo).toHaveBeenCalledWith(defaultProps.id);
  });

  it('should delete the todo item when delete is pressed', () => {
    const { getByText, getByTestId } = renderComponent(defaultProps);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    // Open swipeable
    fireEvent(getByTestId('swipeable'), 'onSwipeableOpen');

    // Press delete button
    fireEvent.press(getByText('Delete'));

    expect(deleteTodo).toHaveBeenCalledWith(defaultProps.id);
  });
});
