import React from 'react';
import Image from 'next/image';
import { NewRelease } from '@/data/newReleases';

interface NewReleaseCardProps {
  release: NewRelease;
}

const NewReleaseCard: React.FC<NewReleaseCardProps> = ({ release }) => {
  return (
    <div className="text-center">
      {/* Album Art */}
      <div className="w-24 h-24 rounded-full mb-3 mx-auto overflow-hidden">
        {release.imageSrc ? (
          <Image 
            src={release.imageSrc} 
            alt={`${release.title} album art`} 
            width={96} 
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs">
            Art
          </div>
        )}
      </div>
      
      {/* Song Info */}
      <h3 className="text-white text-[15px] font-semibold leading-tight line-clamp-2">{release.title}</h3>
      <p className="text-[#AFB6B2] text-[13px] truncate">{release.artist}</p>
    </div>
  );
};

export default NewReleaseCard;
