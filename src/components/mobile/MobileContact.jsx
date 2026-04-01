import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import data from '../../data/mobileData.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileContact() {
  const container = useRef();
  const contactData = data.contact;

  useGSAP(() => {
    gsap.from(".section-title", {
      scrollTrigger: { trigger: ".section-title", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.8, ease: "power2.out"
    });

    gsap.from("form > div", {
      scrollTrigger: { trigger: "form", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out"
    });

    gsap.from("button", {
      scrollTrigger: { trigger: "form", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.6, delay: 0.45, ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-surface" id="Contact">
      <div className="mb-12 section-title">
        <span className="font-headline text-primary font-bold text-sm uppercase tracking-widest block mb-2">{contactData.sectionTag}</span>
        <h2 className="font-headline text-3xl font-bold text-[#FDF6EF]">{contactData.title}</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
          <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" placeholder="John Doe" type="text" />
        </div>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
          <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" placeholder="john@example.com" type="email" />
        </div>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Your Message</label>
          <textarea className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" placeholder="Tell me about your project..." rows="5"></textarea>
        </div>
        <button className="w-full ember-gradient text-on-primary-container font-black py-5 rounded-xl shadow-lg active:scale-[0.98] transition-all" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
