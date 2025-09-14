import React from 'react';
import Image from 'next/image';
import pause from '@/assets/icons/pause_circle_filled_dark.svg';
import { recentlyPlayedSongs } from '@/data/recentlyPlayedSongs';
import SongRowCard from './SongRowCard';

const RecentlyPlayedSection = () => {

  return (
    <div className="bg-[#000000] rounded-[10px] p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[23px] font-semibold font-k2d">Recently Played</h2>
        <Image src={pause} alt="pause" width={31} height={31} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {recentlyPlayedSongs.map((song, index) => (
              <SongRowCard key={song.id} song={song} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentlyPlayedSection;
