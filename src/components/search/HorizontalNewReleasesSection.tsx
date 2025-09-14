import React from 'react';
import { newReleases } from '@/data/newReleases';
import NewReleaseCard from '@/components/song/NewReleaseCard';

const HorizontalNewReleasesSection = () => {
  return (
    <div className="bg-[#000000] rounded-[10px] p-6">

      <div className="space-y-4">
        {newReleases.map((release) => (
          <NewReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalNewReleasesSection;
