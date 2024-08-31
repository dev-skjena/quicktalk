import React from "react";
import { IoSendSharp } from "react-icons/io5";

const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4 flex items-center ">
          <input
            type="text"
            placeholder="Type here"
            className="border-[1px] border-gray-700 w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900"
          />
        </div>

        <button className="text-3xl">
          <IoSendSharp />
        </button>
      </div>
    </>
  );
};

export default Type;
