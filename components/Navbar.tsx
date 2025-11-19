import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
      <div className="pointer-events-auto">
        <Link to="/" className="uppercase font-bold tracking-tighter text-lg md:text-xl hover:opacity-70 transition-opacity">
          {SITE_NAME}
        </Link>
      </div>

      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        <Link 
          to="/work" 
          className={`uppercase font-medium text-sm tracking-wide hover:opacity-50 transition-opacity ${location.pathname.includes('/work') ? 'opacity-50' : 'opacity-100'}`}
        >
          Work
        </Link>
        <Link 
          to="/contact" 
          className={`uppercase font-medium text-sm tracking-wide hover:opacity-50 transition-opacity ${location.pathname === '/contact' ? 'opacity-50' : 'opacity-100'}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
