import React, { useEffect } from 'react'
import smile from '../assets/smile.png'
import barcode from '../assets/barcode.jpg'

const BlueScreen = ({children}) => {
  useEffect(() => {
    // Function to check if user is on Windows Desktop/Laptop
    const isWindowsDesktop = () => {
      return window.navigator.userAgent.indexOf('Windows') !== -1;
    };

    // Function to request fullscreen
    const goFullScreen = () => {
      if (isWindowsDesktop()) {
        const element = document.documentElement;
        
        if (element.requestFullscreen) {
          element.requestFullscreen().catch(err => console.log(err));
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen().catch(err => console.log(err));
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen().catch(err => console.log(err));
        }
      }
    };

    // Try fullscreen on initial load
    window.addEventListener('load', goFullScreen);
    
    // Try fullscreen when window gets focus
    window.addEventListener('focus', goFullScreen);

    // Try fullscreen when tab becomes visible
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        goFullScreen();
      }
    });

    // Auto re-enter fullscreen if exited
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        goFullScreen();
      }
    });

    // Initial attempt
    goFullScreen();

    // Cleanup
    return () => {
      window.removeEventListener('load', goFullScreen);
      window.removeEventListener('focus', goFullScreen);
    };
  }, []);

  return (
    <div className="bg-[#0b4d99] fixed inset-0 overflow-hidden">
      {/* Rest of your component remains the same */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {children}
      </div>

      <div className="absolute w-full h-full p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="flex flex-col gap-4 sm:gap-6">
          <img 
            src={smile} 
            className="w-[60px] h-[90px] sm:w-[75px] sm:h-[110px] md:w-[91px] md:h-[140px] object-contain" 
            alt="error"
          />
          
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-thin text-left leading-[1.5] text-white font-geologica">
              Your PC ran into a problem and needs to restart.We're <br className="hidden sm:block"/>
              just collecting some error info, and then we'll restart for you
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-thin text-left leading-[1.5] text-white font-geologica">
              20% complete
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] mt-6 sm:mt-[41px]">
          <img 
            src={barcode} 
            className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[134px] md:w-[134px]" 
            alt=""
          />
          <div>
            <p className="text-sm sm:text-base md:text-[20px] font-extralight leading-[1.4] text-white">
              Formre information about thi issue and possible fixevisit
              https//www.windows.m/stopcode
            </p>
            <p className="text-sm sm:text-base md:text-[20px] font-extralight leading-[1.4] text-white mt-2">
              If you call a support persongive them this info <br className="hidden sm:block"/>
              Stop COdYCRITICALPROCESS DIED
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueScreen