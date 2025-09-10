import React from 'react';

const HeroText: React.FC = () => {
  return (
    <div className="flex-1 max-w-[842px]">
      <h1 className="font-k2d font-bold text-[60px] leading-[100%] tracking-[0%] align-middle mb-8">
        THE MUTIL-UNIVERSAL
        <br />
        MUSIC PLAYLIST
      </h1>
      
      <p className="text-[25px] font-k2d leading-[100%] tracking-[0%] align-middle mb-12 max-w-[764px]">
        Discover the magic of music with us. Our platform is your gateway
        to a world of melodies, rhythms, and emotions. Whether you're a
        passionate listener, a budding artist, or an industry professional,
        we have something special for you.
      </p>
    </div>
  );
};

export default HeroText;
