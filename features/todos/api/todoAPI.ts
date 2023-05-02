import { request, ApiError } from '../../../core/api/apiClient';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[] | ApiError> => {
  return request<Todo[]>({ method: 'GET', url: '/todos' });
};

export const createTodo = async (title: string): Promise<Todo | ApiError> => {
  return request<Todo>({
    method: 'POST',
    url: '/todos',
    data: { title, completed: false },
  });
};

export const updateTodo = async (
  id: number,
  completed: boolean
): Promise<Todo | ApiError> => {
  return request<Todo>({
    method: 'PATCH',
    url: `/todos/${id}`,
    data: { completed },
  });
};

export const deleteTodo = async (id: number): Promise<void | ApiError> => {
  return request<void>({ method: 'DELETE', url: `/todos/${id}` });
};
