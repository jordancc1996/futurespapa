import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience level is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual Formcarry endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your message has been received. Our team will contact you within 24 hours to discuss 
          your premium futures betting needs.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', experience: '', message: '' });
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your sports investing? Get in touch with our team to discuss 
            premium futures analysis tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                We serve a limited number of discerning clients with personalized attention. 
                Reach out to discuss how our premium futures analysis can enhance your sports investing portfolio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">contact@futurepapa.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">New York, NY</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-display font-semibold text-card-foreground mb-4">
                Response Time
              </h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                please call our direct line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-card-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-card-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-card-foreground mb-2">
                  Sports Betting Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.experience ? 'border-red-500' : 'border-border'
                  }`}
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (Less than 1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="professional">Professional (5+ years)</option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-card-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Tell us about your sports betting goals and how we can help..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

