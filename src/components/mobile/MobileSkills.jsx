import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileSkills() {
  const container = useRef();
  const skillsData = data.skills;

  useGSAP(() => {
    gsap.from(".section-title", {
      scrollTrigger: { trigger: ".section-title", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.8, ease: "power2.out"
    });

    gsap.utils.toArray(".skill-card").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: { trigger: ".skills-grid", start: "top 85%" },
        y: 30, opacity: 0, scale: 0.95, duration: 0.6, delay: index * 0.1, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-surface" id="Skills">
      <div className="mb-12 section-title">
        <span className="font-headline text-primary font-bold text-sm uppercase tracking-widest block mb-2">{skillsData.sectionTag}</span>
        <h2 className="font-headline text-3xl font-bold text-[#FDF6EF]">{skillsData.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 skills-grid">
        {skillsData.categories.map((cat, idx) => (
          <div key={idx} className={`skill-card ${cat.bgClass} p-6 rounded-xl flex flex-col justify-${cat.description ? 'between' : 'between'} ${cat.colSpan === 2 ? 'col-span-2' : 'aspect-square'}`}>
            {cat.isWhiteText ? (
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white text-4xl">{cat.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                  <p className="text-white/80 text-xs">{cat.description}</p>
                </div>
              </div>
            ) : (
              <>
                <span className={`material-symbols-outlined ${cat.colSpan === 2 ? 'text-primary-container text-4xl mb-4' : 'text-primary text-3xl'}`}>
                  {cat.icon}
                </span>
                <div>
                  <h3 className="font-bold text-[#FDF6EF] text-sm md:text-lg">{cat.title}</h3>
                  {cat.description && <p className="text-on-surface-variant text-xs mt-2">{cat.description}</p>}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
