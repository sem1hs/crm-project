import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeetingDetails } from "@/redux/features/meeting/meetingSlice";

const useGetMeetingDetails = () => {
  const dispatch = useDispatch();
  const { meetingsDetails } = useSelector((state) => state.meeting);
  const data = meetingsDetails?.data;

  const fetchMeeting = useCallback(
    (id) => {
      dispatch(
        fetchMeetingDetails(
          `http://localhost:5000/api/meeting/getMeetingDetails?id=${id}`,
        ),
      );
    },
    [dispatch],
  );

  return { data, fetchMeeting };
};

export default useGetMeetingDetails;
