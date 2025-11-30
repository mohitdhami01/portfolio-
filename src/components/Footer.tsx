import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a
              href="#"
              className="p-3 bg-card glow-border-primary rounded-full hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-card glow-border-secondary rounded-full hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-card glow-border-primary rounded-full hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-card glow-border-secondary rounded-full hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © 2024 Your Name. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="gradient-text">passion</span> and <span className="gradient-text">creativity</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
