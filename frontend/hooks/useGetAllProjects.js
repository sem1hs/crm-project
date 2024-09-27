import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "@/redux/features/company/companySlice";
import { fetchProjects } from "@/redux/features/project/projectSlice";

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  const { isLoading, projects } = useSelector((state) => state.project);
  const data = projects?.data;

  const fetchData = useCallback(() => {
    dispatch(fetchProjects("http://localhost:5000/api/project/getAllProjects"));
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
