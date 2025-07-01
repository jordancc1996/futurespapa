import React, { useState } from 'react';
import Layout from './components/Layout';
import HowItWorks from './components/HowItWorks';
import FeaturedFutures from './components/FeaturedFutures';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Markets from './components/Markets';
import ContactForm from './components/ContactForm';
import ROICalculator from './components/ROICalculator';
import PremiumPaywall from './components/PremiumPaywall';
import { Button } from './components/ui/button';
import { TrendingUp, Target, Users } from 'lucide-react';
import './App.css';

function App() {
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallFeature, setPaywallFeature] = useState('');

  const openPaywall = (feature: string) => {
    setPaywallFeature(feature);
    setPaywallOpen(true);
  };

  const closePaywall = () => {
    setPaywallOpen(false);
    setPaywallFeature('');
  };
  return (
    <div className="dark">
      <Layout>
        {/* Hero Section */}
        <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Quiet Guidance for the 
              <span className="text-primary block">Next Generation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Premium futures betting analysis for discerning sports investors. 
              Analytical excellence meets luxury service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 luxury-shadow">
                Get the Edge
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                See Futures Now
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Featured Futures Section */}
        <FeaturedFutures />

        {/* Stats Section */}
        <Stats />

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  About Future Papa
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We are a private office for discerning sports investors. Built on discretion and analytical excellence, 
                  we serve a limited number of clients with premium futures betting analysis.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our proprietary models analyze thousands of data points across NFL, NBA, and MLB to identify 
                  high-value futures opportunities. Every pick is delivered with complete transparency, 
                  detailed reasoning, and historical performance tracking.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Proprietary analytical models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Complete ROI transparency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Exclusive client service</span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-6">
                  Our Expertise
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-card-foreground">NFL Futures</span>
                      <span className="text-primary">Expert</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-card-foreground">NBA Futures</span>
                      <span className="text-primary">Expert</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-card-foreground">MLB Futures</span>
                      <span className="text-primary">Expert</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our exclusive clientele and experience the difference that professional-grade 
              futures analysis can make for your sports investing portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg">
                Get Premium Access
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <Markets />

        {/* Daily Insights Section */}
        <section id="insights" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-6">
                Daily Insights
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert analysis and market intelligence delivered daily to keep you ahead of the curve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-primary text-sm font-semibold mb-2">TODAY'S INSIGHT</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  NFL Playoff Picture Shifts
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recent injuries and performance trends are creating value opportunities in division winner markets...
                </p>
                <Button variant="outline" className="w-full">
                  Read Full Analysis
                </Button>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-primary text-sm font-semibold mb-2">MARKET ALERT</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  NBA MVP Odds Movement
                </h3>
                <p className="text-muted-foreground mb-4">
                  Significant line movement detected in MVP markets following recent performances...
                </p>
                <Button variant="outline" className="w-full">
                  View Alert Details
                </Button>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-primary text-sm font-semibold mb-2">WEEKLY REPORT</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  MLB Futures Update
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive review of World Series odds and emerging value plays for the upcoming season...
                </p>
                <Button variant="outline" className="w-full">
                  Access Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Access Section */}
        <section id="premium" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Premium Access
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exclusive features and tools designed for serious sports investors who demand the highest level of analysis.
              </p>
            </div>

            {/* ROI Calculator */}
            <div className="mb-12">
              <ROICalculator />
            </div>

            {/* Premium Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Advanced Analytics
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deep dive into market trends, player performance metrics, and predictive modeling.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => openPaywall('advanced analytics dashboard')}
                  className="w-full"
                >
                  Access Analytics
                </Button>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Exclusive Picks
                </h3>
                <p className="text-muted-foreground mb-4">
                  High-confidence futures selections with detailed analysis and reasoning.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => openPaywall('exclusive premium picks')}
                  className="w-full"
                >
                  View Picks
                </Button>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Expert Consultation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Direct access to our team of professional sports analysts and strategists.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => openPaywall('expert consultation services')}
                  className="w-full"
                >
                  Book Session
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                onClick={() => openPaywall('full premium access')}
              >
                Get Premium Access
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </Layout>

      {/* Premium Paywall Modal */}
      <PremiumPaywall 
        isOpen={paywallOpen} 
        onClose={closePaywall} 
        feature={paywallFeature} 
      />
    </div>
  );
}

export default App;

