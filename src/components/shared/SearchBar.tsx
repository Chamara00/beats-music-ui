import React from 'react';
import Image from 'next/image';
import search from '@/assets/icons/search.svg';

interface SearchBarProps {
  bgColor?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  bgColor = "#181818"
}) => {
  return (
    <div 
      className="flex-1 max-w-[686px] rounded-[100px] h-[64px] flex items-center justify-center -mt-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search something ..."
          className="w-full h-10 px-5 pr-12 text-[20px] font-normal text-white placeholder:text-white bg-transparent focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
          <Image src={search} alt="search" width={33} height={33}/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
