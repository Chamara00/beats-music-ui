import React from 'react';
import Image from 'next/image';
import { TopSong } from '@/data/topSongs';
import unfill from '@/assets/icons/unfill.svg';
import options from '@/assets/icons/more_horizontal.svg';

interface TopSongCardProps {
  song: TopSong;
}

const TopSongCard: React.FC<TopSongCardProps> = ({ song }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#1A1A1A] transition-colors">
      {/* Rank */}
      <div className="w-3 text-[#AFB6B2] text-[15px] font-medium">
        {song.rank}
      </div>

      {/* Album Art */}
      <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden">
        {song.imageSrc ? (
          <Image 
            src={song.imageSrc} 
            alt={`${song.title} album art`} 
            width={48} 
            height={48}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs">
            Art
          </div>
        )}
      </div>

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[#FAFAFA] text-[15px] font-semibold truncate">{song.title}</h3>
        <p className="text-[#AFB6B2] text-[15px] font-normal truncate">{song.artist}</p>
      </div>

      {/* Duration */}
      <div className="text-[#AFB6B2] text-xs">
        {song.duration}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Image src={unfill} alt="heart" width={23} height={23} />
        <Image src={options} alt="options" width={23} height={23} />
      </div>
    </div>
  );
};

export default TopSongCard;
