import { MoonLoader } from "react-spinners";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <MoonLoader color="black" size={128} />
    </div>
  );
};

export default Loader;
