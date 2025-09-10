import taylor from '@/assets/images/recent played songs cover.png'
import weeknd from '@/assets/images/weeknd.png'
import doja from '@/assets/images/songs cover.png'
import soundwave from '@/assets/images/hit machine.png'
import { StaticImageData } from 'next/image';

export interface MusicRelease {
  id: string;
  title: string;
  artist: string;
  imageSrc: StaticImageData;
  isExplicit: boolean;
}

export const newReleases: MusicRelease[] = [
  {
    id: "1",
    title: "Red (Taylor's Version)",
    artist: "Taylor Swift",
    imageSrc: taylor, 
    isExplicit: false
  },
  {
    id: "2",
    title: "Need To Know",
    artist: "Doja Cat",
    imageSrc: doja, 
    isExplicit: true
  },
  {
    id: "3",
    title: "Save Your Tears",
    artist: "The Weeknd",
    imageSrc: weeknd, 
    isExplicit: false
  },
  {
    id: "4",
    title: "HIT MACHINE",
    artist: "Soundwave",
    imageSrc: soundwave, 
    isExplicit: true
  },
  {
    id: "5",
    title: "Red (Taylor's Version)",
    artist: "Taylor Swift",
    imageSrc: taylor, 
    isExplicit: false
  },
  {
    id: "6",
    title: "Need To Know",
    artist: "Doja Cat",
    imageSrc: doja, 
    isExplicit: true
  },
  {
    id: "7",
    title: "Die For You",
    artist: "The Weeknd",
    imageSrc: weeknd, 
    isExplicit: true
  }
];
