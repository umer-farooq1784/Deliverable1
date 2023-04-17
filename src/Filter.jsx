import React from "react";
import { useStateValue } from "./Context/StateProvider";

import FilterButtons from "./FilterButtons";
import { MdClearAll } from "react-icons/md";
import { motion } from "framer-motion";

const Filter = () => {
 
  return (
    
    <div className="w-full my-4 px-6 py-4 flex items-center justify-start md:justify-center gap-10">
      <motion.i
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.75 }}
      >
      <MdClearAll className="text-textColor text-xl cursor-pointer" />
      </motion.i>
    </div>
  );
};

export default Filter;
