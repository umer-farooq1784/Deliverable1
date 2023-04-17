import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.jsx";
import Home from  "./home.jsx";
import Dashboard from "./Dashboard";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import NewSong from "./NewSong";
import Payment from "./payment";
import Contact from "./Contact";

function App() {
  return (
    <AnimatePresence>
      <div className="h-auto flex items-center justify-center min-w-[680px]">
       <BrowserRouter>    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/NewSong" element={<NewSong />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}
          >
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}
          >
            <MusicPlayer />
          </motion.div>
          
        
      </div>
    </AnimatePresence>
  );
}

export default App;
