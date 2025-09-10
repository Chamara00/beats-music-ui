import Image from "next/image";
import SideBar from "@/components/shared/SideBar";
import HeroText from "@/components/shared/HeroText";
import SearchBar from "@/components/shared/SearchBar";
import NewReleasesSection from "@/components/shared/NewReleasesSection";
import song from '@/assets/images/—Pngtree—valentine cardioid music player_5449847 1.png'

export default function Home() {
  return (
    <div className="flex h-[100%]">
      <div className="flex-1">
      <div className="max-w-[1438px] mx-auto pt-10">
        <div className="flex flex-row items-center justify-between gap-16">
          {/* Left side - Hero Content */}
          <div className="flex-1 max-w-[842px]">
            <HeroText />
            <div className="mt-20">
              <SearchBar bgColor="#000000" />
            </div>
          </div>

          {/* Right side - Login Card */}
          <div className="flex-shrink-0">
            <Image src={song} alt="song" />
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-[1438px] mx-auto">
        <NewReleasesSection />
      </div>
      </div>
      <SideBar />
    </div>
  );
}
