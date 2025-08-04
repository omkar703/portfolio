import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Ponder Peak",
      description:
        "A responsive and modern Blog App Frontend built with React and styled using Tailwind CSS. This app offers a seamless user experience with dynamic content rendering and intuitive UI. 🎯 Dive into the code to explore how components and state management come together to create an engaging blogging platform.",
      tools: [
        "Express",
        "MongoDB",
        "React",
        "Node.js",
        "Tailwind",
        "AOS Animation",
        "MVC",
        "React Query",
      ],
      myRole: "Full-Stack Developer",
      code: "Github",
      demo: "Ponder Peak",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dern Support",
      description:
        "A comprehensive support website built with modern web technologies to provide excellent customer service and technical assistance.",
      tools: ["React", "Node.js", "Express", "MySQL", "Shadcn UI"],
      myRole: "Full-Stack Developer",
      code: "Github",
      demo: "Dern Support",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shopsy",
      description:
        "A modern e-commerce platform with dynamic product listings, shopping cart functionality, and smooth animations for enhanced user experience.",
      tools: ["React", "Tailwind", "AOS Animations"],
      myRole: "Frontend Developer",
      code: "Github",
      demo: "Shopsy",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Featured Projects
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            A collection of my best work showcasing modern web development
            practices and innovative solutions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`grid lg:grid-cols-2 gap-8 items-center animate-slide-up ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Terminal with Matrix Background */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="group relative overflow-hidden rounded-xl bg-black border border-green-500/30 hover:border-green-500 transition-all duration-500 hover-glow">
                  {/* Matrix Background Effect */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="matrix-bg text-green-400/20 text-xs font-mono leading-none overflow-hidden h-full">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div
                          key={i}
                          className="whitespace-nowrap animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {Array.from({ length: 50 }, () =>
                            Math.random() > 0.5 ? "1" : "0"
                          ).join("")}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Header */}
                  <div className="relative z-10 flex items-center gap-2 p-4 border-b border-green-500/20 bg-black/90">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-sm text-green-400 font-mono">
                      ~/projects/
                      {project.name.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  {/* Terminal Content with Image */}
                  <div className="relative z-10 p-4 bg-black/90">
                    {/* Project Image with Hacker Effect */}
                    <div className="mb-4 relative group/img">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="w-full h-48 object-cover rounded border border-green-500/30 filter group-hover/img:hue-rotate-90 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded"></div>
                      <div className="absolute top-2 right-2 text-green-400 text-xs font-mono bg-black/80 px-2 py-1 rounded">
                        [{project.myRole}]
                      </div>
                    </div>

                    {/* Terminal Code */}
                    <pre className="text-sm leading-relaxed font-mono">
                      <code>
                        <span className="text-green-400">$</span>{" "}
                        <span className="text-white">cat project.json</span>
                        {"\n"}
                        <span className="text-green-500">&#123;</span>
                        {"\n"} <span className="text-cyan-400">"name"</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-yellow-300">
                          "{project.name}"
                        </span>
                        <span className="text-white">,</span>
                        {"\n"}{" "}
                        <span className="text-cyan-400">"technologies"</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-white">[</span>
                        {project.tools.slice(0, 4).map((tool, i) => (
                          <span key={i}>
                            <span className="text-yellow-300">"{tool}"</span>
                            {i < 3 && i < project.tools.length - 1 && (
                              <span className="text-white">,</span>
                            )}
                            {i === 3 && project.tools.length > 4 && (
                              <span className="text-white">,</span>
                            )}
                            {i < 3 && "\n    "}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="text-gray-500">...</span>
                        )}
                        <span className="text-white">],</span>
                        {"\n"} <span className="text-cyan-400">"role"</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-yellow-300">
                          "{project.myRole}"
                        </span>
                        <span className="text-white">,</span>
                        {"\n"} <span className="text-cyan-400">"status"</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-green-400">"deployed"</span>
                        {"\n"}
                        <span className="text-green-500">&#125;</span>
                        {"\n"}
                        <span className="text-green-400">$ </span>
                        <span className="animate-pulse">_</span>
                      </code>
                    </pre>
                  </div>

                  {/* Glitch Effect */}
                  <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-portfolio-text">
                    {project.name}
                  </h3>
                  <p className="text-portfolio-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-portfolio-primary mb-2">
                      TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs font-medium bg-portfolio-card border border-portfolio-border rounded-full text-portfolio-text hover:border-portfolio-primary transition-colors duration-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="group">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="gradient" size="sm" className="group">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
