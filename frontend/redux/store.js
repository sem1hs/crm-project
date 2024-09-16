import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "@/redux/features/company/companySlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export default store;
