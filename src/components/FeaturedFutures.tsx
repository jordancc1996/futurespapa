import React from 'react';
import { TrendingUp, Calendar, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedFutures = () => {
  const futures = [
    {
      league: "NFL",
      title: "Super Bowl Champion",
      pick: "Kansas City Chiefs",
      odds: "+650",
      confidence: 4,
      roi: "+127%",
      status: "Active",
      reasoning: "Elite offense, proven playoff experience, and favorable schedule positioning."
    },
    {
      league: "NBA",
      title: "Conference Winner",
      pick: "Boston Celtics (East)",
      odds: "+280",
      confidence: 5,
      roi: "+89%",
      status: "Active",
      reasoning: "Dominant home court advantage and deep roster with championship experience."
    },
    {
      league: "MLB",
      title: "World Series Winner",
      pick: "Los Angeles Dodgers",
      odds: "+450",
      confidence: 3,
      roi: "+156%",
      status: "Won",
      reasoning: "Superior pitching depth and consistent offensive production throughout season."
    }
  ];

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
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-6">
            Featured Futures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our recent high-confidence futures picks with complete transparency on performance and reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {futures.map((future, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors duration-200 group">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {future.league}
                </span>
                <span className={`text-sm font-semibold ${getStatusColor(future.status)}`}>
                  {future.status}
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {future.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-lg font-semibold text-foreground">{future.pick}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-primary font-bold">{future.odds}</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(future.confidence)}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-semibold">ROI {future.roi}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Season Long</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {future.reasoning}
              </p>

              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
              >
                View Analysis
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            See All Futures
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFutures;

