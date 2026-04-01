import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(useGSAP);

export default function MobileHeader() {
  const container = useRef();
  const headerData = data.header;

  useGSAP(() => {
    gsap.from(container.current, { y: -50, opacity: 0, duration: 0.8, ease: "power3.out" });
  }, { scope: container });

  return (
    <header ref={container} className="bg-[#19120e]/80 backdrop-blur-md fixed top-0 w-full z-50 no-line-rule tonal-shift-bottom-mobile">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
        <div className="text-xl font-black text-[#FDF6EF] tracking-tighter">{headerData.logo}</div>
        <button className="text-primary-container p-2 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>
    </header>
  );
}
