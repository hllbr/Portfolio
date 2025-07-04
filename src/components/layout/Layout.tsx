import React from 'react';
import Navigation from '@/components/layout/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout wrapper that includes the navigation and page container.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout; 