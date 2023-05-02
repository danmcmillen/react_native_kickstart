import { ApiError } from '../../../core/api/apiClient';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './todoAPI';

// Mock the request function from apiClient
jest.mock('../../../core/api/apiClient', () => {
  return {
    request: jest.fn(),
  };
});

// Import the mocked request function
import { request } from '../../../core/api/apiClient';

// Cast the request mock to jest.MockedFunction for proper typing
const requestMock = request as jest.MockedFunction<typeof request>;

describe('todoAPI', () => {
  afterEach(() => {
    requestMock.mockReset();
  });

  test('fetchTodos', async () => {
    const todos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];

    // Simulate a successful API response
    requestMock.mockResolvedValue(todos);

    const result = await fetchTodos();
    expect(result).toEqual(todos);
    expect(requestMock).toHaveBeenCalledWith({ method: 'GET', url: '/todos' });
  });

  test('createTodo', async () => {
    const newTodo = { id: 3, title: 'New Todo', completed: false };

    // Simulate a successful API response
    requestMock.mockResolvedValue(newTodo);

    const result = await createTodo('New Todo');
    expect(result).toEqual(newTodo);
    expect(requestMock).toHaveBeenCalledWith({
      method: 'POST',
      url: '/todos',
      data: { title: 'New Todo', completed: false },
    });
  });

  // ... Add tests for updateTodo and deleteTodo in a similar way

  test('updateTodo', async () => {
    const updatedTodo = { id: 3, title: 'Updated Todo', completed: true };

    // Simulate a successful API response
    requestMock.mockResolvedValue(updatedTodo);

    const result = await updateTodo(3, true);
    expect(result).toEqual(updatedTodo);
    expect(requestMock).toHaveBeenCalledWith({
      method: 'PATCH',
      url: '/todos/3',
      data: { completed: true },
    });
  });

  test('deleteTodo', async () => {
    // Simulate a successful API response
    requestMock.mockResolvedValue(undefined);

    const result = await deleteTodo(3);
    expect(result).toEqual(undefined);
    expect(requestMock).toHaveBeenCalledWith({
      method: 'DELETE',
      url: '/todos/3',
    });
  });

  test('handle API error', async () => {
    const apiError: ApiError = {
      message: 'Error fetching data',
      status: 500,
    };

    // Simulate an API error
    requestMock.mockResolvedValue(apiError);

    const result = await fetchTodos();
    expect(result).toEqual(apiError);
    expect(requestMock).toHaveBeenCalledWith({ method: 'GET', url: '/todos' });
  });
});
