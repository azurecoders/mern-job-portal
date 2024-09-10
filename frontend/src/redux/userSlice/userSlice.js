import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    accountStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    accountFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    accountSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
    },
    accountLogOut: (state) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const { accountFailure, accountLogOut, accountStart, accountSuccess } =
  UserSlice.actions;
export default UserSlice.reducer;
