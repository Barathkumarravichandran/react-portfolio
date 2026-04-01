import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(useGSAP);

export default function BottomNav() {
  const container = useRef();
  const navData = data.bottomNav;

  useGSAP(() => {
    gsap.from(container.current, { y: 50, opacity: 0, duration: 1, delay: 1.5, ease: "back.out(1.2)" });
  }, { scope: container });

  return (
    <nav ref={container} className="fixed bottom-6 left-6 right-6 h-16 bg-surface-container-high/90 backdrop-blur-xl rounded-full z-50 flex items-center justify-around px-4 shadow-[0_20px_40px_rgba(20,13,9,0.5)] md:hidden">
      {navData.map((item, idx) => (
        <a key={idx} className={`flex flex-col items-center ${idx === 0 ? 'text-primary-container' : 'text-on-surface-variant'}`} href={item.anchor}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: idx === 0 ? "'FILL' 1" : undefined }}>{item.icon}</span>
          <span className="text-[10px] font-bold uppercase mt-1">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
