import React from "react";
import TopLinks from "./TopLinks.jsx";
import Avatar from "./Avatar.jsx";
import YourHandle from "./YourHandle.jsx";
import SocialLinks from "./SocialLinks.jsx";
import JoinMe from "./JoinMe.jsx";

const MainCard = () => {
  return (
    <>
      <div className='bg-hellishLight rounded-2xl pt-8 w-full max-w-full sm:max-w-[580px] shadow-lg mx-auto h-full'>
        <div className='flex flex-col items-center mb-6'>
          <TopLinks />
          <Avatar />
          <YourHandle />
          <SocialLinks />
          <JoinMe />
        </div>
      </div>
    </>
  );
};

export default MainCard;
