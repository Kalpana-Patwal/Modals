import React from "react";
import defender from '../assets/secirity.svg'
import user from '../assets/User (2).png'
import microsoft  from '../assets/unnamed.jpg'

const Window = () => {
  return (
    <div className="border-2 border-gray-200 rounded-md h-[350px] w-[570px] bg-white shadow-lg fixed top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 font-geologica ">
      <div className="flex items-center justify-between">
        <h1 className="text-md gap-2 px-5 h-[50px] font-normal text-black flex items-center">
          <img src={defender} alt="" />Windows Defender
          Security Center
        </h1>
        <button className="text-gray-500 hover:text-gray-800">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5.95386L5 15.9539" stroke="#565D6D" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"></path>
            <path d="M15 15.9539L5 5.95386" stroke="#565D6D" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"></path>
          </svg>
        </button>
      </div>
      <hr className="my-2" />
      <div className="my-4">
        <p className="text-red-600 font-semibold text-sm text-center">
          App: Ads.fianectrack(2).dll
        </p>
        <p className="text-red-600 font-semibold text-sm text-center">
          Threat Detected: Trojan Spyware
        </p>
      </div>
      <div className="flex items-center justify-center my-4">
        <img src={user} alt="Security Alert" className="h-16 w-56" />
      </div>
      <p className="text-center text-gray-800 font-semibold">
        Access to this PC has been blocked for security reasons.
      </p>
      <p className="text-center text-blue-600 mb-2 font-semibold">
        <a href="#" className="">Contact Windows Support: +1 (833) 638 3086 (Security Helpline)</a>
      </p>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 border-t border-slate-200 border-solid bg-white">
        <span className="flex items-center">
          <img src={microsoft} alt="Microsoft Logo" className="h-6 w-6 mr-2" />
          <span className="text-gray-800 font-bold">Microsoft</span>
        </span>
        <div className="space-x-4">
          <button className="bg-white text-black px-4 py-1.5 border text-md border-black border-solid rounded hover:bg-black-500">
            Ignore
          </button>
          <button className="bg-blue-600 text-white px-5 py-1.5 border text-md border-blue-600 border-solid rounded hover:bg-blue-700">
            Scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Window;