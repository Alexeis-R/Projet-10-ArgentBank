import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";

export const logoutAction = createAction("auth/logout");

export const loginAction = createAsyncThunk(
  "auth/login",
  async (entryPayload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(
          data.body?.message || "Incorrect username or password"
        );
      }

      localStorage.setItem("token", data.body?.token || "");
      return data.body?.token || "";
    } catch (error) {
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoading: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(logoutAction, (state) => {
        state.token = null;
        localStorage.removeItem("token");
      });
  },
});

export default authSlice.reducer;
