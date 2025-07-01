import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Users, Target, Star, ArrowRight } from 'lucide-react';

const Markets = () => {
  const [activeTab, setActiveTab] = useState('nfl');

  const markets = {
    nfl: {
      title: "NFL Futures",
      description: "Professional analysis of NFL championship, division, and award futures with comprehensive team evaluations.",
      currentSeason: "2024-25 Season",
      totalBets: 45,
      avgROI: "189%",
      winRate: "76%",
      features: [
        "Super Bowl Championship analysis",
        "Division winner predictions", 
        "MVP and award futures",
        "Playoff positioning bets",
        "Season win totals"
      ],
      recentPicks: [
        {
          type: "Super Bowl Champion",
          pick: "Kansas City Chiefs",
          odds: "+650",
          confidence: 4,
          status: "Active",
          reasoning: "Elite offense with proven playoff experience and favorable schedule."
        },
        {
          type: "AFC East Winner",
          pick: "Buffalo Bills",
          odds: "+180",
          confidence: 5,
          status: "Active", 
          reasoning: "Dominant defense and improved offensive line protection."
        },
        {
          type: "MVP Award",
          pick: "Josh Allen",
          odds: "+450",
          confidence: 3,
          status: "Won",
          reasoning: "Exceptional dual-threat capability with team success correlation."
        }
      ]
    },
    nba: {
      title: "NBA Futures",
      description: "In-depth NBA championship, conference, and individual award analysis with advanced metrics integration.",
      currentSeason: "2024-25 Season",
      totalBets: 38,
      avgROI: "167%",
      winRate: "71%",
      features: [
        "NBA Championship predictions",
        "Conference winner analysis",
        "MVP and DPOY futures",
        "Rookie of the Year bets",
        "Team win total analysis"
      ],
      recentPicks: [
        {
          type: "NBA Champion",
          pick: "Boston Celtics",
          odds: "+320",
          confidence: 4,
          status: "Active",
          reasoning: "Deep roster with championship experience and home court advantage."
        },
        {
          type: "Western Conference",
          pick: "Denver Nuggets",
          odds: "+280",
          confidence: 3,
          status: "Active",
          reasoning: "Proven playoff performer with elite two-way center."
        },
        {
          type: "MVP Award",
          pick: "Luka Dončić",
          odds: "+550",
          confidence: 5,
          status: "Won",
          reasoning: "Triple-double machine with improved team record correlation."
        }
      ]
    },
    mlb: {
      title: "MLB Futures",
      description: "Comprehensive MLB World Series, division, and award futures with advanced sabermetrics analysis.",
      currentSeason: "2025 Season",
      totalBets: 52,
      avgROI: "198%",
      winRate: "69%",
      features: [
        "World Series predictions",
        "Division championship analysis",
        "Cy Young and MVP futures",
        "Playoff positioning bets",
        "Season win total analysis"
      ],
      recentPicks: [
        {
          type: "World Series Champion",
          pick: "Los Angeles Dodgers",
          odds: "+450",
          confidence: 3,
          status: "Won",
          reasoning: "Superior pitching depth and consistent offensive production."
        },
        {
          type: "AL East Winner",
          pick: "New York Yankees",
          odds: "+220",
          confidence: 4,
          status: "Active",
          reasoning: "Improved bullpen depth and proven veteran leadership."
        },
        {
          type: "NL Cy Young",
          pick: "Spencer Strider",
          odds: "+380",
          confidence: 5,
          status: "Active",
          reasoning: "Elite strikeout rate with improved command and durability."
        }
      ]
    }
  };

  const currentMarket = markets[activeTab];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Won': return 'text-green-500';
      case 'Active': return 'text-blue-500';
      case 'Lost': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const renderStars = (confidence) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < confidence ? 'text-primary fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="markets" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Futures Markets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional analysis across major sports leagues with transparent performance tracking 
            and detailed reasoning for every pick.
          </p>
        </div>

        {/* Market Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-lg p-2 flex space-x-2">
            {Object.keys(markets).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                  activeTab === key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {markets[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-display font-bold text-card-foreground mb-4">
                {currentMarket.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentMarket.description}
              </p>
              <div className="space-y-3">
                {currentMarket.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {currentMarket.totalBets}
                </div>
                <div className="text-muted-foreground text-sm">Total Bets</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {currentMarket.currentSeason}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {currentMarket.avgROI}
                </div>
                <div className="text-muted-foreground text-sm">Avg ROI</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Season Performance
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {currentMarket.winRate}
                </div>
                <div className="text-muted-foreground text-sm">Win Rate</div>
                <div className="text-xs text-muted-foreground mt-1">
                  High Confidence
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Monitoring</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Market Analysis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Picks */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Recent {currentMarket.title} Picks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMarket.recentPicks.map((pick, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {pick.type}
                  </span>
                  <span className={`text-sm font-semibold ${getStatusColor(pick.status)}`}>
                    {pick.status}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {pick.pick}
                </h4>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-bold text-lg">{pick.odds}</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(pick.confidence)}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {pick.reasoning}
                </p>

                <Button variant="outline" className="w-full">
                  View Full Analysis
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
            Get Access to All Markets
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join our exclusive clientele and receive detailed analysis across all major sports futures markets 
            with complete transparency and professional-grade insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90">
              Get Premium Access
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Sample Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;

