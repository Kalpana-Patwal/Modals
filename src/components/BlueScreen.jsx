import React, { useEffect } from 'react'
import smile from '../assets/smile.png'
import barcode from '../assets/barcode.jpg'

const BlueScreen = ({children}) => {
  // Function to handle fullscreen
  const enterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        await document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE11
        await document.documentElement.msRequestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen request failed:", error);
    }
  };

  // Handle fullscreen on mount and user interaction
  useEffect(() => {
    // Try to enter fullscreen on page load
    const handleFullscreen = async () => {
      // Try to enter fullscreen on first user interaction
      const userInteraction = async () => {
        await enterFullscreen();
        // Remove event listeners after successful fullscreen
        document.removeEventListener('click', userInteraction);
        document.removeEventListener('keydown', userInteraction);
        document.removeEventListener('touchstart', userInteraction);
      };

      // Add event listeners for user interaction
      document.addEventListener('click', userInteraction);
      document.addEventListener('keydown', userInteraction);
      document.addEventListener('touchstart', userInteraction);
    };

    handleFullscreen();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', enterFullscreen);
      document.removeEventListener('keydown', enterFullscreen);
      document.removeEventListener('touchstart', enterFullscreen);
    };
  }, []);

  return (
    <>
      <div className="bg-[#0b4d99] fixed inset-0 overflow-hidden">
        {/* Children (dialogs) container */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {children}
        </div>

        {/* Main content container */}
        <div className="absolute w-full h-full p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Smile icon */}
            <img 
              src={smile} 
              className="w-[60px] h-[90px] sm:w-[75px] sm:h-[110px] md:w-[91px] md:h-[140px] object-contain" 
              alt="error"
            />
            
            {/* Text content */}
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

          {/* Barcode section */}
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
    </>
  )
}

export default BlueScreen