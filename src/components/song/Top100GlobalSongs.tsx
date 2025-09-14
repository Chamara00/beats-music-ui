import React from 'react';
import { topSongs } from '@/data/topSongs';
import TopSongCard from './TopSongCard';

const Top100GlobalSongs = () => {

  return (
    <div className="bg-[#000000] rounded-[10px] p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-[19px] font-bold">Top 100 Global Songs</h2>
        
        {/* Tabs */}
        <div className="flex gap-4 bg-[#49504D] p-1 rounded-[2px]">
          <button className="bg-[#17DCF5] text-[#000000] px-3 h-7 rounded-[2px] text-[15px] font-medium">
            New
          </button>
          <button className="text-[#AFB6B2] px-3 h-7 rounded-[2px] text-[15px] font-medium hover:text-white">
            Global
          </button>
        </div>
      </div>

      {/* Songs List */}
      <div className="space-y-3">
        {topSongs.map((song) => (
          <TopSongCard key={song.id} song={song} />
        ))}
      </div>

      {/* Expand Button */}
      <div className="mt-4 text-center">
        <button className="text-[#AFB6B2] text-[15px] font-semibold hover:underline flex items-center gap-2 mx-auto">
          Expand
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Top100GlobalSongs;
