import { renderHook, act } from '@testing-library/react-native';
import { useTodoStore } from './todoStore';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todoAPI';

// Mock the API calls
jest.mock('../api/todoAPI', () => ({
  fetchTodos: jest.fn(),
  createTodo: jest.fn(),
  updateTodo: jest.fn(),
  deleteTodo: jest.fn(),
}));

// Mock data
const mockTodos = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false },
];

describe('todoStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetchTodos updates the todos state', async () => {
    (fetchTodos as jest.Mock).mockResolvedValue(mockTodos);

    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      await result.current.fetchTodos();
    });

    expect(result.current.todos).toEqual(mockTodos);
  });

  test('createTodo adds a new todo to the state', async () => {
    const newTodo = { id: 3, title: 'Task 3', completed: false };
    (createTodo as jest.Mock).mockResolvedValue(newTodo);

    const { result } = renderHook(() => useTodoStore());

    await act(async () => {
      await result.current.createTodo(newTodo.title);
    });

    expect(result.current.todos).toContainEqual(newTodo);
  });

  test('toggleTodo updates the completed status of a todo', async () => {
    (updateTodo as jest.Mock).mockImplementation(async (id, completed) => ({
      ...mockTodos.find((todo) => todo.id === id),
      completed,
    }));

    const { result } = renderHook(() => useTodoStore());
    result.current.todos = mockTodos;

    await act(async () => {
      await result.current.toggleTodo(1);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  test('deleteTodo removes a todo from the state', async () => {
    (deleteTodo as jest.Mock).mockResolvedValue({});

    const { result } = renderHook(() => useTodoStore());
    result.current.todos = mockTodos;

    await act(async () => {
      await result.current.deleteTodo(1);
    });

    expect(result.current.todos).not.toContainEqual(mockTodos[0]);
  });
});
