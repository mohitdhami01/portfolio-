import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    image: project1,
    description: "A full-featured e-commerce platform with real-time inventory management and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    image: project2,
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Analytics Dashboard",
    image: project3,
    description: "Advanced analytics dashboard powered by machine learning for data-driven insights.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    demo: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card glow-border-primary rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 glow-border-primary hover:scale-105 transition-all"
                    variant="default"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    className="flex-1 glow-border-secondary hover:scale-105 transition-all"
                    variant="outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
