import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./reducers/counterSlice"
import authSlice from "./reducers/authSlice"

export const store = configureStore({
  reducer: {
    counterSlice,
    authSlice,
  },
})
