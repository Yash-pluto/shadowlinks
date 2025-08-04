import React from "react";
import ShareIcon from "../assets/shareicon.svg";
import LogoIcon from "../assets/link.svg";

const TopLinks = () => {
  return (
    <>
      <div className='flex w-full justify-between px-6 sm:px-8 items-center'>
        <button
          onClick={() => window.location.reload()}
          className='w-[40px] h-[40px] rounded-full bg-hellishTopLink flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 hover:scale-105 transition duration-200'
        >
          <img src={LogoIcon} alt='Link Icon' className='w-[20px] h-[20px]' />
        </button>
        <button className='w-[40px] h-[40px] rounded-full bg-hellishTopLink flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 hover:scale-105 transition duration-200'>
          <img src={ShareIcon} alt='Share Icon' className='w-[20px] h-[20px]' />
        </button>
      </div>
    </>
  );
};

export default TopLinks;
