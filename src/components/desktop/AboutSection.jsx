import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/desktopData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  const container = useRef();
  const aboutData = data.about;

  useGSAP(() => {
    gsap.from("h2, p.desc, .skill-group", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
    });
    gsap.from(".group", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      scale: 0.9, opacity: 0, duration: 1, ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#FDF6EF] text-[#19120e]" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline font-black text-5xl lg:text-6xl mb-10 tracking-tight leading-none">
              {aboutData.titleStart} <span className="text-primary-container">{aboutData.titleHighlight}</span> {aboutData.titleEnd}
            </h2>
            <p className="desc text-xl font-body leading-relaxed text-[#4A2C1A] mb-12">
              {aboutData.description}
            </p>
            <div className="space-y-8">
              {aboutData.skills.map((skill, idx) => (
                <div key={idx} className="skill-group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full ember-gradient flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">{skill.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">{skill.title}</h4>
                    <p className="text-[#9E6040]">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#E8500A] opacity-10 rounded-xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img className="relative rounded-xl w-full object-cover aspect-square shadow-2xl" alt={aboutData.imageAlt} src={aboutData.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
