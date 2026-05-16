import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext(null);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [desktopData, setDesktopData] = useState(null);
  const [mobileData, setMobileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch both datasets concurrently
        const [desktopRes, mobileRes] = await Promise.all([
          fetch('https://strapi-rngk.onrender.com/api/desktop'),
          fetch('https://strapi-rngk.onrender.com/api/mobile')
        ]);

        if (!desktopRes.ok) {
          const text = await desktopRes.text();
          throw new Error(`Desktop API failed: ${desktopRes.status} - ${text}`);
        }
        if (!mobileRes.ok) {
          const text = await mobileRes.text();
          throw new Error(`Mobile API failed: ${mobileRes.status} - ${text}`);
        }

        const desktopJson = await desktopRes.json();
        const mobileJson = await mobileRes.json();

        // The data is nested inside data.pagedata
        setDesktopData(desktopJson.data.pagedata);
        setMobileData(mobileJson.data.pagedata);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const submitContactForm = async (formData) => {
    const response = await fetch('https://strapi-rngk.onrender.com/api/contact-forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  };

  const value = {
    desktopData,
    mobileData,
    loading,
    error,
    submitContactForm
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
