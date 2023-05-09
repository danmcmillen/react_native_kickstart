import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../../core/theme/ThemeContext';
import TodoListScreen from './TodoListScreen';
import TodoList from '../components/TodoList';
import AddTodoItem from '../components/AddTodoItem';
import i18n from '../../../translations/localization';

jest.mock('../components/TodoList', () => jest.fn(() => null));
jest.mock('../components/AddTodoItem', () => jest.fn(() => null));

describe('TodoListScreen', () => {
  beforeEach(() => {
    (TodoList as jest.Mock).mockClear();
    (AddTodoItem as jest.Mock).mockClear();
  });

  it('renders the title', () => {
    const { getByText } = render(
      <ThemeProvider>
        <TodoListScreen />
      </ThemeProvider>
    );

    expect(getByText(i18n.t('todoTitle'))).toBeTruthy();
  });

  it('renders the TodoList component', () => {
    render(
      <ThemeProvider>
        <TodoListScreen />
      </ThemeProvider>
    );

    expect(TodoList).toHaveBeenCalled();
  });

  it('renders the AddTodoItem component', () => {
    render(
      <ThemeProvider>
        <TodoListScreen />
      </ThemeProvider>
    );

    expect(AddTodoItem).toHaveBeenCalled();
  });
});
