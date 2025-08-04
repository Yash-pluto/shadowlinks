import React from "react";

const TopLinks = () => {
  return (
    <>
      <div className='flex w-full justify-between px-2 sm:px-4 items-center'>
        <button className='bg-hellishTopLink text-black px-4 py-2 rounded-lg hover:bg-white transition duration-200'>
          Link 1
        </button>
        <button className='bg-hellishTopLink text-black px-4 py-2 rounded-lg hover:bg-white transition duration-200'>
          Link 2
        </button>
      </div>
    </>
  );
};

export default TopLinks;
