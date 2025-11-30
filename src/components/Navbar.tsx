import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/"
                className={`transition-colors ${
                  location.pathname === "/" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className={`transition-colors ${
                  location.pathname === "/about" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link 
                to="/skills"
                className={`transition-colors ${
                  location.pathname === "/skills" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                Skills
              </Link>
              <Link 
                to="/projects"
                className={`transition-colors ${
                  location.pathname === "/projects" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                Projects
              </Link>
            </div>
            
            <Link 
              to="/contact"
              className={`transition-colors ${
                location.pathname === "/contact" 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Logo on the right side */}
          <div className="flex items-center">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              className="text-primary relative"
            >
              <defs>
                <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle 
                cx="20" 
                cy="20" 
                r="18" 
                fill="url(#glowGradient)" 
              />
              <circle 
                cx="20" 
                cy="20" 
                r="15" 
                fill="hsl(var(--background))" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1" 
                opacity="0.8"
              />
              <text 
                x="20" 
                y="26" 
                textAnchor="middle" 
                className="fill-current font-bold text-lg"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                M
              </text>
            </svg>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;