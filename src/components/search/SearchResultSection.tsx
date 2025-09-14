import React from 'react';
import Image from 'next/image';
import { topSongs } from '@/data/topSongs';
import TopSongCard from '@/components/song/TopSongCard';
import searchIcon from '@/assets/icons/search.svg';

const SearchResultSection = () => {
  return (
    <div className="bg-[#000000] rounded-[10px] p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-[19px] font-bold">Search Result</h2>
        
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

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something ..."
            className="w-full h-12 px-4 pr-12 bg-[#181818] rounded-[100px] text-white placeholder:text-[#AFB6B2] focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <Image src={searchIcon} alt="search" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Search Results List */}
      <div className="space-y-3">
        {topSongs.slice(0, 6).map((song) => (
          <TopSongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultSection;
