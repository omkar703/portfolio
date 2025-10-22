import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Palette,
  Sparkles,
  Layers,
} from "lucide-react";

const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const services = [
    {
      title: "AI/ML Development",
      description:
        "Building intelligent systems with machine learning models, deep learning architectures, and AI-powered solutions.",
      icon: <Cpu className="w-10 h-10" />,
    },
    {
      title: "Computer Vision",
      description:
        "Developing advanced computer vision applications for image recognition, object detection, and visual analytics.",
      icon: <Palette className="w-10 h-10" />,
    },
    {
      title: "NLP & LLMs",
      description:
        "Creating natural language processing solutions and working with large language models for intelligent text analysis.",
      icon: <Sparkles className="w-10 h-10" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with modern frameworks, REST APIs, and database management systems.",
      icon: <Layers className="w-10 h-10" />,
    },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "React",
    "Node.js",
    "Docker",
    "AWS",
    "Computer Vision",
  ];

  const updateScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".service-card")?.offsetWidth || 0;
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

  // Drag to scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      container.classList.add("dragging");
      dragStartXRef.current = e.pageX - container.offsetLeft;
      dragStartScrollLeftRef.current = container.scrollLeft;
    };
    const onMouseLeave = () => {
      isDraggingRef.current = false;
      container.classList.remove("dragging");
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
      container.classList.remove("dragging");
    };
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - dragStartXRef.current) * 1.2;
      container.scrollLeft = dragStartScrollLeftRef.current - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => updateScrollPosition();
    const handleResize = () => updateScrollPosition();

    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollPosition]);

  const canScrollLeft = scrollPosition > 2;
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
          transform: translateY(-2px);
        }

        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #10b981 #000;
          -webkit-overflow-scrolling: touch;
          user-select: none;
          cursor: grab;
        }

        .scroll-container.dragging {
          cursor: grabbing;
        }

        .scroll-container::-webkit-scrollbar {
          height: 6px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: #000;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 3px;
        }

        @media (max-width: 768px) {
          .scroll-container {
            scroll-snap-type: x mandatory;
            scroll-padding: 1rem;
          }
          
          .service-card {
            scroll-snap-align: start;
          }
        }
      `}</style>

      <section className="min-h-screen bg-black font-mono py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Minimalist Header */}
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-300 mb-3">
              About Me
            </h2>
            <p className="text-lg text-gray-500">
              Building intelligent systems with passion and precision.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-20">
            {/* About Section */}
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Avatar - 2 columns */}
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <div className="flex flex-col items-center">
                  {/* Simple Avatar */}
                  <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border-2 border-gray-800 hover:border-green-500 transition-colors overflow-hidden bg-black flex items-center justify-center hover-lift">
                    <div className="text-7xl lg:text-8xl font-black text-gray-300">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/043/905/674/non_2x/developer-line-inverted-icon-design-vector.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* Simple Badge */}
                  <div className="mt-6 px-4 py-2 bg-black border-2 border-gray-800 rounded-full">
                    <span className="text-green-500 font-bold text-sm whitespace-nowrap">
                      AI/ML Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Content - 3 columns */}
              <div className="lg:col-span-3 space-y-8">
                {/* Intro */}
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Welcome! I'm{" "}
                    <span className="text-green-500 font-semibold">
                      Omkar Phadatare
                    </span>
                    , a passionate AI/ML Developer dedicated to creating
                    intelligent systems and innovative solutions. With expertise
                    in deep learning, computer vision, and large language
                    models, I specialize in designing, developing, and deploying
                    AI systems that solve real-world problems.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    My skills include building end-to-end machine learning
                    pipelines, working with modern frameworks like PyTorch and
                    TensorFlow, and developing scalable applications using
                    cutting-edge technologies.
                  </p>
                </div>

                {/* Skills */}
                <div className="pt-8 border-t border-gray-900">
                  <div className="mb-4">
                    <span className="text-sm uppercase tracking-wider text-gray-500">
                      Core Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-black border border-gray-800 rounded text-gray-400 hover:text-green-500 hover:border-green-500 transition-all text-sm hover-lift cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="pt-20 border-t border-gray-900">
              <div className="mb-16">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-3">
                  Services & Expertise
                </h3>
                <p className="text-lg text-gray-500">
                  Transforming ideas into intelligent solutions.
                </p>
              </div>

              {/* Services Slider */}
              <div className="relative">
                {/* Navigation Buttons - Desktop */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 text-gray-600 hover:text-green-500 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                )}

                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 text-gray-600 hover:text-green-500 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                )}

                {/* Mobile Navigation */}
                <div className="flex lg:hidden justify-between mb-8">
                  <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded transition-colors ${
                      canScrollLeft
                        ? "text-gray-400 hover:text-green-500"
                        : "text-gray-800 cursor-not-allowed"
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`p-2 rounded transition-colors ${
                      canScrollRight
                        ? "text-gray-400 hover:text-green-500"
                        : "text-gray-800 cursor-not-allowed"
                    }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Services Cards */}
                <div
                  ref={scrollContainerRef}
                  className="scroll-container overflow-x-auto pb-8"
                  tabIndex={0}
                  aria-label="Services carousel"
                >
                  <div className="flex gap-8 min-w-max">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="service-card flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[340px]"
                      >
                        <div className="h-full p-8 border-2 border-gray-900 hover:border-green-500  ">
                          <div className="space-y-6">
                            {/* Icon */}
                            <div className="text-gray-600">{service.icon}</div>

                            {/* Content */}
                            <div className="space-y-3">
                              <h4 className="text-2xl font-bold text-gray-300">
                                {service.title}
                              </h4>
                              <p className="text-gray-500 leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            {/* Arrow */}
                            <div className="pt-4">
                              <div className="inline-flex items-center text-green-500 ">
                                <ChevronRight className="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                  {services.map((_, index) => {
                    const container = scrollContainerRef.current;
                    const isActive = container
                      ? Math.abs(
                          scrollPosition -
                            index *
                              ((container.querySelector(".service-card")
                                ?.offsetWidth || 0) +
                                32)
                        ) < 100
                      : index === 0;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (container) {
                            const cardWidth =
                              container.querySelector(".service-card")
                                ?.offsetWidth || 0;
                            container.scrollTo({
                              left: index * (cardWidth + 32),
                              behavior: "smooth",
                            });
                          }
                        }}
                        className={`h-1 rounded-full transition-all ${
                          isActive
                            ? "w-8 bg-green-500"
                            : "w-1 bg-gray-800 hover:bg-gray-700"
                        }`}
                        aria-label={`Go to service ${index + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
