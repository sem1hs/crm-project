import React, { useEffect, useState } from "react";

const UseGetAllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const findAllUser = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/api/user/getAllUser", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    findAllUser();
  }, []);

  return { isLoading, data };
};

export default UseGetAllUsers;
