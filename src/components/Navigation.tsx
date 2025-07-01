import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Futures Markets', href: '#markets' },
    { name: 'Daily Insights', href: '#insights' },
    { name: 'Premium Access', href: '#premium' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors">
              Future <span className="text-primary">Papa</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 fade-in fade-in-delay-${index + 1}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold btn-hover glow">
              Get the Edge
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2 scale-hover"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border slide-in-left">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors fade-in fade-in-delay-${index + 1}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold btn-hover">
              Get the Edge
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;