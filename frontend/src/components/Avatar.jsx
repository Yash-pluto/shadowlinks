import React from "react";
import ProfilePic from "../assets/temp.jpg";
import FireDecoration from "../assets/AVdecoration/fire.png";

const Avatar = () => {
  return (
    <>
      <div className='relative w-[96px] h-[96px] mx-auto mb-4'>
        {/* Avatar Decoration Below: */}
        <img
          src={FireDecoration}
          alt='Decoration'
          className='absolute inset-0 w-full h-full z-10 pointer-events-none transform scale-[1.15]'
        />
        {/* Your Profile Pic */}
        <img
          src={ProfilePic}
          className='max-w-[96px] max-h-[96px] w-full h-auto rounded-full mx-auto mb-4'
        />
      </div>
    </>
  );
};

export default Avatar;
