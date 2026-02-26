import { AboutPage } from "../assets/assets";
import { useState } from "react";

const {
  authorProfile,
  authorDescription,
  getInTouchUrl,
  authorName,
  profileImgTagLine,
} = AboutPage;

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative mt-[.5rem] bedar-sc2:mt-2 animate-fadeInUp"
      id="About"
    >
      {/* Main container with asymmetric layout */}
      <div className="relative flex flex-col bedar-sc1:flex-row items-center gap-8 bedar-sc1:gap-0">
        
        {/* Profile Image Section */}
        <div className="relative w-full bedar-sc1:w-[45%] flex justify-center order-1 bedar-sc1:order-2">
          
          {/* Animated floating shapes behind profile */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {/* Rotating ring - sized to fit around circular profile */}
            <div className="absolute w-80 h-80 bedar-sc2:w-96 bedar-sc2:h-96 border-2 border-dashed border-[var(--accent)] opacity-30 rounded-full animate-spin-slow"></div>
            
            {/* Second rotating ring - opposite direction */}
            <div className="absolute w-72 h-72 bedar-sc2:w-[22rem] bedar-sc2:h-[22rem] border border-[var(--border-color)] opacity-20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '20s'}}></div>
            
            {/* Floating circles */}
            <div className="absolute -top-4 left-8 w-12 h-12 bg-[var(--accent)] opacity-30 rounded-full animate-float-1 blur-sm"></div>
            <div className="absolute top-1/4 -right-4 w-10 h-10 bg-[var(--border-color)] opacity-40 rounded-full animate-float-2 blur-sm"></div>
            <div className="absolute -bottom-2 right-1/4 w-8 h-8 bg-[var(--accent)] opacity-25 rounded-full animate-float-3 blur-sm"></div>
            
            {/* Floating squares */}
            <div className="absolute top-4 right-0 w-6 h-6 bg-[var(--border-color)] opacity-30 rotate-45 animate-float-2"></div>
            <div className="absolute bottom-8 -left-2 w-5 h-5 bg-[var(--accent)] opacity-35 rotate-12 animate-float-1"></div>
            
            {/* Gradient orbs */}
            <div className="absolute -top-8 right-4 w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-20 rounded-full animate-pulse-slow blur-xl"></div>
            <div className="absolute -bottom-6 -left-4 w-24 h-24 bg-gradient-to-tl from-[var(--border-color)] to-transparent opacity-15 rounded-full animate-pulse-slow blur-xl" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Profile image container - CIRCULAR */}
          <div className="relative z-10 group">
            {/* Circular border glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent)] to-[var(--border-color)] rounded-full opacity-40 blur group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <div className="relative w-64 h-64 bedar-sc2:w-80 bedar-sc2:h-80 rounded-full overflow-hidden border-4 border-[var(--border-color)] shadow-2xl">
              <img
                src={authorProfile}
                onLoad={() => setIsLoading(false)}
                alt={authorName}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  isLoading ? "skeleton" : ""
                }`}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Tagline on hover - adjusted for circular shape */}
              <div className="absolute bottom-4 left-0 right-0 px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-center backdrop-blur-sm bg-black/40 rounded-full py-2 px-3">
                  {profileImgTagLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full bedar-sc1:w-[55%] order-2 bedar-sc1:order-1 bedar-sc1:pr-8">
          <div className="bg-[var(--bg-card)] backdrop-blur-xl rounded-3xl p-8 bedar-sc2:p-10 border border-[var(--border-color)] shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Greeting with gradient */}
            <div className="mb-2">
              <span className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)]">
                Welcome to my portfolio
              </span>
            </div>
            
            {/* Name with large typography */}
            <h1 className="text-4xl bedar-sc2:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-[var(--accent)] relative">
                {authorName}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--accent)] opacity-50 rounded-full"></span>
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-relaxed text-[var(--text-on-card)] mb-8 opacity-90">
              {authorDescription}
            </p>
            
            {/* CTA Button with modern style */}
            <div className="flex flex-wrap gap-4">
              <a
                href={getInTouchUrl}
                className="group relative inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:-translate-y-1"
              >
                <span>Get In Touch</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#Projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-[var(--border-color)] text-[var(--text-on-card)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
