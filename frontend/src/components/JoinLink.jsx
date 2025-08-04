import React, { useEffect, useState, useRef } from "react";
import LogoIcon from "../assets/link.svg";
import axios from "axios";
import { io } from "socket.io-client";

const JoinMe = () => {
  const IP = "http://192.168.1.9:5000";
  const [starCount, setStarCount] = useState(null); // Start with null so we know it's not loaded
  const [isClicked, setIsClicked] = useState(false);
  const socketRef = useRef(null);

  // Fetch initial count from backend
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await axios.get(`${IP}/api/stars`);
        setStarCount(res.data.count);
      } catch (err) {
        console.error("❌ Error fetching stars:", err);
      }
    };

    fetchStars();
  }, []);

  // Socket live updates
  useEffect(() => {
    socketRef.current = io(`${IP}`);

    socketRef.current.on("starCount", (newCount) => {
      setStarCount(newCount);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleStarClick = async () => {
    if (isClicked) return;
    setIsClicked(true);

    try {
      await axios.post(`${IP}/api/stars`);
    } catch (err) {
      console.error("❌ Error increasing stars:", err);
    }
  };

  return (
    <div className='flex flex-col items-center mt-6 px-4 text-white pb-[24px] overflow-x-hidden'>
      <button className='flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full shadow-md hover:scale-105 transition-transform'>
        <img src={LogoIcon} alt='Join Logo' className='w-7 h-7' />
        <span className='font-semibold text-[16px]'>
          Join Yash Pluto on Shadowlinks
        </span>
      </button>

      <div className='mt-3 text-m text-neutral-400 flex gap-4 items-center'>
        <span className='hover:underline cursor-pointer'>· Resume</span>
        <span
          className='flex items-center gap-1 cursor-pointer hover:text-pink-300 transition'
          onClick={handleStarClick}
        >
          · 🩷 {starCount !== null ? starCount : "Loading..."}
        </span>
      </div>
    </div>
  );
};

export default JoinMe;
