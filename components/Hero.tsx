import React from 'react';
import { SITE_NAME } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Placeholder for Hero Video/Image */}
      <div className="absolute inset-0 opacity-40">
        {/* Using a placeholder image as per instructions */}
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono tracking-widest border border-white/30 px-4 py-2">HERO IMAGE/VIDEO – TO BE ADDED</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-[12vw] leading-none font-black tracking-tighter text-white mix-blend-overlay select-none">
          {SITE_NAME.split(' ')[0]}<br/>
          {SITE_NAME.split(' ')[1]}
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-pulse">
         <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll to Explore</span>
      </div>
    </section>
  );
};
