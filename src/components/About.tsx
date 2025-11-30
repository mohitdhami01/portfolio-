const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="bg-card glow-border-primary rounded-lg p-8 md:p-12 transition-all duration-300 hover:scale-[1.02]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate developer who loves creating innovative solutions and bringing ideas to life through code. 
            With a strong foundation in modern web technologies, I specialize in building responsive, user-friendly applications 
            that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date 
            with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
