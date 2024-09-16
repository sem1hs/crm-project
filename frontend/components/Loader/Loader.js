import { MoonLoader } from "react-spinners";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MoonLoader color="#006666" size={128} />
    </div>
  );
};

export default Loader;
