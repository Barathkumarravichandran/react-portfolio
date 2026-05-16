import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileAchievements() {
  const { mobileData: data } = usePortfolio();
  const container = useRef();
  const achievements = data.achievements.list;

  useGSAP(() => {
    gsap.utils.toArray(".achievement-card").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        x: -20, opacity: 0, duration: 0.8, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-surface-container-lowest">
      <div className="grid grid-cols-1 gap-6">
        {achievements.map((item, idx) => (
          <div key={idx} className="achievement-card p-8 bg-surface-container-high rounded-xl border-l-4 border-primary-container">
            <div className="text-primary-container font-black text-4xl mb-2">{item.value}</div>
            <h4 className="text-[#FDF6EF] font-bold text-lg">{item.title}</h4>
            <p className="text-on-surface-variant text-xs mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
