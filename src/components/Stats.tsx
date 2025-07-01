import React from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: "187%",
      label: "Average ROI",
      description: "Across all futures picks in 2024"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      value: "73%",
      label: "Win Rate",
      description: "On high-confidence futures bets"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Elite Clients",
      description: "Professional investors served"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "5",
      label: "Years",
      description: "Of proven futures expertise"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Performance That Speaks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record demonstrates consistent excellence in futures betting analysis, 
            delivering exceptional returns for our exclusive clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-200 hover:luxury-shadow">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
              Transparent Performance Tracking
            </h3>
            <p className="text-muted-foreground mb-6">
              Every pick is tracked with complete transparency. No cherry-picked results, no hidden losses. 
              Our clients deserve nothing less than complete honesty about performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-500">+$2.4M</div>
                <div className="text-muted-foreground text-sm">Client Profits (2024)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-muted-foreground text-sm">Futures Analyzed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">24/7</div>
                <div className="text-muted-foreground text-sm">Market Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

