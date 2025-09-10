import React from 'react';
import logo from "@/assets/images/beats-music.png"
import afterpay from '@/assets/images/afterpay.png'
import zip from '@/assets/images/zip.png'
import Image from 'next/image';
import SearchBar from '@/components/shared/SearchBar';

const Header = () => {
  return (
    <div className="w-full h-[65px] max-w-[1438px] mx-auto mt-10">
        <div className='flex flex-row items-center justify-between w-full h-full'>
            <Image src={logo} alt="logo" />
            
            {/* Search Bar */}
            <SearchBar />

            <div className='flex flex-row items-center gap-8'>
                <Image src={afterpay} alt="afterpay" />
                <Image src={zip} alt="zip" />
            </div>
        </div>

    </div>
  );
};

export default Header;
