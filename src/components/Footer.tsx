import React from 'react';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Future <span className="text-primary">Papa</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Premium futures betting analysis for discerning sports investors. 
              Analytical excellence meets luxury service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#markets" className="text-muted-foreground hover:text-primary transition-colors">Futures Markets</a></li>
              <li><a href="#insights" className="text-muted-foreground hover:text-primary transition-colors">Daily Insights</a></li>
              <li><a href="#premium" className="text-muted-foreground hover:text-primary transition-colors">Premium Access</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contact@futurepapa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Future Papa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-xs text-muted-foreground">
            <p>
              Gambling involves risk. Please bet responsibly. Future Papa provides analysis and insights for educational purposes. 
              Past performance does not guarantee future results. Must be 21+ to participate in sports betting where legal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

