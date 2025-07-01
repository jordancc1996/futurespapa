import React from 'react';
import { TrendingUp, BarChart3, Target, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Proprietary Analysis",
      description: "Our advanced models analyze thousands of data points across NFL, NBA, and MLB to identify high-value futures opportunities."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Expert Curation",
      description: "Our team of professional analysts hand-select only the most promising futures bets with transparent ROI tracking."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "ROI Transparency",
      description: "Every pick comes with detailed analysis and historical performance data. No hidden results, complete transparency."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Delivery",
      description: "Receive curated futures picks through our exclusive platform with detailed reasoning and confidence levels."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach to futures betting combines advanced analytics with expert insight, 
            delivering premium picks with complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto group-hover:border-primary transition-colors duration-200">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

