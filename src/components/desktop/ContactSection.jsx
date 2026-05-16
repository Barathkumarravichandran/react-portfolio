import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePortfolio } from '../../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection() {
  const { desktopData: data, submitContactForm } = usePortfolio();
  const container = useRef();
  const contactData = data.contact;

  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useGSAP(() => {
    gsap.from(".contact-info h2, .contact-info p, .contact-info a", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
    });
    gsap.from("form", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 50, opacity: 0, duration: 1, ease: "power3.out"
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
    <section ref={container} className="py-32 bg-surface-container-low overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="contact-info">
            <h2 className="font-headline font-black text-6xl md:text-8xl mb-8 tracking-tighter">
              {contactData.headlineStart} <span className="text-primary-container">{contactData.headlineHighlight}</span>{contactData.headlineEnd}
            </h2>
            <p className="text-xl text-on-surface-variant mb-12">{contactData.description}</p>
            <div className="space-y-6">
              {contactData.methods.map((method, idx) => (
                <a key={idx} className="flex items-center gap-6 group" href={method.link}>
                  <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center group-hover:bg-primary-container transition-colors">
                    <span className="material-symbols-outlined text-on-surface">{method.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-on-surface-variant">{method.label}</div>
                    <div className="text-xl font-headline font-bold">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="glass-panel p-10 md:p-12 rounded-xl border border-outline-variant/20">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                  <input 
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary-container/50 transition-all text-on-surface" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary-container/50 transition-all text-on-surface" 
                    placeholder="john@example.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary-container/50 transition-all text-on-surface" 
                  placeholder="Tell me about your project..." 
                  rows="4"
                ></textarea>
              </div>
              <button 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full ember-gradient py-5 rounded-xl text-on-primary-container font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(232,80,10,0.4)] transition-all disabled:opacity-70" 
                type="submit"
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : contactData.form?.button || 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
