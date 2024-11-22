import React from 'react'
import smile from '../assets/smile.png'
import barcode from '../assets/barcode.jpg'

const BlueScreen = ({children}) => {
  return (
    <>
      <div className="bg-[#0b4d99] fixed inset-0 overflow-hidden">
      
        <div className="absolute w-full">
          {children}
        </div>

    
        <div className="absolute w-full p-20">
          <div className="flex flex-col gap-6">
          
            <img 
              src={smile} 
              className="w-[91px] h-[140px] object-contain" 
              alt="error"
            />
           
            
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-thin text-left leading-[1.5] text-white font-geologica">
                Your PC ran into a problem and needs to restart.We're <br/>
                just collecting some error info, and then we'll restart for you
              </h1>
              <h2 className="text-3xl font-thin text-left leading-[1.5] text-white font-geologica">
                20% complete
              </h2>
            </div>
          </div>

     
          <div className="flex gap-[20px] mt-[41px]">
            <img src={barcode} className="h-[134px] w-[134px]" alt=""/>
            <div>
              <p className="text-[20px] font-extralight leading-[1.4] text-white">
                Formre information about thi issue and possible fixevisit
                https//www.windows.m/stopcode
              </p>
              <p className="text-[20px] font-extralight leading-[1.4] text-white">
                If you call a support persongive them this info <br/>
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