import { Code2, Database, Palette, Zap, Globe, Server } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
    color: "primary"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL",
    color: "secondary"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "SQL, NoSQL, Data Modeling",
    color: "accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Responsive Design",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets",
    color: "secondary"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Best Practices",
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-card glow-border-${skill.color} rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group`}
            >
              <skill.icon className={`w-12 h-12 text-${skill.color} mb-4 group-hover:animate-glow-pulse`} />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
