import { useState, useEffect } from 'react';
import DesktopApp from './components/desktop/DesktopApp';
import MobileApp from './components/mobile/MobileApp';
import ScrollToTop from './components/ScrollToTop';
import { usePortfolio } from './context/PortfolioContext';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { loading, error } = usePortfolio();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#19120e]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-[#e3bfb3] border-b-[#e3bfb3] border-l-transparent border-r-transparent"></div>
          <span className="font-headline font-bold text-[#e3bfb3] tracking-widest uppercase text-sm">Loading Portfolio</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#19120e]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error loading data</h2>
          <p className="text-[#e3bfb3]">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <ScrollToTop />
    </>
  );
}

export default App;
