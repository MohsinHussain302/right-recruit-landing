import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-montserrat font-bold text-xl text-forest">
          Right Recruit
        </Link>
        <nav className="hidden md:flex gap-8 font-inter text-sm text-forest/70">
          <a href="#uk-recruitment" className="hover:text-forest">UK Recruitment</a>
          <a href="#dubai-recruitment" className="hover:text-forest">Dubai</a>
          <a href="#virtual-assistants" className="hover:text-forest">VAs</a>
          <a href="#process" className="hover:text-forest">Process</a>
        </nav>
      </div>
    </header>
  );
}
