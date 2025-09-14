import React from 'react';
import home from '@/assets/icons/home_unfill.svg'
import plus from '@/assets/icons/plus_circle_outline.svg'
import Image from 'next/image';
import rhythm from '@/assets/icons/rhythm.svg'

const YourPlaylistsSection = () => {
  const playlists = [
    { id: 1, name: "For workplace", isSelected: true },
    { id: 2, name: "Rich Brian's collections", isSelected: false },
    { id: 3, name: "deep focus", isSelected: false }
  ];

  return (
    <div className="bg-[#0C0D0C] rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Image src={home} alt="home" width={23} height={23} />
          <h2 className="text-white text-[19px] font-medium">Your PlayLists</h2>
        </div>
        <Image src={plus} alt="plus" width={31} height={31} />
      </div>

      <div className="space-y-3">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="flex items-center gap-3 py-2 rounded-lg hover:bg-[#1A1A1A] transition-colors cursor-pointer">
            {/* Rhythm Icon - only show for selected playlist */}
            
            
            {/* Playlist Name */}
            <div >
              <h3 className={`text-[17px] font-medium truncate ${playlist.isSelected ? 'text-[#F3777D]' : 'text-[#959D99]'}`}>
                {playlist.name}
              </h3>
            </div>
            {playlist.isSelected && (
              <Image src={rhythm} alt="rhythm" width={20} height={20} className='mb-1' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPlaylistsSection;
