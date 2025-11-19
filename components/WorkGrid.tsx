import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const WorkGrid: React.FC = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-20 px-4 md:px-8 bg-black">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <Link 
              key={project.id} 
              to={`/work/${project.id}`}
              className="group relative block aspect-video md:aspect-[4/3] overflow-hidden bg-gray-900"
            >
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">{project.title}</h2>
                   <p className="text-sm md:text-base font-mono tracking-wide uppercase text-gray-300">{project.descriptor}</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs font-mono border border-white/50 px-2 py-1 bg-black/50 backdrop-blur-sm">PROJECT TITLE – VIDEO WILL BE ADDED</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
