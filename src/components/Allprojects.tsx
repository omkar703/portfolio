import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allProjects = [
    {
      name: "Ponder Peak",
      description:
        "A responsive and modern Blog App Frontend built with React and styled using Tailwind CSS. This app offers a seamless user experience with dynamic content rendering and intuitive UI.",
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
      code: "https://github.com",
      demo: "https://ponderpeak.com",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dern Support",
      description:
        "A comprehensive support website built with modern web technologies to provide excellent customer service and technical assistance.",
      tools: ["React", "Node.js", "Express", "MySQL", "Shadcn UI"],
      myRole: "Full-Stack Developer",
      code: "https://github.com",
      demo: "https://dernsupport.com",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shopsy",
      description:
        "A modern e-commerce platform with dynamic product listings, shopping cart functionality, and smooth animations for enhanced user experience.",
      tools: ["React", "Tailwind", "AOS Animations"],
      myRole: "Frontend Developer",
      code: "https://github.com",
      demo: "https://shopsy.com",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Portfolio Dashboard",
      description:
        "An interactive dashboard for managing personal portfolios with real-time analytics and visualizations.",
      tools: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
      myRole: "Full-Stack Developer",
      code: "https://github.com",
      demo: "https://portfolio-dashboard.com",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chatify",
      description:
        "A real-time chat application with end-to-end encryption and group messaging features.",
      tools: ["React", "Socket.io", "Node.js", "Tailwind", "Crypto.js"],
      myRole: "Full-Stack Developer",
      code: "https://github.com",
      demo: "https://chatify.com",
      image:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "WeatherWise",
      description:
        "A weather forecasting app with location-based predictions and customizable alerts.",
      tools: ["React", "OpenWeather API", "Tailwind", "AOS Animations"],
      myRole: "Frontend Developer",
      code: "https://github.com",
      demo: "https://weatherwise.com",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Scroll to top on mount
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>

      <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-4">
                  All Projects
                </h2>
                <p className="text-lg text-gray-500">
                  A complete collection of my work.
                </p>
              </div>

              {/* Back Button - Desktop */}
              <Link to="/#projects" className="hidden lg:block">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-black border-2 border-green-500 text-green-400 font-bold rounded hover:bg-green-500/10 transition-all hover-scale">
                  <ArrowLeft className="w-5 h-5" />
                  BACK
                </button>
              </Link>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20 lg:space-y-32">
            {allProjects.map((project, index) => (
              <div
                key={project.name}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="group hover-lift">
                    <div className="relative overflow-hidden rounded-lg bg-gray-900">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      {/* Hover Overlay */}
                      <div
                        className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <a
                          href={project.code}
                          className="p-3 rounded-full bg-black/80 text-gray-400 hover:text-green-400 transition-colors"
                          onClick={(e) => e.preventDefault()}
                          title="View Code"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-3 rounded-full bg-green-500 text-black hover:bg-green-400 transition-colors"
                          onClick={(e) => e.preventDefault()}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        {project.myRole}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs text-gray-500 hover:text-green-400 transition-colors cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black border-2 border-gray-700 text-gray-300 font-bold rounded hover:border-green-500 hover:text-green-400 transition-all hover-scale"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github className="w-5 h-5" />
                      CODE
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover-scale"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink className="w-5 h-5" />
                      LIVE DEMO
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Projects - Mobile */}
          <div className="mt-20 text-center lg:hidden">
            <Link to="/#projects">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black border-2 border-green-500 text-green-400 font-bold rounded hover:bg-green-500/10 transition-all hover-scale">
                <ArrowLeft className="w-5 h-5" />
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>

        {/* Fixed Back Button - Desktop Only */}
        <div className="hidden lg:block fixed bottom-8 right-8 z-50">
          <Link to="/#projects">
            <button className="p-4 rounded-full bg-green-500 text-black hover:bg-green-400 transition-all hover-scale shadow-lg">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
