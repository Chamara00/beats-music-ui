import React from 'react';
import MusicCard from './MusicCard';
import { newReleases } from '@/data/musicReleases';
import newReleasesIcon from '@/assets/icons/Icon play music.svg'
import Image from 'next/image';

const NewReleasesSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1431px] mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-white text-[24px] font-bold">New Releases</h2>
        <Image src={newReleasesIcon} alt="newReleasesIcon" />
      </div>
      
      {/* Cards Container */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {newReleases.map((release) => (
          <MusicCard
            key={release.id}
            title={release.title}
            artist={release.artist}
            imageSrc={release.imageSrc}
            isExplicit={release.isExplicit}
          />
        ))}
      </div>
    </div>
  );
};

export default NewReleasesSection;
