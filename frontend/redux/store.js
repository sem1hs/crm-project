import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "@/redux/features/company/companySlice";
import projectReducer from "@/redux/features/project/projectSlice";
import meetingReducer from "@/redux/features/meeting/meetingSlice";
import userReducer from "@/redux/features/user/userSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
    project: projectReducer,
    meeting: meetingReducer,
    user: userReducer,
  },
});

export default store;
