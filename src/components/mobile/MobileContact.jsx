import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MobileContact() {
  const { mobileData: data, submitContactForm } = usePortfolio();
  const container = useRef();
  const contactData = data.contact;

  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ fullname: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section ref={container} className="py-24 px-6 bg-surface" id="Contact">
      <div className="mb-12 section-title">
        <span className="font-headline text-primary font-bold text-sm uppercase tracking-widest block mb-2">{contactData.sectionTag}</span>
        <h2 className="font-headline text-3xl font-bold text-[#FDF6EF]">{contactData.title}</h2>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
          <input 
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" 
            placeholder="John Doe" 
            type="text" 
          />
        </div>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" 
            placeholder="john@example.com" 
            type="email" 
          />
        </div>
        <div>
          <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">Your Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40" 
            placeholder="Tell me about your project..." 
            rows="5"
          ></textarea>
        </div>
        <button 
          disabled={status === 'submitting' || status === 'success'}
          className="w-full ember-gradient text-on-primary-container font-black py-5 rounded-xl shadow-lg active:scale-[0.98] transition-all disabled:opacity-70" 
          type="submit"
        >
          {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
