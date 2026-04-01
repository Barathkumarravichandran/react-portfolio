import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/desktopData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperienceSection() {
  const container = useRef();
  const expData = data.experience;

  useGSAP(() => {
    gsap.utils.toArray(".timeline-group").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        x: -30, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-surface" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="text-primary-container font-headline font-bold text-sm uppercase tracking-[0.3em]">{expData.sectionTag}</span>
          <h2 className="font-headline font-black text-5xl md:text-6xl lg:text-7xl mt-4">{expData.title}</h2>
        </div>
        <div className="space-y-12">
          {expData.list.map((item, idx) => (
            <div key={idx} className="timeline-group relative grid md:grid-cols-12 gap-8 items-start p-10 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-500">
              <div className="md:col-span-3">
                <div className="text-primary font-headline font-black text-2xl">{item.company}</div>
                <div className="text-on-surface-variant font-medium mt-1">{item.period}</div>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-3xl font-headline font-bold">{item.role}</h3>
                  <span className="text-on-surface-variant">{item.subtitle}</span>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <div className="flex gap-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded bg-surface-variant text-xs font-bold text-on-surface tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
