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

export const fetchCompanies = createAsyncThunk(
  "company/fetchCompanies",
  fetchData,
);

const initialState = {
  isLoading: false,
  status: true,
  companies: [],
};

const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.status = false;
    });
  },
});

export default companySlice.reducer;
