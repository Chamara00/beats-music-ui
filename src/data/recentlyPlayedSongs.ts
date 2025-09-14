import { StaticImageData } from 'next/image';
import maria from '@/assets/images/Maria.png'
import weekn from '@/assets/images/weekn.png'
import kanye from '@/assets/images/kanye.png'

export interface RecentlyPlayedSong {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  isPlaying: boolean;
  imageSrc?: StaticImageData;
}

export const recentlyPlayedSongs: RecentlyPlayedSong[] = [
  {
    id: 1,
    title: "All I Want For Christmas Is You",
    artist: "Maria Carey",
    album: "Album",
    duration: "3:54",
    isPlaying: false,
    imageSrc: maria
  },
  {
    id: 2,
    title: "One of the grils",
    artist: "The Weekn & JENNIE...",
    album: "-R-",
    duration: "3:54",
    isPlaying: true,
    imageSrc: weekn
  },
  {
    id: 3,
    title: "Donda",
    artist: "Kanye West",
    album: "Donda",
    duration: "3:54",
    isPlaying: false,
    imageSrc: kanye
  }
];
