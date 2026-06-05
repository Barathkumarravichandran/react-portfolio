import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileProjects() {
  const { mobileData: data } = usePortfolio();
  const container = useRef();
  const projData = data.projects;

  useGSAP(() => {
    gsap.from(".section-title", {
      scrollTrigger: { trigger: ".section-title", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.8, ease: "power2.out"
    });

    gsap.utils.toArray(".project-card").forEach((project) => {
      gsap.from(project, {
        scrollTrigger: { trigger: project, start: "top 85%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-[#FDF6EF]" id="Services">
      <div className="mb-12 section-title">
        <span className="font-headline text-[#E8500A] font-bold text-sm uppercase tracking-widest block mb-2">{projData.sectionTag}</span>
        <h2 className="font-headline text-3xl font-bold text-[#19120e]">{projData.title}</h2>
      </div>
      <div className="space-y-16">
        {projData.list.map((proj, idx) => (
          <div key={idx} className="project-card group">
            <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3] shadow-[0_20px_40px_rgba(20,13,9,0.1)]">
              <img alt={proj.imageAlt} className="w-full h-full object-cover" src={proj.image} />
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                {proj.tags.map((tag, i) => (
                  <span key={tag} className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${i === 0 ? 'bg-[#19120e] text-[#FDF6EF]' : 'bg-primary-container text-white'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-black text-[#19120e] leading-tight">{proj.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{proj.description}</p>
              <button className="flex items-center gap-2 text-[#E8500A] font-bold text-sm group-hover:gap-4 transition-all">
                View Case Study <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
