import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todosApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query<Todo[], number | void>({
      query: () => "/todos",
    }),
  }),
});

export const { useFetchTodosQuery } = todosApiSlice;
