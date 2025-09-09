import Image from "next/image";
import LoginCard from "@/components/login/LoginCard";
import coachella from '@/assets/images/coachella 1.png'
import musicVibe from '@/assets/images/music-vibe.png'

export default function Login() {
  return (
    <div className="">
      <div className="max-w-[1438px] mx-auto py-10">
        <div className="flex flex-row items-end justify-between gap-16">
          {/* Left side - Hero Content */}
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

            {/* Coachella Card Section */}
            <div className="flex items-center gap-8">
              <div className="w-[434px] h-[373px] rounded-2xl overflow-hidden flex-shrink-0">
                <Image 
                  src={coachella} 
                  alt="Coachella Festival" 
                  width={434} 
                  height={373}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col items-center flex-1">
                <p className="text-[20px] font-k2d mt-2 mb-6">BUY TICKET</p>
                
                <h2 className="text-[#809DC1] text-[25px] font-bold font-k2d mb-4 uppercase text-center">
                  TAKE YOUR TICKET FOR A WONDERFULL EXPERIENCE
                </h2>
                
                <Image src={musicVibe} alt="music-vibe" />
                
                <p className="text-[20px] font-k2d text-[#AF96BC] text-center mt-2">
                  JUST PAY FOR THE BEST 2024 COACHELLA PERFORMANCES
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Login Card */}
          <div className="flex-shrink-0">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}
