import React, { useState } from "react";
import { socialLinks } from "../data/socialLinksData.js";
import ShareIcon from "../assets/SVGIcons/sharedots.svg";
import SharePopup from "../components/SharePopup.jsx";

const SocialLinks = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleShareClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedLink(link);
  };

  const closePopup = () => setSelectedLink(null);

  return (
    <>
      <div className='w-full max-w-[580px] flex flex-col gap-3 py-4 px-4 sm:px-[28px] mx-auto'>
        {socialLinks
          .filter((link) => link.show)
          .map((link) => (
            <div key={link.id} className='relative w-full group rounded-xl'>
              <a
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='shine-hover relative z-10 flex items-center justify-center w-full max-w-[95%] sm:max-w-[480px] mx-auto rounded-xl text-base bg-hellishLight text-hellishText border border-hellishBorder transition-all duration-300 ease-in-out'
              >
                {/* Icon + Label */}
                <div className='flex items-center justify-center gap-3'>
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className='w-7 h-7 invert'
                  />
                  <span className='font-medium text-[16px]'>{link.name}</span>
                </div>

                {/* Share Button */}
                <div
                  onClick={(e) => handleShareClick(e, link)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer z-20 hover:scale-110 transition-transform'
                >
                  <img
                    src={ShareIcon}
                    alt='Share icon'
                    className='w-7 h-7 invert opacity-80'
                  />
                </div>
              </a>
            </div>
          ))}
      </div>

      {selectedLink && (
        <SharePopup
          onClose={closePopup}
          onCopyLink={() => navigator.clipboard.writeText(selectedLink.url)}
          minimal
          link={selectedLink}
        />
      )}
    </>
  );
};

export default SocialLinks;
