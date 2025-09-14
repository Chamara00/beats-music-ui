import React from 'react';
import Image from 'next/image';
import { RecentlyPlayedSong } from '@/data/recentlyPlayedSongs';
import unfill from '@/assets/icons/unfill.svg';
import fill from '@/assets/icons/fill.svg';
import menu from '@/assets/icons/menu_duo.svg';
import menuBlue from '@/assets/icons/menu_duo_blue.svg';
import pauseBlue from '@/assets/icons/pause_circle_outline.svg';

interface SongRowCardProps {
  song: RecentlyPlayedSong;
  index: number;
}

const SongRowCard: React.FC<SongRowCardProps> = ({ song, index }) => {
  return (
    <tr className="hover:bg-[#1A1A1A] transition-colors">
      <td className="py-3">
        {song.isPlaying ? (
          <Image src={pauseBlue} alt="pause" width={20} height={20} />
        ) : (
          <span className="text-[#AFB6B2] text-sm">{index + 1}</span>
        )}
      </td>
      <td className="py-3 w-12 px-3">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
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
      </td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <span className={`text-[15px] font-semibold ${song.isPlaying ? 'text-[#00D4FF]' : 'text-[#7A8580]'}`}>
            {song.title}
          </span>
        </div>
      </td>
      <td className={`py-3 text-[15px] font-normal ${song.isPlaying ? 'text-[#00D4FF]' : 'text-[#7A8580]'}`}>{song.artist}</td>
      <td className={`py-3 text-[15px] font-normal ${song.isPlaying ? 'text-[#00D4FF]' : 'text-[#7A8580]'}`}>{song.album}</td>
      <td className={`py-3 text-[15px] font-normal pl-10 ${song.isPlaying ? 'text-[#00D4FF]' : 'text-[#7A8580]'}`}>{song.duration}</td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <button className="text-[#AFB6B2] hover:text-white">
            <Image src={song.isPlaying ? fill : unfill} alt="heart" width={23} height={23} />
          </button>
          <Image src={song.isPlaying ? menuBlue : menu} alt="menu" width={23} height={23} />
        </div>
      </td>
    </tr>
  );
};

export default SongRowCard;
