import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "@/pages/app/ContentSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型
export type AppDispatch = typeof store.dispatch;
