import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/desktopData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SkillsSection() {
  const container = useRef();
  const skillsData = data.skills;

  useGSAP(() => {
    gsap.utils.toArray(".skill-card").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: { trigger: container.current, start: "top 80%" },
        y: 40, opacity: 0, scale: 0.95, duration: 0.6, delay: index * 0.15, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-surface-container-lowest" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline font-black text-5xl md:text-6xl lg:text-7xl mb-24 text-center">{skillsData.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} className="skill-card p-10 rounded-xl bg-surface-container border border-outline-variant/10">
              <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary-container text-3xl">{cat.icon}</span>
              </div>
              <h3 className="font-headline font-bold text-2xl mb-8">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.technologies.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
