"use client";
import { useState } from "react";
import { findUserByUsername } from "@/lib/findUserByUsername";
import { findProjectByName } from "@/lib/findProjectByName";
import { concatTime } from "@/lib/formatTime";

const UseCreateProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [meetingDetails, setMeetingDetails] = useState({});

  const createMeeting = async (formData) => {
    const { name, customername, projectname, meetingDate, startTime, endTime } =
      formData;
    try {
      setIsLoading(true);
      const userId = await findUserByUsername(customername);
      const projectId = await findProjectByName(projectname);

      const formattedStartTime = concatTime(startTime);
      const formattedEndTime = concatTime(endTime);

      const res = await fetch("http://localhost:5000/api/meeting/postMeeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          meetingDate,
          name,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
          userId,
          projectId,
        }),
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createMeeting, isLoading, data };
};

export default UseCreateProject;
