import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Lock, Crown, Check, Star, ArrowRight, X } from 'lucide-react';

interface PremiumPaywallProps {
  isOpen: boolean;
  onClose: () => void;
  feature?: string;
}

const PremiumPaywall: React.FC<PremiumPaywallProps> = ({ isOpen, onClose, feature = "premium content" }) => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = {
    starter: {
      name: 'Starter',
      price: 299,
      period: 'month',
      description: 'Perfect for casual sports investors',
      features: [
        '5 premium futures picks per month',
        'Basic ROI tracking',
        'Email support',
        'Market alerts',
        'Mobile access'
      ],
      popular: false
    },
    professional: {
      name: 'Professional',
      price: 599,
      period: 'month',
      description: 'Our most popular plan for serious investors',
      features: [
        '15 premium futures picks per month',
        'Advanced ROI calculator',
        'Priority support',
        'Real-time market alerts',
        'Detailed analysis reports',
        'Portfolio tracking',
        'Mobile & desktop access'
      ],
      popular: true
    },
    elite: {
      name: 'Elite',
      price: 1299,
      period: 'month',
      description: 'Exclusive access for high-volume investors',
      features: [
        'Unlimited premium futures picks',
        'Personal analyst consultation',
        '24/7 priority support',
        'Custom portfolio strategies',
        'Advanced analytics dashboard',
        'API access',
        'White-glove service',
        'Exclusive market insights'
      ],
      popular: false
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-display font-bold text-card-foreground">
                Premium Access Required
              </h2>
              <p className="text-muted-foreground">
                Unlock {feature} with a Future Papa premium subscription
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Value Proposition */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-card-foreground mb-4">
              Join the Elite 1% of Sports Investors
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our premium members have achieved an average ROI of 187% through exclusive 
              futures analysis and professional-grade tools. Choose the plan that fits your investment goals.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`relative border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                  selectedPlan === key
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                } ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedPlan(key)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-display font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h4>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-card-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  {selectedPlan === key && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="bg-background border border-border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Elite Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500 mb-2">187%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500 mb-2">73%</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-card-foreground mb-4">
              "Future Papa's premium analysis has completely transformed my sports investing approach. 
              The ROI calculator alone has saved me from countless bad bets."
            </blockquote>
            <div className="text-sm text-muted-foreground">
              — Sarah M., Hedge Fund Manager
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold mb-4">
              Get {plans[selectedPlan].name} Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              30-day money-back guarantee • Cancel anytime • Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPaywall;

