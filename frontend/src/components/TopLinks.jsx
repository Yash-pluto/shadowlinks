import React, { useState } from "react";
import ShareIcon from "../assets/shareicon.svg";
import LogoIcon from "../assets/link.svg";
import SharePopup from "./SharePopup"; // 🆕

const TopLinks = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = "https://shadowlinks.vercel.app";
      tempInput.setAttribute("readonly", "");
      tempInput.style.position = "absolute";
      tempInput.style.left = "-9999px";
      tempInput.style.opacity = "0";
      tempInput.style.pointerEvents = "none";
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setCopied(true);
    } catch (err) {
      console.error("Clipboard fallback failed:", err);
      alert("Clipboard fallback also failed 💀");
    }
    setTimeout(() => setCopied(false), 1500);
  };

  const handleLoveClick = () => {
    console.log("🩷 Loved +1 Star (implement this backend)");
  };

  return (
    <>
      <div className='flex w-full justify-between px-6 sm:px-8 items-center'>
        <button
          onClick={() => window.location.reload()}
          className='w-[40px] h-[40px] rounded-full bg-hellishTopLink flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 hover:scale-105 transition duration-200'
        >
          <img src={LogoIcon} alt='Link Icon' className='w-[20px] h-[20px]' />
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className='w-[40px] h-[40px] rounded-full bg-hellishTopLink flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 hover:scale-105 transition duration-200'
        >
          <img src={ShareIcon} alt='Share Icon' className='w-[20px] h-[20px]' />
        </button>
      </div>

      {showPopup && (
        <SharePopup
          onClose={() => setShowPopup(false)}
          onCopyLink={handleCopyLink}
          onLoveClick={handleLoveClick}
        />
      )}
    </>
  );
};

export default TopLinks;
