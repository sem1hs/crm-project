"use client";
import { useState } from "react";
import { findUserByUsername } from "@/lib/findUserByUsername";

const UseCreateProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const createProject = async (formData) => {
    const { name, username, startDate, endDate } = formData;
    try {
      setIsLoading(true);
      const userId = await findUserByUsername(username);

      const res = await fetch("http://localhost:5000/api/project/postProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, userId, startDate, endDate }),
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createProject, isLoading, data };
};

export default UseCreateProject;
