import React from 'react';
import data from '../../data/desktopData.json';

export default function DesktopFooter() {
  const footerData = data.footer;
  return (
    <footer className="w-full py-20 bg-[#140d09] dark:bg-[#140d09] tonal-shift-top">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
        <div className="text-lg font-bold text-[#FDF6EF]">{footerData.copyright.split(".")[0]}.</div>
        <div className="flex gap-10">
          {footerData.links.map(link => (
            <a key={link.label} className="font-['Manrope'] text-[#e3bfb3] text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-[#fa5c1b] underline decoration-[#E8500A] underline-offset-4 transition-all" href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-['Manrope'] text-[#e3bfb3] text-sm tracking-wide">{footerData.copyright}</div>
      </div>
    </footer>
  );
}
