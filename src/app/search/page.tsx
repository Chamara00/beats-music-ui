import React from "react";
import Header from "@/components/layout/header";
import SearchResultSection from "@/components/search/SearchResultSection";
import Top100GlobalSongs from "@/components/song/Top100GlobalSongs";
import HorizontalNewReleasesSection from "@/components/search/HorizontalNewReleasesSection";
import VerticalNavBar from "@/components/shared/VerticalNavBar";
import BottomPlayerBar from "@/components/shared/BottomPlayerBar";

export default function Search() {
  return (
    <div className="min-h-screen bg-black pb-20">
      
      {/* Main Content Area */}
      <div className="max-w-[1438px] mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left Column - Search Results */}
          <div className="flex-[2]">
            <SearchResultSection />
          </div>

          {/* Middle Column - Top 100 Global Songs */}
          <div className="flex-[1]">
            <Top100GlobalSongs />
          </div>

          {/* Right Column - New Releases */}
          <div className="w-[138px]">
            <HorizontalNewReleasesSection />
          </div>
        </div>
      </div>

      {/* Vertical Navigation Sidebar */}
      <div className="fixed right-0 top-0 h-full z-10">
        <VerticalNavBar />
      </div>

      {/* Bottom Player Bar */}
      <BottomPlayerBar />
    </div>
  );
}
