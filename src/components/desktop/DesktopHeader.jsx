import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function DesktopHeader() {
  const { desktopData: data } = usePortfolio();
  const { logo, links, cta } = data.header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when the off-canvas menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#19120e]/80 backdrop-blur-md dark:bg-[#19120e]/80 no-line-rule tonal-shift-bottom">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6 relative z-[60]">
        <div className="text-xl font-black text-[#FDF6EF] tracking-tighter">{logo}</div>
        {/* Desktop Navigation (lg+) */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} className="font-['Epilogue'] font-bold tracking-tight text-sm uppercase text-[#e3bfb3] hover:text-[#FDF6EF] transition-colors duration-300" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <button className="ember-gradient text-[#
          ] px-8 py-3 rounded-xl font-headline font-bold text-sm tracking-widest uppercase scale-105 active:scale-95 transition-transform shadow-lg shadow-primary-container/20">
            {cta}
          </button>
        </div>

        {/* Tablet Controls (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-6">
          <button className="ember-gradient text-[#FDF6EF] px-6 py-2.5 rounded-xl font-headline font-bold text-xs tracking-widest uppercase scale-105 active:scale-95 transition-transform shadow-lg shadow-primary-container/20">
            {cta}
          </button>
          <button
            className="flex items-center text-[#FDF6EF] hover:text-[#e3bfb3] transition-colors relative z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Tablet Off-Canvas Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] transition-opacity md:flex lg:hidden h-screen"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Tablet Off-Canvas Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-[#19120e] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[50] border-l border-outline-variant/20 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} hidden md:flex lg:hidden flex-col pt-32 px-10 gap-8`}
      >
        {links.map((link) => (
          <a
            key={link}
            className="font-['Epilogue'] font-bold tracking-tight text-xl uppercase text-[#e3bfb3] hover:text-[#FDF6EF] transition-colors w-full border-b border-outline-variant/10 pb-4"
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
