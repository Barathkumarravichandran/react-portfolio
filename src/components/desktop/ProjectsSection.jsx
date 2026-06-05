import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VISIBLE_LIMIT = 6;

export default function ProjectsSection() {
  const { desktopData: data } = usePortfolio();
  const container = useRef();
  const projData = data.projects;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projData.list
    : projData.list.slice(0, VISIBLE_LIMIT);

  const hasMore = projData.list.length > VISIBLE_LIMIT && !showAll;

  useGSAP(() => {
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 82%' },
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: (i % 3) * 0.12,
        ease: 'power3.out',
      });
    });
  }, { scope: container, dependencies: [showAll] });

  return (
    <section ref={container} className="py-32 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-primary-container font-headline font-bold text-sm uppercase tracking-[0.3em]">
              {projData.sectionTag}
            </span>
            <h2 className="font-headline font-black text-5xl md:text-6xl lg:text-7xl mt-4">
              {projData.title}
            </h2>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-8xl text-outline-variant/10">
              auto_awesome
            </span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card group relative flex flex-col rounded-2xl overflow-hidden border border-outline-variant/10 bg-surface-container transition-all duration-500 hover:border-primary-container/30 hover:shadow-[0_8px_40px_rgba(250,92,27,0.12)] hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category badge overlaid on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#19120e]/70 backdrop-blur-sm text-primary-container font-headline font-bold text-xs uppercase tracking-widest border border-primary-container/20">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-headline font-black text-xl mb-3 text-on-surface leading-snug">
                  {proj.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                  {proj.description}
                </p>

                {/* Read More Button */}
                <a
                  href={proj.link}
                  className="inline-flex items-center gap-2 font-headline font-bold text-sm text-primary-container group/btn hover:text-on-surface transition-colors duration-200 self-start mt-auto"
                >
                  Read More
                  <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E8500A] to-[#C93D00] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* View More Button — only if more than 6 projects */}
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl border-2 border-outline-variant text-on-surface font-headline font-bold text-base tracking-wide uppercase hover:bg-surface-container-high hover:border-primary-container/40 transition-all duration-300 group"
            >
              View More Services
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-y-0.5">
                expand_more
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

