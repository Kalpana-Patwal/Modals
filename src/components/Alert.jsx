import React from "react";

const Alert = () => {
  return (
  
      <div className="bg-[#1072e1] font-geologica fixed h-[680px] w-[500px]   top-[350px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 shadow-lg max-w-lg p-6 py-7  text-white">
      <p className="mb-4">
            Your computer has alerted us that it has been infected with a Trojan
            Spyware. The following data has been compromised:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Email Credentials</li>
            <li>Banking Passwords</li>
            <li>Facebook Login</li>
            <li>Pictures &amp; Documents</li>
          </ul>
          <p className="mb-4">
            Windows-Defender Scan has found potentially unwanted Adware on this
            device that can steal your passwords, online identity, financial
            information, personal files, pictures or documents.
          </p>
          <p className="mb-10">
            You must contact us immediately so that our engineers can walk you
            through the removal process over the phone.
          </p>
          <p className="mb-8">
            Call Microsoft Support immediately to report this threat, prevent
            identity theft and unlock access to this device.
          </p>
          <p className="mb-4 text-sm">
            lead to a suspension of your Windows Registration.
          </p>
          <p className="mb-6 text-center text-md">
            Call Microsoft Support :
            <a href="#" className="font-bold">+1 (833) 638 3086 (Tool-Free)</a>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-transparent text-white px-4 py-1 text-md border border-white border-solid rounded hover:bg-transparent">
              Ignore
            </button>
            <button className="bg-transparent text-white px-4 py-1 text-md border border-white border-solid rounded hover:bg-transparent">
              Run Safe
            </button>
          </div>
        </div>
  
  );
};

export default Alert;