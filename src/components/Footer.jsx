import React from "react"
import unname  from '../assets/unnamed.jpg'
const Footer = () => {
  return (
    <footer className="fixed bottom-0  p-14 left-0 w-full bg-[#1072e1]   h-[100px] text-white py-3 z-50">
     <h2 className="mb-2.5 flex items-center justify-center gap-2.5 text-2xl font-light">
          <img src={unname} className="h-[34px] w-[34px]" alt=""/><span>Microsoft Security:</span>
          Contact Microsoft Support +1 (833) 638 3086(Toll-Free)
    </h2>
    <p className="text-[12px] font-thin leading-[16px] text-center">
          this app might put your PC at risk Windows Defender Scan has found
          potentially urwanted Adware on this device that can steal your
          passwords, onine identityfinancial informationpersonal fies,pictures
          or documents.
        </p>
    </footer>
  )
}

export default Footer