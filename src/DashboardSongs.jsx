import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClear } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const DashboardSongs = () => {

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center gap-24">
        <NavLink
          to={"/dashboard/newSong"}
          className="flex items-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-400 hover:shadow-md cursor-pointer"
        >
        <IoAdd />
        </NavLink>
        <input
          type="text"
          placeholder="Search here"
          className={`w-52 px-4 py-2 border border-gray-500 shadow-md" : "border-gray-300"
          rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}
        />

        {
          <motion.i
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.75 }}
          >
          <AiOutlineClear className="text-3xl text-textColor cursor-pointer" />
          </motion.i>
        }
      </div>

      <div className="relative w-full  my-4 p-4 py-12 border border-gray-300 rounded-md">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count :{" "}
            </span>
          </p>
        </div>
        <SongContainer  />
      </div>
    </div>
  );
};

export const SongContainer = ({ data }) => {
  return (
    <div className=" w-full  flex flex-wrap gap-3  items-center justify-evenly">
      {data &&
        data.map((song, i) => (
          <SongCard />
        ))}
    </div>
  );
};

export const SongCard = ({ data, index }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
   
    >
    {
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        className="absolute z-10 p-2 inset-0 bg-card backdrop-blur-md flex flex-col gap-6 items-center justify-center"
      >
      </motion.div>
    }

    <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={data.imageURL}
        alt=""
        className=" w-full h-full rounded-lg object-cover"
      />
    </div>
    <p className="text-base text-headingColor font-semibold my-2">
      {data.name.length > 25 ? `${data.name.slice(0, 25)}` : data.name}
      <span className="block text-sm text-gray-400 my-1">{data.artist}</span>
    </p>
  
    </motion.div>
  );
};

export default DashboardSongs;
