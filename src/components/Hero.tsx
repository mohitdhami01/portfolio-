import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Frontend Developer", "BCA Student", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <>
      <style>{`
        @keyframes drift-horizontal {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 100% center;
          }
        }

        .animated-bg-drift {
          animation: drift-horizontal 60s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .slide-in {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .slide-out {
          animation: slideOutLeft 0.6s ease-out forwards;
        }

        @keyframes wireFlow {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        .tech-wire {
          stroke-dasharray: 5 5;
          animation: wireFlow 3s linear infinite;
        }

        .tech-node {
          animation: nodePulse 2s ease-in-out infinite;
        }
      `}</style>

      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Layer */}
        <div 
          className="absolute inset-0 animated-bg-drift"
          style={{
            backgroundImage: `linear-gradient(rgba(28, 39, 60, 0.85), rgba(28, 39, 60, 0.85)), url(${heroBg})`,
            backgroundRepeat: 'repeat-x',
          }}
        />

        {/* Tech Wire Animation Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Horizontal wires */}
            <line x1="0" y1="150" x2="400" y2="150" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '0s'}} />
            <line x1="800" y1="250" x2="1200" y2="250" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '1s'}} />
            <line x1="200" y1="450" x2="600" y2="450" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '2s'}} />
            <line x1="700" y1="550" x2="1100" y2="550" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '0.5s'}} />
            
            {/* Diagonal wires */}
            <line x1="100" y1="100" x2="300" y2="200" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '1.5s'}} />
            <line x1="900" y1="150" x2="1100" y2="350" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '2.5s'}} />
            <line x1="300" y1="600" x2="500" y2="400" stroke="url(#wireGradient)" strokeWidth="1" className="tech-wire" style={{animationDelay: '1.2s'}} />
            
            {/* Connection nodes */}
            <circle cx="400" cy="150" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '0s'}} />
            <circle cx="800" cy="250" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '1s'}} />
            <circle cx="300" cy="200" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '1.5s'}} />
            <circle cx="600" cy="450" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '2s'}} />
            <circle cx="1100" cy="350" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '2.5s'}} />
            <circle cx="500" cy="400" r="3" fill="hsl(var(--primary))" className="tech-node" style={{animationDelay: '1.2s'}} />
          </svg>
        </div>

        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Mohit</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto h-8 relative overflow-hidden">
              <span 
                key={currentText}
                className="absolute inset-0 flex items-center justify-center slide-in"
              >
                {texts[currentText]}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={goToProjects}
                className="glow-border-primary hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 animate-glow-pulse"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={goToContact}
                className="glow-border-secondary hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Boxes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1 - Image Box */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                {/* Replace with your image */}
                <img 
                  src="https://eu-images.contentstack.com/v3/assets/blt2db30e0332fda6df/bltf448fc3dd1808c89/6747376c2f181b2f26fa20e3/IT_Project_AdobeStock_199241005_4721_0.jpeg?width=1280&auto=webp&quality=80&disable=upscale" 
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Featured Project</h3>
              <p className="text-muted-foreground">
                Add your project description or any content here.
              </p>
            </div>

            {/* Box 2 - Text Box */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
              <p className="text-muted-foreground mb-4">
                Frontend Developer & UI/UX Enthusiast
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Building projects using React + Tailwind</li>
                <li>✓ Passion for mordern animations & clean UI</li>
                <li>✓ 1+ years of hands-on learning</li>
              </ul>
            </div>

            {/* Box 3 - Image Box */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                {/* Replace with your image */}
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmjUqp5N-68IoflajiU8K1cgQ33vvYB8_lw&s" 
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Work</h3>
              <p className="text-muted-foreground">
                Check out my most recent project and achievements.
              </p>
            </div>

            {/* Box 4 - Text with CTA */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-2">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button 
                onClick={goToContact}
                className="glow-border-primary"
              >
                Start a Conversation →
              </Button>
            </div>

            {/* Box 5 - Text Box */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">My Approach</h3>
              <p className="text-muted-foreground">
                Clean code, user-first design, and scalable solutions that drive real results.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;