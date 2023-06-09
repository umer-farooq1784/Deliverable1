import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { AiFillHeart } from "react-icons/ai"

const Favourites = () => {

  
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
   <Header/>
    <SearchBar />
      <p className="my-4 text-base text-textColor">
        Searched for :
      </p>
    
    <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
      <FavouritesCard/>
    </div>
  </div>
  );
};

export const FavouritesCard = () => {
  return (

    <>
   
    <motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/Yybzm5w9W2/size_l_1607676283.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Willow</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <div  className="flex items-center justify-between">
        <AiFillHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        

        
        
  </motion.i>

  

      
    </motion.div>


{/* card 2 */}

<motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKPadBj3o/size_l.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Photograph</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <div  className="flex items-center justify-between">
        <AiFillHeart className="text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        

        
        
  </motion.i>

  

      
    </motion.div>
    

{/* card 3 */}
    <motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://c.saavncdn.com/351/In-A-Tidal-Wave-Of-Mystery-2013-500x500.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Safe and Sound</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <div  className="flex items-center justify-between">
        <AiFillHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        

        
        
  </motion.i>

  


    </motion.div>

{/* card 4 */}
    <motion.div 
        className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
        <img
        src="https://i1.sndcdn.com/artworks-tdB29TmmTsNyP6Bn-Yayq2A-t500x500.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
        />

      <p className="text-base text-textColor">Gawara</p>

        <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <div  className="flex items-center justify-between">
        <AiFillHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>     
       </motion.i>
    </motion.div>


{/* card 5 */}
    <motion.div
    
      className="relative  overflow-hidden w-44 min-w-180 px-2 py-4 gap-3 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <img
        src="https://a10.gaanacdn.com/images/albums/73/2668573/crop_480x480_2668573.jpg"
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />

      <p className="text-base text-textColor">Beautiful People</p>

      <motion.i
       className="absolute bottom-2 right-2"
        whileTap={{ scale: 0.75 }}
      >
        <div  className=" mt-96 flex items-center justify-between">
        <AiFillHeart className=" text-gray-400 hover:text-red-400 text-xl cursor-pointer " />
        </div>
        

        
        
  </motion.i>

  

      
 
    </motion.div>


</>
   
  );
};

export default Favourites;
