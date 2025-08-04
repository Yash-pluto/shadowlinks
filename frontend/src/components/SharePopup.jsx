import React, { useState } from "react";
import CopyIcon from "../assets/link.svg";
import TwitterIcon from "../assets/SVGIcons/x.svg";
import WhatsAppIcon from "../assets/SVGIcons/whatsapp.svg";
import LinkedInIcon from "../assets/SVGIcons/linkedin.svg";
import SnapchatIcon from "../assets/SVGIcons/snapchat.svg";
import MailIcon from "../assets/SVGIcons/email.svg";
import LinkIcon from "../assets/link.svg";
import Pfp from "../assets/ProfilePic.jpg";

const SharePopup = ({ onClose, onCopyLink }) => {
  const shareURL = "https://shadowlinks.vercel.app";
  const message = encodeURIComponent("Hey Pluto, I want a Shadowlink 💀");
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const shareButtons = [
    {
      name: "Copy",
      icon: CopyIcon,
      onClick: () => {
        onCopyLink?.();
        setShowCopiedAlert(true);
        setTimeout(() => setShowCopiedAlert(false), 1500);
      },
    },
    {
      name: "Tweet",
      icon: TwitterIcon,
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${shareURL}`,
          "_blank"
        ),
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      onClick: () =>
        window.open(`https://api.whatsapp.com/send?text=${shareURL}`, "_blank"),
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      onClick: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${shareURL}`,
          "_blank"
        ),
    },
    {
      name: "Snapchat",
      icon: SnapchatIcon,
      onClick: () => alert("Snapchat web sharing isn't supported directly 🥲"),
    },
    {
      name: "Email",
      icon: MailIcon,
      onClick: () =>
        window.open(
          `mailto:?subject=Check this out&body=${shareURL}`,
          "_blank"
        ),
    },
  ];

  return (
    <div className='fixed top-[6rem] max-h-full h-full items-stretch sm:items-center  sm:top-0 left-0 z-[999] w-full sm:h-full flex justify-center bg-black bg-opacity-40 backdrop-filter sm:px-4 '>
      {showCopiedAlert && (
        <div className='fixed bottom-8 -translate-x-1/2 z-50 bg-hellishDark text-white px-6 py-3 rounded-full shadow-lg animate-fadeInOut text-sm font-medium tracking-wide'>
          ✅ Link Copied to Clipboard
        </div>
      )}
      <div className=' max-h-full  h-auto items-stretch bg-white rounded-t-3xl sm:rounded-3xl max-w-full w-auto p-8 flex flex-col gap-4 relative shadow-xl sm:max-w-[540px]'>
        {/* Topbar */}
        <div className='relative flex items-center justify-center w-full pt-1 pb-5 sm:pt-4 sm:pb-8'>
          <span className='font-semibold text-[16px] text-black absolute left-1/2 transform -translate-x-1/2'>
            Share Shadowlink
          </span>
          <button
            onClick={onClose}
            className='top-0 rounded-full absolute right-0 text-2xl font-bold text-gray-900 hover:text-black hover:bg-gray-50 transition duration-200'
          >
            ×
          </button>
        </div>

        {/* Profile Preview Box */}
        <div className='bg-hellishLight rounded-[2.4rem] flex flex-col justify-center items-center gap-1 py-3 sm:py-10  sm:mx-[5px] w-full'>
          <img
            src={Pfp}
            alt='pfp'
            className='w-[96px] h-[96px] rounded-full object-cover'
          />
          <span className='font-bold text-hellishText text-[24px] pt-2 sm:pt-10'>
            yashpluto
          </span>
          <div className='flex items-center gap-1 text-[16px] text-hellishText opacity-80 pb-4 sm:pb-0'>
            <img src={LinkIcon} className='w-4 h-4 invert opacity-60' />
            <span>/yashpluto</span>
          </div>
        </div>

        {/* Scrollable Button Row */}
        <div className='flex overflow-x-auto gap-4 sm:pl-3 sm:pb-5 sm:py-8'>
          {shareButtons.map((btn, idx) => (
            <div key={idx} className='relative'>
              <button
                onClick={btn.onClick}
                className='flex-shrink-0 flex flex-col items-center justify-center w-[80px] h-[80px] bg-hellishLight rounded-3xl hover:bg-black hover:text-white transition duration-200'
              >
                <img
                  src={btn.icon}
                  alt={btn.name}
                  className='w-7 h-7 invert opacity-80 mb-3'
                />
                <span className='text-xs font-medium'>{btn.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-black opacity-20' />

        {/* Promo Text */}
        <div className='text-left text-black text-[16px] flex flex-col gap-1'>
          <span className='font-semibold'>Join yashpluto on Shadowlinks</span>
          <span className='opacity-70'>
            Get your own free Shadowlinks. The only link in bio you will ever
            need.
          </span>
        </div>

        {/* CTA Buttons */}
        <div className='flex justify-between gap-[0.5rem] sm:gap-2'>
          <button
            onClick={() => {
              window.open(
                `https://wa.me/919204592139?text=${message}`,
                "_blank"
              );
            }}
            className='w-full sm:p-2 sm:w-full justify-center text-center rounded-full bg-black text-white text-[16px] font-semibold'
          >
            Get yours made
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Yash-pluto", "_blank");
            }}
            className='w-full sm:p-2 text-[16px] font-semibold sm:w-full justify-center text-center rounded-full border text-black hover:bg-gray-300 transition'
          >
            More from yashpluto.
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
