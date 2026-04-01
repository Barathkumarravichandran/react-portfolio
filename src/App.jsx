import { useState, useEffect } from 'react';
import DesktopApp from './components/desktop/DesktopApp';
import MobileApp from './components/mobile/MobileApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <ScrollToTop />
    </>
  );
}

export default App;
