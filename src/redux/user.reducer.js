import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  auth_token: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isSuccess = true;
      state.auth_token = action.payload;
    },
    logout: (state) => {
      state.isSuccess = initialState.isSuccess;
      state.auth_token = initialState.auth_token;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;