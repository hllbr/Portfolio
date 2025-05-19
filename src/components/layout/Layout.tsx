import type { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout; 