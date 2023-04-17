import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './logo.png';
import { motion } from "framer-motion";
import Payment from "./payment";


const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const nav = () => {
    navigate( "/payment");
    };
  return (
    <header className="flex items-center w-full p-4 md:py-2 md:px-6">
      <NavLink to={"/"}>
      <img src={Logo} className="w-16" alt="" />
      </NavLink>

      <ul className="flex items-center justify-center ml-7">
        {/* prettier-ignore */}
        <li className="mx-5 text-lg"><NavLink to={'/home'}>Home</NavLink></li>
        {/* prettier-ignore */}
        <li className="mx-5 text-lg"><NavLink to={'/musics'}>Musics</NavLink></li>
        {/* prettier-ignore */}
        <li className="mx-5 text-lg"onClick={nav}>Premium</li>
        {/* prettier-ignore */}
        <li className="mx-5 text-lg"><NavLink to={'/contact'} >Contact</NavLink></li>
      </ul>

      <div
        className="flex items-center ml-auto cursor-pointer gap-2 relative"
        onMouseEnter={() => setIsMenu(true)}
      >
        Menu
        <div className="flex flex-col">
          <p className="text-textColor text-lg hover:text-headingColor font-semibold">
           
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
            
           
          </p>
        </div>

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 top-12 right-0 w-275 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
          >
           <NavLink to={"/userProfile"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>
            
            <NavLink to={"/favourites"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Favourites
              </p>
            </NavLink>
            <hr />
           
            <>
              <NavLink to={"/dashboard/home"}>
                <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                  Dashboard
                </p>
              </NavLink>
              <hr />
            </>
            
            <p
              className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
            
            >
              Sign out
            </p>
          </motion.div>
        )}
        
      </div>
    </header>
  );
};

export default Header;
