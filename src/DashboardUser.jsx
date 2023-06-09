import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { motion } from "framer-motion";
import DashboardUserCard from "./DashboardUserCard";

const DashboardUser = () => {
 

 

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center gap-24">
        <input
          type="text"
          placeholder="Search here"
          className="w-52 px-4 py-2 border border-gray-500 shadow-md border-gray-300 rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold"
          value=""
          onChange=""
          //onBlur={() => setIsFocus(false)}
          //onFocus={() => setIsFocus(true)}
        />

        
          <motion.i
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.75 }}
            onClick={() => {
              //setEmailFilter("");
              //setFiltereUsers(null);
            }}
          >
            <AiOutlineClear className="text-3xl text-textColor cursor-pointer" />
          </motion.i>
        
      </div>

      <div className="relative w-full py-12 min-h-[400px] overflow-x-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count : 3 
            </span>
               
          </p>
        </div>

        <div className="w-full min-w-[750px] flex items-center justify-between">
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Image</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Name</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Email</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Verified</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>{" "}
        </div>
        
            <DashboardUserCard  />
           
            
      </div>
    </div>
  );
};

export default DashboardUser;
