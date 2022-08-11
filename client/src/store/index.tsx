// 여러개의 slice를 모아주는 역할
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    login: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
