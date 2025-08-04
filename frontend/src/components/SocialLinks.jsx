import React from "react";
import { socialLinks } from "../data/socialLinksData.js";
import ShareIcon from "../assets/SVGIcons/sharedots.svg";

const SocialLinks = () => {
  const handleShareClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("SHARE CLICKED:", link.name);
  };

  return (
    <div className='flex flex-col gap-3 py-4'>
      {socialLinks
        .filter((link) => link.show)
        .map((link) => (
          <div
            key={link.id}
            className='relative w-full group overflow-hidden rounded-xl'
          >
            <a
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] shine-hover relative z-10 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base bg-hellishLight text-hellishText border border-hellishBorder transition duration-200 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]'
            >
              {/* Icon + Label */}
              <div className='flex items-center justify-center gap-3'>
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  className='w-5 h-5 invert'
                />
                <span className='font-medium text-center'>{link.name}</span>
              </div>

              {/* Share Button */}
              <div
                onClick={(e) => handleShareClick(e, link)}
                className='absolute right-4 top-1/2 -translate-y-1/2 p-1 cursor-pointer z-20 hover:scale-110 transition-transform'
              >
                <img
                  src={ShareIcon}
                  alt='Share icon'
                  className='w-4 h-4 invert opacity-80'
                />
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default SocialLinks;
