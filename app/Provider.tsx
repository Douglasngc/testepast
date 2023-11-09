// "use client"
// DashboardProvider.tsx
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";


interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Context = createContext<ProviderValues>({
  sidebarOpen: false,
  toggleSidebar: () => {},
});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [sidebarOpen, router]);

  return (
    <Context.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </Context.Provider>
  );
}

export function useDashboardContext() {
  return useContext(Context);
}