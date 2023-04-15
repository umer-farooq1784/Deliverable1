import React, { useEffect, useState } from "react";
//import { useStateValue } from "./Context/StateProvider";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
//import { actionType } from "../Context/reducer";
//import { getAllAlbums } from "./api";

const DashboardAlbum = () => {
  //const [{ allAlbums }, dispatch] = useStateValue();
  
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full gap-3  my-4 p-4 py-12 border border-gray-300 rounded-md flex flex-wrap justify-evenly">
       
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            
      </div>
    </div>
  );
};

export const AlbumCard = () => {
  return (
    <motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjgxNTAzOTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Maheen</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
  </motion.i>

      {/*
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute inset-0 p-2 bg-darkOverlay  backdrop-blur-md flex flex-col items-center justify-center gap-4"
        >
          <p className="text-gray-100 text-base text-center">
            Are you sure do you want to delete this?
          </p>
          <div className="flex items-center w-full justify-center gap-3">
            <div className="bg-red-300 px-3 rounded-md">
              <p className="text-headingColor text-sm">Yes</p>
            </div>
            <div
              className="bg-green-300 px-3 rounded-md"
              
            >
              <p className="text-headingColor text-sm">No</p>
            </div>
          </div>
        </motion.div>
  */}
    </motion.div>
  );
};

export default DashboardAlbum;