import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTodoItem from './AddTodoItem';
import { ThemeProvider } from '../../../core/theme/ThemeContext';
import { useTodoStore } from '../store/todoStore';
import i18n from '../../../translations/localization';

// Mock the useTodoStore hook
jest.mock('../store/todoStore', () => ({
  useTodoStore: jest.fn(),
}));

describe('AddTodoItem', () => {
  const createTodo = jest.fn();

  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <AddTodoItem />
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    (useTodoStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        createTodo,
      };
      return selector(state);
    });
  });

  afterEach(() => {
    createTodo.mockClear();
  });

  it('should render the AddTodoItem correctly', () => {
    const { getByPlaceholderText, getByText } = renderComponent();
    expect(getByPlaceholderText(i18n.t('addTodoPlaceholder'))).toBeDefined();
    expect(getByText(i18n.t('addTodoButton'))).toBeDefined();
  });

  it('should create a new todo item when Add button is pressed', () => {
    const { getByPlaceholderText, getByText } = renderComponent();
    const newTodoText = 'New Todo';

    fireEvent.changeText(
      getByPlaceholderText(i18n.t('addTodoPlaceholder')),
      newTodoText
    );
    fireEvent.press(getByText(i18n.t('addTodoButton')));

    expect(createTodo).toHaveBeenCalledWith(newTodoText);
  });

  it('should not create a new todo item if the input is empty or only whitespace', () => {
    const { getByPlaceholderText, getByText } = renderComponent();
    const emptyText = '    ';

    fireEvent.changeText(
      getByPlaceholderText(i18n.t('addTodoPlaceholder')),
      emptyText
    );
    fireEvent.press(getByText(i18n.t('addTodoButton')));

    expect(createTodo).not.toHaveBeenCalled();
  });
});
