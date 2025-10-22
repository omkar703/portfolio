import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const projects = [
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
      name: "AI Assistant",
      description:
        "Building intelligent conversational AI that provides seamless user interactions and smart responses with advanced machine learning models.",
      tools: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      myRole: "AI/ML Developer",
      code: "https://github.com",
      demo: "https://aiassistant.com",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".project-card")?.offsetWidth || 0;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      const newPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current
    ? scrollPosition <
      scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth -
        10
    : true;

  return (
    <>
      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .scroll-container {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .scroll-container {
            scroll-snap-type: x mandatory;
            scroll-padding: 1rem;
          }
          
          .project-card {
            scroll-snap-align: start;
          }
        }

        .scroll-container {
          user-select: none;
        }
      `}</style>

      <section
        id="projects"
        className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 font-mono"
      >
        <div className="max-w-7xl mx-auto">
          {/* Minimalist Header */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-4">
              Projects
            </h2>
            <p className="text-lg text-gray-500">
              Selected work showcasing modern development.
            </p>
          </div>

          {/* Projects Grid/Slider */}
          <div className="relative">
            {/* Navigation Buttons - Desktop Only */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 text-gray-500 hover:text-green-400 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 text-gray-500 hover:text-green-400 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Projects Slider */}
            <div
              ref={scrollContainerRef}
              className="scroll-container overflow-x-auto"
            >
              <div className="flex gap-8 lg:gap-12">
                {projects.map((project, index) => (
                  <div
                    key={project.name}
                    className="project-card flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[45vw] xl:w-[40vw]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="group hover-lift">
                      {/* Project Image */}
                      <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-900">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-64 sm:h-72 lg:h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
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

                      {/* Project Info */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-300 mb-2">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {project.myRole}
                          </p>
                          <p className="text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs text-gray-500 hover:text-green-400 transition-colors"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicators - Mobile/Tablet */}
            <div className="flex justify-center mt-12 lg:hidden">
              <div className="flex gap-2">
                {projects.map((_, index) => {
                  const container = scrollContainerRef.current;
                  const isActive = container
                    ? Math.abs(
                        scrollPosition -
                          index *
                            (container.querySelector(".project-card")
                              ?.offsetWidth + 32 || 0)
                      ) < 100
                    : index === 0;
                  return (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        isActive ? "w-8 bg-green-500" : "w-1 bg-gray-700"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* See All Projects Link */}
          <div className="mt-20 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
            >
              <span className="text-lg">View all projects</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
