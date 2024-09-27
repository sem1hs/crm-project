import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = async (url, thunkAPI) => {
  try {
    const res = await fetch(url, { credentials: "include" });
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchUser = createAsyncThunk("user/fetchUser", fetchData);

const initialState = { isLoading: false, status: true, users: [] };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = false;
    });
  },
});

export default userSlice.reducer;
