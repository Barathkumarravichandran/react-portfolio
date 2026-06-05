import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function DesktopFooter() {
  const { desktopData: data } = usePortfolio();
  const footerData = data.footer;
  return (
    <footer className="w-full py-8 bg-[#140d09] dark:bg-[#140d09] tonal-shift-top">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="font-['Manrope'] text-[#e3bfb3] text-sm tracking-wide">{footerData.copyright}</div>
      </div>
    </footer>
  );
}

