import React, { useState } from "react";
import { IoMusicalNote } from "react-icons/io5";
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { RiPlayListFill } from "react-icons/ri";

const MusicPlayer = () => {
  const [isMaximixe, setisMaximixe] = useState(true);
  const [isPalylist, setisPalylist] = useState(false);
  return (
    <div className="w-full full flex items-center gap-3 overflow-hidden">
      {isMaximixe &&
        <div className="w-full full items-center gap-3 p-4 flex relative" >
          <img onClick={() => setisPalylist(false)}
            src="https://i1.sndcdn.com/artworks-000011754532-kxub3f-t500x500.jpg"
            className="w-20 h-20 object-cover rounded-md"
            alt=""
          />
          <div className="flex items-start flex-col">
            <p className="text-xl text-headingColor font-semibold">
              Ankhon k Sagar
              <span className="text-base">{" "}Pakistani Hits</span>
            </p>
            <p className="text-textColor">
               Shafqat Amanat Ali
              <span className="text-sm text-textColor font-semibold">
              {" "}Classic
              </span>
            </p>
            <motion.i  onClick={() => setisPalylist(true)} >
              <RiPlayListFill className="text-textColor hover:text-headingColor text-3xl cursor-pointer" />
            </motion.i>
          </div>
          <div className="flex-1">
            <AudioPlayer
              autoPlay={true}
              showSkipControls={true}
              src="http://example.com/audio.mp3"
              onPlay={e => console.log("onPlay")}
            />
          </div>
        </div> 
      }

      { isPalylist &&
        <PlayListCard />
      }
      
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed right-2 bottom-2 "
      >
        <div className="w-40 h-40 rounded-full flex items-center justify-center  relative " onClick={() => setisMaximixe(false)} >
          <img
            src="https://i1.sndcdn.com/artworks-000011754532-kxub3f-t500x500.jpg"
            className="z-50 w-32 h-32 rounded-full object-cover cursor-pointer"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export const PlayListCard = () => {
  return (
    <div className="absolute left-4 bottom-24 gap-2 py-2 w-350 max-w-[350px] h-510 max-h-[510px] flex flex-col overflow-y-scroll scrollbar-thin rounded-md shadow-md bg-primary">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3}}
        className="group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer bg-card bg-transparent"
      >
        <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />
        <div className="flex items-start flex-col">
          <p className="text-lg text-headingColor font-semibold">
            Ankhon k Sagar
            <span className="text-base">{" "}Album</span>
          </p>
          <p className="text-textColor">
            Shafqat Amanat Ali 
            <span className="text-sm text-textColor font-semibold">
            {" "}Classic
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3}}
        className="group w-full p-4 hover:bg-card flex gap-3 items-center cursor-pointer bg-card bg-transparent"
      >
        <IoMusicalNote className="text-textColor group-hover:text-headingColor text-2xl cursor-pointer" />
        <div className="flex items-start flex-col">
          <p className="text-lg text-headingColor font-semibold">
            Faded
            <span className="text-base">{" "}Album</span>
          </p>
          <p className="text-textColor">
            Alan Walker
            <span className="text-sm text-textColor font-semibold">
              {" "}Pop
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
