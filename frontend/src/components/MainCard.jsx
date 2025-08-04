import React from "react";
import TopLinks from "./TopLinks.jsx";
import Avatar from "./Avatar.jsx";
import YourHandle from "./YourHandle.jsx";
import SocialLinks from "./SocialLinks.jsx";
import JoinLink from "./JoinLink.jsx";

const MainCard = () => {
  return (
    <>
      <div className='bg-hellishLight rounded-2xl pt-8 w-full max-w-full sm:max-w-[580px] shadow-lg mx-auto'>
        <div className='flex flex-col items-center mb-6'>
          <TopLinks />
          <Avatar />
          <YourHandle />
          <SocialLinks />
          <JoinLink />
        </div>
      </div>
    </>
  );
};

export default MainCard;
