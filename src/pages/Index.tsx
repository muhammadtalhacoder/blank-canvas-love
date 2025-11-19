import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Calendar, CreditCard, Plus, MessageCircle, Star, Layout, Clock, Users, Smartphone, Mail, ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .slide-right, .slide-left, .scale-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background gradient orbs with mouse parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-float transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        <div 
          className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] animate-float transition-transform duration-1000" 
          style={{ animationDelay: "2s", transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-600/20 rounded-full blur-[128px] animate-float transition-transform duration-1000" 
          style={{ animationDelay: "4s", transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-500/20 rotate-45 animate-float rotate-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-teal-500/20 rotate-12 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="slide-right text-center space-y-8">
              <div className="inline-block animate-slide-up">
                <div className="px-6 py-2 rounded-full glass mb-6 inline-flex items-center gap-2 hover-lift relative overflow-hidden group">
                  <div className="absolute inset-0 shimmer" />
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm relative z-10">No Monthly Fees • One-Time Payment</span>
                  <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  Infinity Booking Tool
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
                  A One-Time Setup Booking CRM Made for Modern Businesses
                </p>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 blur-3xl -z-10 animate-glow-pulse" />
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic flex items-center justify-center gap-2">
                <span className="text-2xl">"</span>
                <span>Stop paying expensive monthly subscription fees. Own your booking system for life.</span>
                <span className="text-2xl">"</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  onClick={scrollToDemo}
                  className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple transition-all duration-300 hover:scale-105 hover-lift relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    See Live Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group text-base sm:text-lg px-4 sm:px-8 py-5 sm:py-6 glass border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover-lift relative overflow-hidden"
                >
                  <span className="relative z-10 flex flex-col sm:flex-row items-center gap-2">
                    <span>Get Started for $199 Only</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 whitespace-nowrap">Limited Time</span>
                  </span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pay Monthly Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="fade-in text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Are You Paying <span className="gradient-text">Monthly</span> for Booking Systems?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Popular booking CRMs charge $40 – $150 every month and still limit features.
                With Infinity Booking Tool, you pay once and own a fully customizable booking engine forever.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="slide-right space-y-4">
                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-purple-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-teal-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg pulse-ring" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">One-time setup fee</h3>
                    <p className="text-muted-foreground text-sm">Pay once, use forever. No recurring charges.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-purple-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-teal-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.2s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Fully customizable calendar & admin panel</h3>
                    <p className="text-muted-foreground text-sm">Tailored to your business needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-purple-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-teal-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Accept advance payments</h3>
                    <p className="text-muted-foreground text-sm">Integrated payment processing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-purple-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-teal-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.6s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Add-on selections for customers</h3>
                    <p className="text-muted-foreground text-sm">Boost revenue with upsells.</p>
                  </div>
                </div>
              </div>

              <div className="slide-left space-y-4">
                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-blue-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.1s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">WhatsApp confirmation</h3>
                    <p className="text-muted-foreground text-sm">Auto-send booking confirmations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-blue-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.3s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Google review integration</h3>
                    <p className="text-muted-foreground text-sm">Build your reputation automatically.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-xl glass hover-lift group hover:border-blue-500/30 border border-transparent transition-all">
                  <div className="relative">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1 relative z-10" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg pulse-ring" style={{ animationDelay: "0.5s" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Works for multiple industries</h3>
                    <p className="text-muted-foreground text-sm">Grooming, salons, repair services, fitness, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="fade-in text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, <span className="gradient-text">Transparent</span> Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <Card className="scale-in p-6 sm:p-8 glass border-2 border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white transition-colors">Standard Setup</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">One-Time Fee</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold gradient-text">$199</span>
                    <span className="text-sm sm:text-base text-muted-foreground line-through">$399</span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[60px] sm:min-h-[80px]">
                    Includes full booking system setup, admin panel, service categories, calendar, forms, and payment integration.
                  </p>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform text-sm sm:text-base py-5">
                    Get Started
                  </Button>
                </div>
              </Card>

              <Card className="scale-in p-6 sm:p-8 glass border-2 border-purple-500 glow-purple relative hover:-translate-y-3 transition-all duration-500 hover-lift group overflow-hidden" style={{ animationDelay: "0.1s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent opacity-50" />
                
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Customization Add-Ons</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Tailored to Your Needs</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold gradient-text">Custom</span>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm min-h-[60px] sm:min-h-[80px]">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 shrink-0" />
                      <span>Custom fields & forms</span>
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 shrink-0" />
                      <span>Multi-staff system</span>
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 shrink-0" />
                      <span>Auto reminders</span>
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 shrink-0" />
                      <span>Multi-location support</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform relative overflow-hidden text-sm sm:text-base py-5">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 shimmer" />
                  </Button>
                </div>
              </Card>

              <Card className="scale-in p-6 sm:p-8 glass border-2 border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover-lift group relative overflow-hidden" style={{ animationDelay: "0.2s" }} id="demo">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white transition-colors">See It In Action</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Live Demo</p>
                  </div>
                  
                  <div className="h-24 sm:h-32 flex items-center justify-center relative">
                    <div className="text-5xl sm:text-6xl animate-glow-pulse">🎯</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[60px] sm:min-h-[80px]">
                    Check out how the Infinity Booking Tool works in real time. Experience the interface, features, and workflow.
                  </p>

                  <Button variant="outline" className="w-full glass border-2 hover:bg-white/10 hover:border-blue-500/50 group-hover:scale-105 transition-all text-sm sm:text-base py-5">
                    See the Demo
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="fade-in text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need in <span className="gradient-text">One Booking Platform</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Customer Booking Calendar", desc: "Easy-to-use calendar interface for your customers", color: "purple" },
                { icon: CreditCard, title: "Payment Options", desc: "Accept advance or full payments seamlessly", color: "blue" },
                { icon: Plus, title: "Add-on Selection", desc: "Let customers choose additional services", color: "teal" },
                { icon: MessageCircle, title: "WhatsApp Confirmation", desc: "Automatic booking confirmations via WhatsApp", color: "purple" },
                { icon: Star, title: "Google Reviews", desc: "Integrated review collection system", color: "blue" },
                { icon: Layout, title: "Custom Admin Dashboard", desc: "Fully customizable admin panel", color: "teal" },
                { icon: Clock, title: "Real-time Management", desc: "Manage orders and bookings in real-time", color: "purple" },
                { icon: Users, title: "Staff Scheduling", desc: "Multi-staff scheduling and management", color: "blue" },
                { icon: Smartphone, title: "Mobile-Friendly", desc: "Fully responsive on all devices", color: "teal" },
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className={`fade-in p-8 glass border-2 border-white/10 hover:border-${feature.color}-500/50 transition-all duration-500 hover:-translate-y-3 hover-lift group relative overflow-hidden stagger-${(index % 6) + 1}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <feature.icon className={`w-12 h-12 text-${feature.color}-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`} />
                      <div className={`absolute inset-0 bg-${feature.color}-400/20 rounded-full blur-xl pulse-ring`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="fade-in space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">
                Get Your One-Time Booking System <span className="gradient-text">Today</span>
              </h2>
              
              <p className="text-xl text-muted-foreground">
                No monthly payments. No hidden fees. Fully customizable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple transition-all duration-300 hover:scale-105"
                >
                  Get Started for $199
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={scrollToDemo}
                  className="text-lg px-10 py-7 glass border-2 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold gradient-text mb-3">Infinity Booking Tool</h3>
                <p className="text-muted-foreground text-sm">
                  Your one-time booking system solution for modern businesses.
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="#pricing" className="block text-muted-foreground hover:text-white transition-colors">Pricing</a>
                  <a href="#demo" className="block text-muted-foreground hover:text-white transition-colors">Demo</a>
                  <a href="#features" className="block text-muted-foreground hover:text-white transition-colors">Features</a>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
                <a 
                  href="mailto:infinityforge.digital@gmail.com" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">infinityforge.digital@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-muted-foreground text-sm">
                © 2024 Infinity Booking Tool. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
