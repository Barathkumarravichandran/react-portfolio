import React from 'react';
import data from '../../data/mobileData.json';

export default function MobileFooter() {
  const footerData = data.footer;
  return (
    <footer className="bg-[#140d09] py-20 px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 text-center">
        <div className="text-2xl font-bold text-[#FDF6EF]">{footerData.logo}</div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerData.links.map(link => (
            <a key={link.label} className="text-[#e3bfb3] hover:text-[#fa5c1b] underline decoration-[#E8500A] underline-offset-4 transition-all text-sm tracking-wide" href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="pt-10 border-t border-outline-variant/10 w-full">
          <p className="text-[#e3bfb3] text-xs opacity-60">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
