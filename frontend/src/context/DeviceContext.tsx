import React, { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface DeviceContextProps {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const DeviceContext = createContext<DeviceContextProps | null>(null);

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const device: DeviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return (
    <DeviceContext.Provider value={{ device, isMobile, isTablet, isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) throw new Error('useDevice must be used within a DeviceProvider');
  return context;
};
