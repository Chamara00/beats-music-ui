import React from "react";
import SideBar from "@/components/shared/SideBar";
import FeaturedSongSection from "@/components/song/FeaturedSongSection";
import RecentlyPlayedSection from "@/components/song/RecentlyPlayedSection";
import NewReleasesSection from "@/components/song/NewReleasesSection";
import Top100GlobalSongs from "@/components/song/Top100GlobalSongs";
import YourPlaylistsSection from "@/components/song/YourPlaylistsSection";

export default function Song() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Main Content Area */}
      <div className="flex-1 max-w-[1438px] mx-auto flex">
        {/* Left Content - 2/3 width */}
        <div className="flex-[2] p-6">
          <FeaturedSongSection />
          <RecentlyPlayedSection />
          <NewReleasesSection />
        </div>

        {/* Right Sidebar - 1/3 width */}
        <div className="flex-[1] p-6">
          <Top100GlobalSongs />
          <YourPlaylistsSection />
        </div>
      </div>

      {/* Navigation Sidebar */}
      <SideBar />
    </div>
  );
}
