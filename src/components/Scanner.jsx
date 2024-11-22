import React from "react";
import Scan from '../assets/Scanner.png'
import TV from '../assets/Screen.png'
import target from '../assets/target-icon.svg'
import Alert from '../components/Alert'
import Window from '../components/Window'
const Scanner = () => {
   
    return (
      <>
      <Window />
      <Alert/>
      <div className="border-2 border-gray-200 rounded-sm h-[420px] w-[750px] bg-white shadow-lg fixed top-[415px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      
        <div className="p-4 flex justify-between  h-[50px] items-center  border-b-2 border-b-gray-200">
          <div className='flex gap-2 items-center'>
            <img src={Scan}  alt=""  className="h-[24px] w-[89px]"/>           
        </div>
          
        
          <div className="flex h-full">
            <button className=" px-3 h-8 flex items-center justify-center">
            <div className="w-3.5 h-3.5 border-2 border-gray-600"></div>
            </button>
            <button className="px-3 h-8 flex items-center justify-center">
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>
        </div>
  

        <div className="mt-3 mx-5">
            <h2 className="text-blue-500 font-semibold underline underline-offset-8 decoration-blue-500">Scanner</h2>
        </div>

        <div className="mt-8 mx-10">
            <img src={TV} alt="" />
        </div>

        <div className="bg-[#EEEEEE] mt-20  h-[100px] p-6 flex items-center gap-5">
            <img src={target} alt=""  className="w-[66px] h-[66px] rounded-full bg-pattern"/>
            <div className="flex flex-col ">
            <p className="text-xs font-semibold text-gray-700">
                        The Update Assistant can help you update to the latest
                        version of Windows 10.
            </p>
            <p className="text-xs font-semibold text-gray-700">
                        An emulator that simulates the blue screen, including the
                        blue screen effect of various versions of Windows. Upgrade
                        Press the ESC key to exit the application
            </p>
            </div>
            
        </div>
      </div>
      </>
    );
  };
   export default Scanner;