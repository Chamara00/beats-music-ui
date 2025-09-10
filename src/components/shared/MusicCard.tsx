import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface MusicCardProps {
  title: string;
  artist: string;
  imageSrc: StaticImageData;
  isExplicit?: boolean;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  imageSrc,
  isExplicit = false
}) => {
  return (
    <div className="flex-shrink-0 w-[200px]">
      <div className="relative group cursor-pointer">
        {/* Album Cover */}
        <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
          <Image
            src={imageSrc}
            alt={`${title} by ${artist}`}
            width={200}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Title */}
        <div className="flex items-center gap-2 justify-between">
        <h3 className="text-[#E4E7E5] text-[15px] font-semibold truncate">
          {title}
        </h3>
        {isExplicit && (
            <div className="w-4 h-4 bg-[#AFB6B2] rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-[#49504D] text-[10px] font-semibold">E</span>
            </div>
          )}
        </div>
        
        {/* Artist and Explicit Badge */}
        
          <p className="text-[#AFB6B2] text-[13px] truncate flex-1">
            {artist}
          </p>
          
        
      </div>
    </div>
  );
};

export default MusicCard;
