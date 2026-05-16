import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ImpactBar() {
  const { desktopData: data } = usePortfolio();
  const container = useRef();
  const impactData = data.impact;

  useGSAP(() => {
    gsap.from(".impact-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.5)"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {impactData.map((item, idx) => (
            <div key={idx} className="impact-item">
              <div className="font-headline font-black text-5xl text-primary-container mb-2">{item.value}</div>
              <div className="font-body text-on-surface-variant text-sm uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
