import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Code, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end pt-24 pb-8 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12">
        {/* Left content */}
        <div className="max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-cream mb-6">
            Build technology
            <br />
            <span className="italic font-medium">with purpose.</span>
          </h1>
          <p className="text-cream/70 font-sans text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            At Coding With God, we create software that serves people, communities, and the Kingdom.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Explore Our Work
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Join the Mission
            </Button>
          </div>
        </div>

        {/* Right floating card */}
        <div
          className="w-full md:w-80 bg-brand-black/50 backdrop-blur-xl border border-cream/15 rounded-2xl p-6 space-y-4 animate-fade-in-right"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-cream/10">
            <Code size={18} className="text-primary" />
            <span className="text-cream font-sans text-sm font-medium">Latest Updates</span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Calendar size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-cream text-sm font-sans font-medium">Shitsuke Launch</p>
              <p className="text-cream/50 text-xs font-sans">Transport platform · Coming Soon</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Users size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-cream text-sm font-sans font-medium">Developer Fellowship</p>
              <p className="text-cream/50 text-xs font-sans">Join our community · Open</p>
            </div>
          </div>

          <button className="w-full text-center text-sm font-sans text-primary hover:text-burgundy-glow transition-colors pt-2">
            + Join next event
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-cream/40 text-xs font-sans tracking-widest hidden md:block animate-float">
        Scroll down ↓
      </div>
    </section>
  );
};

export default HeroSection;
