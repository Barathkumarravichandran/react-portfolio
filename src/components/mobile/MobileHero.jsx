import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(useGSAP);

export default function MobileHero() {
  const container = useRef();
  const heroData = data.hero;

  useGSAP(() => {
    gsap.from("h1", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.from("p", { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4 });
    gsap.from("button", { y: 20, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.6 });
    // gsap.from("img", { scale: 0.95, opacity: 0, duration: 1.5, ease: "power4.out", delay: 0.5 });
    gsap.from(".badge-animated", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.5)", delay: 1 });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[795px] pt-32 pb-16 px-6 flex flex-col justify-center overflow-hidden" id="About">
      <div className="absolute top-20 right-[-10%] w-64 h-64 rounded-full bg-primary-container/10 blur-[80px]"></div>
      <div className="relative z-10">
        <span className="font-headline text-primary font-bold tracking-wider text-sm uppercase mb-4 block">{heroData.badge}</span>
        <h1 className="font-headline text-5xl font-extrabold text-[#FDF6EF] leading-[1.1] tracking-tight mb-6">
          {heroData.headlineStart}<span className="text-primary-container">{heroData.headlineHighlight}</span>{heroData.headlineEnd}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
          {heroData.description}
        </p>
        <div className="flex flex-col gap-4">
          <button className="ember-gradient text-on-primary-container font-bold py-4 px-8 rounded-xl shadow-[0_15px_30px_rgba(232,80,10,0.2)] active:scale-95 transition-transform text-center">
            {heroData.primaryBtn}
          </button>
          <button className="bg-surface-container-high text-[#FDF6EF] font-bold py-4 px-8 rounded-xl active:scale-95 transition-transform text-center">
            {heroData.secondaryBtn}
          </button>
        </div>
      </div>
      <div className="mt-16 relative">
        <div className="aspect-square w-full rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(20,13,9,0.3)] bg-surface-container">
          <img alt={heroData.imageAlt} className="w-full h-full object-cover grayscale contrast-125" src={heroData.image} />
        </div>
        <div className="badge-animated absolute -bottom-6 -right-4 bg-surface-container-highest p-6 rounded-xl shadow-xl backdrop-blur-md">
          <div className="text-primary text-3xl font-black">{heroData.stats.value}</div>
          <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">{heroData.stats.label}</div>
        </div>
      </div>
    </section>
  );
}
