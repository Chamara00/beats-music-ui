import React from 'react';
import Image from 'next/image';
import shuffle from '@/assets/icons/shuffle.svg';
import skipPrevious from '@/assets/icons/skip_previous.svg';
import pause from '@/assets/icons/pause_circle_filled.svg';
import skipNext from '@/assets/icons/skip_next.svg';
import repeat from '@/assets/icons/repeat.svg';
import unfill from '@/assets/icons/unfill.svg';
import moreHorizontal from '@/assets/icons/more_horizontal.svg';

const BottomPlayerBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0C0D0C] border-t border-[#2A2A2A] p-4">
      <div className="max-w-[1438px] mx-auto">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center gap-3">
            <span className="text-[#AFB6B2] text-xs w-8">2:45</span>
            <div className="flex-1 bg-white rounded-full h-1">
              <div className="bg-[#EE4950] h-1 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <span className="text-[#AFB6B2] text-xs w-8">3:27</span>
          </div>
        </div>

        {/* Song Info and Controls */}
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex-1">
            <h3 className="text-white text-sm font-medium">ONE OF THE GIRL</h3>
            <p className="text-[#AFB6B2] text-xs">The Weekn & JENNIE & Lily Rose Depp</p>
          </div>

          {/* Player Controls - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center gap-6">
              <Image src={shuffle} alt="shuffle" width={35} height={35} />
              <Image src={skipPrevious} alt="skipPrevious" width={45} height={45} />
              <Image src={pause} alt="pause" width={57} height={57} />
              <Image src={skipNext} alt="skipNext" width={45} height={45} />
              <Image src={repeat} alt="repeat" width={35} height={35} />
            </div>
          </div>

          {/* Additional Controls */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Image src={moreHorizontal} alt="options" width={20} height={20} />
            <Image src={unfill} alt="heart" width={20} height={20} />
            <button className="bg-[#17DCF5] text-[#000000] px-4 py-2 rounded-sm text-sm font-medium">
              Add Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayerBar;
