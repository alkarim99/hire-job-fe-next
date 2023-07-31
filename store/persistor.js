import localStorage from "redux-persist/lib/storage"

let storage = localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authSlice"], // you can add whitelist persistent reducer in here using array
}

export default persistConfig
