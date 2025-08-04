import React from "react";
import TopLinks from "./TopLinks.jsx";
import Avatar from "./Avatar.jsx";
import YourHandle from "./YourHandle.jsx";

const MainCard = () => {
  return (
    <>
      <div className='bg-hellishLight rounded-2xl pt-6 w-full max-w-full sm:max-w-[580px] shadow-lg mx-auto'>
        <div className='flex flex-col items-center mb-6'>
          <TopLinks />
          <Avatar />
          <YourHandle />
        </div>
        <div
          className='flex flex-col gap-3 shadow-lg rounded-2xl'
          style={{
            paddingLeft: "var(--link-gap)",
            paddingRight: "var(--link-gap)",
          }}
        ></div>
      </div>
    </>
  );
};

export default MainCard;
