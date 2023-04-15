import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { IoMdClose } from "react-icons/io";
import { IoArrowRedo, IoArrowUndo, IoMusicalNote } from "react-icons/io5";
import { motion } from "framer-motion";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { actionType } from "./reducer";
import { MdPlaylistPlay } from "react-icons/md";
import { getAllSongs } from "./api";
import { RiPlayListFill } from "react-icons/ri";

const MusicPlayer = () => {
  

  
  

  return (
    <div className="w-full full flex items-center gap-3 overflow-hidden">
      <div
        className="w-full full items-center gap-3 p-4 absolute top-40  flex relative"
        
      >
        <img
          src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjgxNTAzOTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          className="w-40 h-20 object-cover rounded-md"
          alt=""
        />
        <div className="flex items-start flex-col">
          <p className="text-xl text-headingColor font-semibold">
            Faded
            <span className="text-base">Alan's Hit</span>
          </p>
          <p className="text-textColor">
            Alan Walker
            <span className="text-sm text-textColor font-semibold">
              Pop
            </span>
          </p>
          <motion.i
            
            
          >
            <RiPlayListFill className="text-textColor hover:text-headingColor text-3xl cursor-pointer" />
          </motion.i>
        </div>
        <div className="flex-1">
          <AudioPlayer
            src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjgxNTAzOTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
           // onPlay={() => console.log("is playing")}
           autoPlay={true}
            showSkipControls={true}
            
          />
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3">
          <motion.i whileTap={{ scale: 0.8 }} >
            <IoMdClose className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
          </motion.i>
          <motion.i >
            <IoArrowRedo className="text-textColor hover:text-headingColor text-2xl cursor-pointer" />
          </motion.i>
        </div>
      </div>

      
        <>
         
        </>
      

      
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed right-2 bottom-2 "
        >
          <div className="w-40 h-40 rounded-full flex items-center justify-center  relative ">
            <div className="absolute inset-0 rounded-full bg-red-600 blur-xl animate-pulse"></div>
            <img
            
              src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjgxNTAzOTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              className="z-50 w-32 h-32 rounded-full object-cover cursor-pointer"
              alt=""
            />
          </div>
        </motion.div>
     
    </div>
  );
};

export const PlayListCard = () => {
 // const [{ allSongs, song, isSongPlaying }, dispatch] = useStateValue();
 


  return (
    <div className="absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary">
      
        
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3}}
            className="group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer bg-card bg-transparent"
            
            //onClick={() => setCurrentPlaySong(index)}
          >
            <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />

            <div className="flex items-start flex-col">
              <p className="text-lg text-headingColor font-semibold">
               Faded
                <span className="text-base">Album</span>
              </p>
              <p className="text-textColor">
                Alan 
                <span className="text-sm text-textColor font-semibold">
                  Pop
                </span>
              </p>
            </div>
          </motion.div>
        
       
    </div>
  );
};

export default MusicPlayer;
