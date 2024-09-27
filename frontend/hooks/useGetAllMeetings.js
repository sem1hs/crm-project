import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeetings } from "@/redux/features/meeting/meetingSlice";

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  const { isLoading, meetings } = useSelector((state) => state.meeting);
  const data = meetings?.data;

  const fetchData = useCallback(() => {
    dispatch(fetchMeetings("http://localhost:5000/api/meeting/getAllMeetings"));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
  };
};

export default UseGetAllCompanies;
