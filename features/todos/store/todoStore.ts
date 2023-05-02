import { create } from 'zustand';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todoAPI';
import { ApiError } from '../../../core/api/apiClient';
import { handleApiResult } from '../../../core/store/storeUtils';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoStore = {
  todos: Todo[];
  error: ApiError | null;
  fetchTodos: () => Promise<void>;
  createTodo: (title: string) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  error: null,

  fetchTodos: async () => {
    const result = await fetchTodos();
    handleApiResult(result, set, (todos: Todo[]) => {
      set({ todos });
    });
  },

  createTodo: async (title: string) => {
    const result = await createTodo(title);
    handleApiResult(result, set, (newTodo: Todo) => {
      set((state) => ({ todos: [...state.todos, newTodo] }));
    });
  },

  toggleTodo: async (id: number) => {
    const state = useTodoStore.getState();

    const todoToUpdate = state.todos.find((t) => t.id === id);

    if (todoToUpdate) {
      const result = await updateTodo(id, !todoToUpdate.completed);
      handleApiResult(result, set, (updatedTodo) => {
        set((state) => ({
          todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
        }));
      });
    }
  },

  deleteTodo: async (id: number) => {
    const result = await deleteTodo(id);
    handleApiResult(result, set, () => {
      set((state) => ({ todos: state.todos.filter((t) => t.id !== id) }));
    });
  },
}));
