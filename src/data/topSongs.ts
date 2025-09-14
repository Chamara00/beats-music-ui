import { StaticImageData } from 'next/image';
import bieber from '@/assets/images//bieber.png'
import adele from '@/assets/images/adele.png'
import moonlight from '@/assets/images/moonlight.png'
import sickoMode from '@/assets/images/sicko mode.png'
import getLost from '@/assets/images/get lost.png'
import feelGood from '@/assets/images/feel good.png'
import midsummerMadness from '@/assets/images/midsummer.png'

export interface TopSong {
  id: number;
  rank: number;
  title: string;
  artist: string;
  duration: string;
  imageSrc?: StaticImageData;
}

export const topSongs: TopSong[] = [
  { id: 1, rank: 1, title: "Mistletoe", artist: "Justin Bieber", duration: "3:54", imageSrc: bieber },
  { id: 2, rank: 2, title: "Easy On Me", artist: "Adele", duration: "3:54", imageSrc: adele },
  { id: 3, rank: 3, title: "Moonlight", artist: "Public Library Commu...", duration: "3:54", imageSrc: moonlight },
  { id: 4, rank: 4, title: "SICKO MODE", artist: "Travis Scott ft. Drake", duration: "3:54", imageSrc: sickoMode },
  { id: 5, rank: 5, title: "Get Lost", artist: "Vincent Fable", duration: "3:54", imageSrc: getLost },
  { id: 6, rank: 6, title: "I Feel Good", artist: "Pink Sweat$", duration: "3:54", imageSrc: feelGood },
  { id: 7, rank: 7, title: "Midsummer Madness", artist: "88rising", duration: "3:54", imageSrc: midsummerMadness }
];
