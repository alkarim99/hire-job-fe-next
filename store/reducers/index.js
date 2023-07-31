import { combineReducers } from "redux"

import counterSlice from "./counterSlice"
import authSlice from "./authSlice"

// you can add your reducer in here
const rootReducer = combineReducers({
  counterSlice,
  authSlice,
})

export default rootReducer
