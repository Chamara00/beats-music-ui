import React from 'react';
import Image from 'next/image';
import home from '@/assets/icons/Vector.svg';
import disc from '@/assets/icons/music.svg';
import music from '@/assets/icons/music.svg';
import playlist from '@/assets/icons/music-library-2.svg';
import user from '@/assets/icons/user-octagon.svg';
import bell from '@/assets/icons/Vector.svg';
import settings from '@/assets/icons/Vector.svg';

const VerticalNavBar = () => {
  const navItems = [
    { icon: home, label: 'Home', id: 'home' },
    { icon: disc, label: 'Disc', id: 'disc' },
    { icon: music, label: 'Music', id: 'music' },
    { icon: playlist, label: 'Playlist', id: 'playlist' },
    { icon: user, label: 'Profile', id: 'profile' },
    { icon: bell, label: 'Notifications', id: 'notifications' },
    { icon: settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className="w-[60px] h-full bg-[#0C0D0C] flex flex-col items-center py-6">
      <div className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors group"
            title={item.label}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className="w-6 h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerticalNavBar;
