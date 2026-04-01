import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-container text-on-primary-container shadow-lg hover:shadow-primary-container/40 transition-all duration-300 scale-100 hover:scale-110 active:scale-95 flex items-center justify-center glass-panel"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}
    </>
  );
}
