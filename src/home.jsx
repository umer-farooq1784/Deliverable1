import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar.jsx";
import { motion } from "framer-motion";
import {AiOutlineHeart} from "react-icons/ai"

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <SearchBar />
        <p className="my-4 text-base text-textColor">
          Searched for :
        </p>
  
      <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
        <HomeSongContainer/>
      </div>
    </div>
  );
};

export const HomeSongContainer = () => {
 
  return (
    <>
      
      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/Yybzm5w9W2/size_l_1607676283.jpg"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Willow
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>


      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://i.scdn.co/image/ab67616d0000b27313c6cb6a81c8db4dbc8b9924"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Safe and Sound
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>


      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e8/Ed_Sheeran_-_2step.png"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          2step
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>


      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Shawn_Mendes_-_Stitches.png"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Stitches
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>


      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://i1.sndcdn.com/artworks-pqLsyoyCkiVRrjNw-XmJPzQ-t500x500.jpg"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Dusk Till Dawn
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>

      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png/1200px-Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Attention
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>

      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          We Don't Talk Anymore
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>
      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/10/How_Long_Charlie_Puth_Single_Cover.png"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          How Long
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>

      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://i.redd.it/taylor-swift-midnights-song-cover-art-v0-hodualt0c2v91.png?width=1080&format=png&auto=webp&s=dcbaf2000cae95f4dee8f1f0c333e059de176e05"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Lavender Haze
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>

      <motion.div
       whileTap={{ scale: 0.8 }}
       initial={{ opacity: 0, translateX: -50 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ duration: 0.3}}
       className="relative overflow-hidden w-40 min-w-210 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
      >
        <img
          src="https://i1.sndcdn.com/artworks-000579665654-lhp1xj-t500x500.jpg"
          className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden"
          alt=""
        />

        <p className="text-base text-headingColor font-semibold my-2">
                  
          <span className="block text-sm text-gray-400 my-1">
          Senorita
          </span>
        </p>

        <motion.i
          className="absolute bottom-2 right-2"
          whileTap={{ scale: 0.75 }}
        >
        <div  className="flex items-center justify-between">
        <AiOutlineHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        
        </motion.i>

      </motion.div>
      




    
  
        
    
    </>
  );
};

export default Home;
