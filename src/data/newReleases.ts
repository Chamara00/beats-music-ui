import { StaticImageData } from 'next/image';
import wayBackHome from '@/assets/images/Way Back.png'
import cleanBandit from '@/assets/images/Clean Bandit.png'
import kanyeWest from '@/assets/images/Kanye West.png'
import Zedd from '@/assets/images/Zedd.png'
import gaylor from '@/assets/images/Gayle.png'
import edSheeran from '@/assets/images/Ed Sheeran.png'
import pinkSweat from '@/assets/images/Pink Sweat.png'

export interface NewRelease {
  id: number;
  title: string;
  artist: string;
  imageSrc?: StaticImageData;
}

export const newReleases: NewRelease[] = [
  { id: 1, title: "Way Back Home", artist: "SHAUN", imageSrc: wayBackHome },
  { id: 2, title: "Rockabye", artist: "The Clean Bandit", imageSrc: cleanBandit },
  { id: 3, title: "Graduation", artist: "Kanye West", imageSrc: kanyeWest },
  { id: 4, title: "Stay", artist: "Zedd", imageSrc: Zedd },
  { id: 5, title: "abcdefu", artist: "GAYLE", imageSrc: gaylor },
  { id: 6, title: "Bad Habits", artist: "Ed Sheeran", imageSrc: edSheeran },
  { id: 7, title: "At My Worst", artist: "Pink Sweat$", imageSrc: pinkSweat }
];
