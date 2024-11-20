import { createSlice } from "@reduxjs/toolkit";
import { getUser, editUser } from "./userAction";

const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  isLoading: false,
  isEditing: false,
};

const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.userName;
      })
      .addCase(editUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleIsEditing, updateUserName } = profileSlice.actions;
export default profileSlice.reducer;
