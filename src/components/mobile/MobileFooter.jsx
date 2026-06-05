import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function MobileFooter() {
  const { mobileData: data } = usePortfolio();
  const footerData = data.footer;
  return (
    <footer className="bg-[#140d09] pt-16 pb-36 px-8 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#e3bfb3] text-sm font-['Manrope'] tracking-wide opacity-70">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}

