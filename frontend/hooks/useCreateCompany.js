"use client";
import { useState } from "react";

const UseCreateCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const createCompany = async (formData) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/api/company/postCompany", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return { createCompany, isLoading, data };
};

export default UseCreateCompany;
