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

export const fetchMeetings = createAsyncThunk(
  "meeting/fetchMeetings",
  fetchData,
);

export const fetchMeetingDetails = createAsyncThunk(
  "meeting/fetchMeetingDetails",
  fetchData,
);

const initialState = {
  isLoading: false,
  status: true,
  meetings: [],
  meetingsDetails: [],
};

const meetingSlice = createSlice({
  name: "meetingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeetings.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMeetings.fulfilled, (state, action) => {
      state.meetings = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMeetings.rejected, (state, action) => {
      state.status = false;
    });

    builder.addCase(fetchMeetingDetails.fulfilled, (state, action) => {
      state.meetingsDetails = action.payload;
    });
  },
});

export default meetingSlice.reducer;
