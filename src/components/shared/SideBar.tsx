import React from 'react';
import Image from 'next/image';
import home from '@/assets/icons/Vector.svg'
import discover from '@/assets/icons/discover.svg'
import musciLibrary from '@/assets/icons/music-library-2.svg'
import music from '@/assets/icons/music.svg'
import user from '@/assets/icons/user-octagon.svg'
import mic from '@/assets/icons/microphone.svg'
import radio from '@/assets/icons/radio.svg'

const SideBar = () => {
  const menuItems = [
    { icon: home, label: 'Home', id: 'home' },
    { icon: discover, label: 'Discover', id: 'discover' },
    { icon: musciLibrary, label: 'Music Library', id: 'library' },
    { icon: music, label: 'Music', id: 'music' },
    { icon: user, label: 'Profile', id: 'profile' },
    { icon: mic, label: 'Microphone', id: 'mic' },
    { icon: radio, label: 'Radio', id: 'radio' },
  ];

  return (
    <div className="w-[90px] h-full bg-black flex flex-col items-center py-8">
      <div className="flex flex-col space-y-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-12 h-12 flex items-center justify-center rounded-lg  transition-colors group"
            title={item.label}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={40}
              height={40}
              className="w-10 h-10 text-white opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

