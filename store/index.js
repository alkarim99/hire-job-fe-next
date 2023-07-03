import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./reducers/counterSlice"
import authSlice from "./reducers/authSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

// const persistConfig = {
//   key: "root",
//   storage,
// }

// const reducer = combineReducers({
//   counterSlice,
//   authSlice,
// })

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: {
    counterSlice,
    authSlice,
  },
  // reducer: persistedReducer,
  // middleware: [thunk],
})

// export const persistor = persistStore(store)
