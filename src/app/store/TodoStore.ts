import { create } from "zustand";

type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

interface TodoStore {
  todos: Todo[] | [];
  addTodo: (todo: Todo) => void;
}

export const useStore = create<TodoStore>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
