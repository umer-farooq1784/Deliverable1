import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";


const DashboardAlbum = () => {
 
  
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full gap-3  my-4 p-4 py-12 border border-gray-300 rounded-md flex flex-wrap justify-evenly">

      <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count : 3
            </span>
            
          </p>
        </div>
       
            <AlbumCard />
            
      </div>
    </div>
  );
};

export const AlbumCard = () => {
  return (
    <>
    
    <motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://cdn.vox-cdn.com/thumbor/cUUdVnTXrleRNqbV-9JloWAleSI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Fine Line</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
  </motion.i>

      
    </motion.div>

    {/* card 2 onwards for frontend */}

    <motion.div
    
    className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
  >
    <img
      src="https://i.pinimg.com/originals/be/65/ec/be65ecbf01b0f9d0cfbbd6631273fa8b.jpg"
      className="w-full h-40 object-cover rounded-md"
      alt=""
    />

    <p className="text-base text-textColor">Red</p>

    <motion.i
     className="absolute bottom-2 right-2"
      whileTap={{ scale: 0.75 }}
    >
      <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
</motion.i>

    
  </motion.div>

  <motion.div
    
    className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Her_Loss.jpeg/220px-Her_Loss.jpeg"
      className="w-full h-40 object-cover rounded-md"
      alt=""
    />

    <p className="text-base text-textColor">Her Loss</p>

    <motion.i
     className="absolute bottom-2 right-2"
      whileTap={{ scale: 0.75 }}
    >
      <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
</motion.i>

   
  </motion.div>


    </>
  );
};

export default DashboardAlbum;
