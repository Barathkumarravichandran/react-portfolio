import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '../../data/desktopData.json';

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const container = useRef();
  const heroData = data.hero;

  useGSAP(() => {
    gsap.from("h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.from(".flex-wrap", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4 });
    gsap.from("img", { opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 });
  }, { scope: container });

  return (
    <header ref={container} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-container blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary-container blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary-fixed font-headline font-bold text-xs uppercase tracking-[0.2em] mb-8">
              {heroData.badge}
            </span>
            <h1 className="font-headline font-black text-6xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8">
              {heroData.headline} <span className="text-primary-container">{heroData.headlineHighlight}</span>{heroData.headlineRest}
            </h1>
            <div className="flex flex-wrap gap-4 items-center font-headline font-bold text-[#e3bfb3] text-lg lg:text-xl tracking-tight mb-12">
              {heroData.skills.map((skill, i) => (
                <React.Fragment key={skill}>
                  <span>{skill}</span>
                  {i < heroData.skills.length - 1 && <span className="text-outline-variant opacity-30">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-outline-variant/20 p-3">
              <img className="w-full h-full object-cover rounded-xl grayscale-0" alt={heroData.imageAlt} src={heroData.image} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
