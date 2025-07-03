import React from "react";

export const SidebarOne = () => {
  return (
    <div className="h-screen bg-[#232127] w-[75px] pt-2 px-2">
      {/* server icons */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#5864ee] cursor-pointer text-white flex justify-center items-center rounded-full h-[50px] w-[50px] mb-3">
          <i class="bi bi-chat-left"></i>
        </div>
        <div className="bg-[#303036] cursor-pointer text-white text-md rounded-full h-[50px] w-[50px] flex justify-center items-center mb-3">
          S
        </div>
        <div className="bg-[#303036] cursor-pointer text-white text-md rounded-full h-[50px] w-[50px] flex justify-center items-center mb-3">
          T
        </div>
        <div className="bg-[#303036] cursor-pointer text-green-500 text-lg  rounded-full h-[50px] w-[50px] flex justify-center items-center">
          +
        </div>
      </div>
    </div>
  );
};
