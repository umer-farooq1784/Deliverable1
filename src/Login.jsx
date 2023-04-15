import React from 'react';
import "./App.css";
import "./home.jsx"
import { LoginBg } from "./assets/video";
const Login = () =>
 { 
  return (
    <div className="relative w-screen h-screen">


      <video
        src={LoginBg}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div onclick="myFunction(){
            <home/>
          }"
            
            className="flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all  "
          >
            <p>Signin with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
