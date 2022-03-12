import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { todosApiSlice } from "../features/todos/todos-api-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
