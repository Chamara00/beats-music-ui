import Image from "next/image";
import LoginCard from "@/components/login/LoginCard";
import SideBar from "@/components/shared/SideBar";
import coachella from '@/assets/images/coachella 1.png'
import musicVibe from '@/assets/images/music-vibe.png'

export default function Home() {
  return (
    <div className="flex h-[100%]">
      <main className="flex-1 py-6">
        <div className="h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold font-k2d">Home</h1>
        </div>
      </main>
      <SideBar />
    </div>
  );
}
