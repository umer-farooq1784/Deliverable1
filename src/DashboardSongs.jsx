import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClear } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';


const DashboardSongs = () => {
  
    const navigate = useNavigate();
    const navigateToNew = () => {
    navigate( "/NewSong");
    };
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center gap-24">
        <div 
          onClick={navigateToNew}
          className="flex items-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-400 hover:shadow-md cursor-pointer"
        >
        <IoAdd />
        </div>
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
              Count : 3
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
     
      <SongCard />
      
        
    </div>
  );
};

export const SongCard = () => {
  return (
    <>
    
    <motion.div
          
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3}}
          className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
        
        >
          <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
             src="https://a10.gaanacdn.com/images/albums/73/2668573/crop_480x480_2668573.jpg"
              alt=""
              className=" w-full h-full rounded-lg object-cover"
            />
            
          </div>
          

          <p className="text-base text-headingColor font-semibold my-2">
          
            <span className="block text-sm text-gray-400 my-1">
            Beautiful People
            </span>
          </p>
        </motion.div>


        {/* card 2 just for front end  */}


        <motion.div
          
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3}}
          className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
        
        >
          <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
             src="https://static.stereogum.com/uploads/2022/03/unnamed-2-1648767754.jpg"
              alt=""
              className=" w-full h-full rounded-lg object-cover"
            />
            
          </div>
          

          <p className="text-base text-headingColor font-semibold my-2">
          
            <span className="block text-sm text-gray-400 my-1">
            As It Was
            </span>
          </p>
        </motion.div>


        <motion.div
          
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3}}
          className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
        
        >
          <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
             src="https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
              alt=""
              className=" w-full h-full rounded-lg object-cover"
            />
            
          </div>
          

          <p className="text-base text-headingColor font-semibold my-2">
          
            <span className="block text-sm text-gray-400 my-1">
            God's Plan
            </span>
          </p>
        </motion.div>
    
    </>
  );
};

export default DashboardSongs;
