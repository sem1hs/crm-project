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

export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  fetchData,
);

const initialState = {
  isLoading: false,
  status: true,
  projects: [],
};
const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = false;
    });
  },
});

export default projectSlice.reducer;
