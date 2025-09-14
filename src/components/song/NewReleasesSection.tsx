import React from 'react';
import { newReleases } from '@/data/newReleases';
import NewReleaseCard from './NewReleaseCard';

const NewReleasesSection = () => {

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-[23px] font-semibold font-k2d">US/UK Song New Releases</h2>
        <button className=" text-[15px] font-medium hover:underline">See more</button>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {newReleases.map((release) => (
          <NewReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
};

export default NewReleasesSection;
