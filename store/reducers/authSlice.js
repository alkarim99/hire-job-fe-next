import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {},
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { addAuth } = authSlice.actions

export default authSlice.reducer
