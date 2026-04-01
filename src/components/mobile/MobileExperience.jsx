import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileExperience() {
  const container = useRef();
  const expData = data.experience;

  useGSAP(() => {
    gsap.from(".section-title", {
      scrollTrigger: { trigger: ".section-title", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.8, ease: "power2.out"
    });

    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        x: -20, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-surface-container-low" id="Experience">
      <div className="mb-12 section-title">
        <span className="font-headline text-primary font-bold text-sm uppercase tracking-widest block mb-2">{expData.sectionTag}</span>
        <h2 className="font-headline text-3xl font-bold text-[#FDF6EF]">{expData.title}</h2>
      </div>
      <div className="space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-[2px] before:bg-surface-variant">
        {expData.list.map((item, idx) => (
          <div key={idx} className="timeline-item pl-10 relative">
            <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-surface ${idx === 0 ? 'bg-primary-container shadow-[0_0_15px_rgba(232,80,10,0.5)]' : 'bg-surface-variant'}`}></div>
            <span className={`${idx === 0 ? 'text-primary' : 'text-on-surface-variant'} text-sm font-bold block mb-1`}>{item.period}</span>
            <h3 className="text-xl font-bold text-[#FDF6EF]">{item.role}</h3>
            <p className="text-on-surface-variant text-sm mb-4">{item.company}</p>
            <div className="bg-surface-container-high p-5 rounded-xl text-on-surface-variant text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
