import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/work')} className="text-sm underline">Back to Work</button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white pb-20">
      {/* Hero Media */}
      <div className="relative w-full h-[70vh] md:h-[85vh] bg-gray-900 overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <p className="text-sm font-mono border border-white/30 px-4 py-2 bg-black/40 backdrop-blur-md uppercase">
                {project.title} – Detail Image/Video – Description to be added
            </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <div className="bg-black border border-gray-800 p-8 md:p-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-gray-800 pb-12">
                <div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-none">
                    {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 font-light">{project.descriptor}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm font-mono text-gray-500 text-right">
                    <span>Client: {project.client}</span>
                    <span>Role: {project.role}</span>
                    <span>Year: {project.year}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
                        {project.description}
                    </p>
                </div>
                <div className="md:col-span-4 space-y-6">
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Credits</h3>
                        <ul className="space-y-2">
                            {project.credits.map((credit, index) => (
                                <li key={index} className="text-sm text-gray-300 border-l border-gray-800 pl-4">{credit}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 mt-20 flex justify-between items-center">
          <Link to="/work" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Grid
          </Link>
          
          {/* Simple Next Project Logic could go here */}
      </div>
    </article>
  );
};
