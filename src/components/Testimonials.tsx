import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Chen",
      title: "Professional Sports Investor",
      content: "Future Papa's analysis is unmatched. Their NFL futures picks have consistently outperformed my own research. The ROI transparency gives me complete confidence in their methodology.",
      rating: 5,
      roi: "+234%",
      timeframe: "12 months"
    },
    {
      name: "Sarah Rodriguez",
      title: "Hedge Fund Manager",
      content: "I've tried numerous sports betting services, but Future Papa stands apart. Their analytical approach and luxury service level matches what I expect in financial markets.",
      rating: 5,
      roi: "+189%",
      timeframe: "8 months"
    },
    {
      name: "David Thompson",
      title: "Private Equity Executive",
      content: "The level of detail in their futures analysis is exceptional. Every pick comes with comprehensive reasoning and risk assessment. This is professional-grade sports investing.",
      rating: 5,
      roi: "+156%",
      timeframe: "6 months"
    },
    {
      name: "Jennifer Walsh",
      title: "Investment Advisor",
      content: "Future Papa has transformed how I approach sports betting. Their systematic methodology and transparent reporting make this feel like a legitimate investment strategy.",
      rating: 5,
      roi: "+201%",
      timeframe: "10 months"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-primary fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our exclusive clientele who have achieved exceptional returns through our premium futures analysis.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-lg p-8 md:p-12 luxury-shadow">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 font-light leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center mb-6">
              <div className="font-display font-semibold text-lg text-foreground">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[currentIndex].title}
              </div>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-green-500 font-bold text-lg">
                  {testimonials[currentIndex].roi}
                </div>
                <div className="text-muted-foreground">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-lg">
                  {testimonials[currentIndex].timeframe}
                </div>
                <div className="text-muted-foreground">Timeframe</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

