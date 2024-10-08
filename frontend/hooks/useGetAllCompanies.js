import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "@/redux/features/company/companySlice";

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  const { isLoading, companies } = useSelector((state) => state.company);
  const data = companies?.data;

  const fetchData = useCallback(() => {
    dispatch(
      fetchCompanies("http://localhost:5000/api/company/getAllCompanies"),
    );
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
