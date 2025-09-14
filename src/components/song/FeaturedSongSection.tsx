import React from 'react';
import Image from 'next/image';
import playIcon from '@/assets/icons/Icon play music.svg';
import songbanner from '@/assets/images/Banner image.png'
import overlay from '@/assets/images/Rectangle 79.png'
import moreHorizontal from '@/assets/icons/more_horizontal.svg'
import unfill from '@/assets/icons/unfill.svg'
import repeat from '@/assets/icons/repeat.svg'
import skipNext from '@/assets/icons/skip_next.svg'
import pause from '@/assets/icons/pause_circle_filled.svg'
import skipPrevious from '@/assets/icons/skip_previous.svg'
import shuffle from '@/assets/icons/shuffle.svg'

const FeaturedSongSection = () => {
  return (
    <div className="relative rounded-lg p-6 mb-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={songbanner} 
          alt="song banner" 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={overlay} 
          alt="overlay" 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex gap-6 items-center justify-center min-h-[400px]">
        {/* Left side - Album Art and Song Info */}
        <div className="flex-shrink-0">
          <div className="text-[#FAFAFA] text-[13px] font-bold uppercase mb-6">FEATURED SONGS</div>
          <h1 className="text-white text-[30px] font-extrabold font-k2d">ONE OF THE GIRL</h1>
          <p className="text-white text-[20px] font-extrabold font-k2d mb-4">The Weekn & JENNIE & Lily Rose Depp</p>
          
          <div className="flex items-center gap-8 mb-4">
            <button className="flex items-center gap-2">
              <Image src={moreHorizontal} alt="Options" width={31} height={31} />
            </button>
            <Image src={unfill} alt="Add Playlist" width={31} height={31} />
            <button className="bg-[#17DCF5] text-[#0E0E0E] px-4 h-[38px] rounded-sm text-[15px] font-bold">
              Add Playlist
            </button>
          </div>
        </div>

        {/* Right side - Lyrics */}
        <div className="flex-1 my-10">
          <div className="space-y-2 mb-6 text-[20px] font-k2d text-center">
            <p>Lock me up and throw away the key</p>
            <p>I'm no force for the world to see</p>
            <p>Trade my whole life just to be</p>
            <p className="text-red-500  font-medium">He knows how to get the best out of me</p>
            <p>Tell nobody I control you</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <span className="text-[#AFB6B2] text-xs w-8">2:45</span>
              <div className="flex-1 bg-white rounded-full h-1">
                <div className="bg-[#EE4950] h-1 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-[#AFB6B2] text-xs w-8">3:27</span>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-6">
            <Image src={shuffle} alt="shuffle" width={29} height={29} />
            <Image src={skipPrevious} alt="skipPrevious" width={38} height={38} />
            <Image src={pause} alt="pause" width={48} height={48} />
            <Image src={skipNext} alt="skipNext" width={38} height={38} />
            <Image src={repeat} alt="repeat" width={29} height={29} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSongSection;
