import React, {  useState } from "react";
import { motion } from "framer-motion";

//import { useStateValue } from "./Context/StateProvider";
//import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
//import { getAllArtist } from "../api";
//import { actionType } from "../Context/reducer";

const DashboardArtist = () => {
  //const [{ artists }, dispatch] = useStateValue();

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full gap-3  my-4 p-4 py-12 border border-gray-300 rounded-md flex flex-wrap justify-evenly">

       
       <ArtistCard/>
       <ArtistCard/>
       <ArtistCard/>
       
        
      </div>
    </div>
  );
};

export const ArtistCard = () => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    
    <>
   
     
    
    <motion.div
    initial={{ opacity: 0, translateX: -50 }}
    animate={{ opacity: 1, translateX: 0 }}
    transition={{ duration: 0.3}}
      className="relative w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center" >
      <img
        src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjgxNTAzOTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Maheen</p>
      <div className="flex items-center gap-4">
        <a href="instagram.com/maheen0104/" target="_blank">
          <motion.i whileTap={{ scale: 0.75 }}>
            <IoLogoInstagram className="text-gray-500 hover:text-headingColor text-xl" />
          </motion.i>
        </a>
        <a href="instagram.com/maheen0104/" target="_blank">
          <motion.i whileTap={{ scale: 0.75 }}>
            <IoLogoTwitter className="text-gray-500 hover:text-headingColor text-xl" />
          </motion.i>
        </a>
      </div>
      <motion.i
        className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
        onClick={() => setIsDelete(true)}
      >
        <MdDelete className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer" />
      </motion.i>

      {isDelete && (
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
              onClick={() => setIsDelete(false)}
            >
              <p className="text-headingColor text-sm">No</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
    </>
  );
};

export default DashboardArtist;
