import React, { useState, useEffect, useRef } from "react";
import {
  SiPython,
  SiCplusplus,
  SiOpenjdk,
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiMdbook,
  SiDiagramsdotnet,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiMetabase,
  SiKotlin,
  SiAndroid,
  SiDocker,
  SiGit,
  SiFirebase,
  SiC,
  SiReact,
} from "react-icons/si";

// Custom Hook to detect when an element is in view
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return { ref, isInView };
};

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [showIcon, setShowIcon] = useState(false); // State to control intro animation

  const carouselRef = useRef(null);
  const skillRefs = useRef([]);

  const { ref: sectionRef, isInView: isSectionInView } = useInView({
    threshold: 0.1,
  });

  const skills = [
    {
      name: "Python",
      icon: <SiPython />,
      category: "Programming Language",
      color: "text-blue-400",
      accent: "#3776AB",
      description: "AI/ML, Backend Development",
      proficiency: 5,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      category: "Programming Language",
      color: "text-blue-600",
      accent: "#00599C",
      description: "High-performance computing",
      proficiency: 5,
    },
    {
      name: "Java",
      icon: <SiOpenjdk />,
      category: "Programming Language",
      color: "text-red-500",
      accent: "#007396",
      description: "Enterprise applications",
      proficiency: 2,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      category: "Programming Language",
      color: "text-yellow-300",
      accent: "#F7DF1E",
      description: "Full-stack development",
      proficiency: 2,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
      category: "Deep Learning",
      color: "text-red-400",
      accent: "#EE4C2C",
      description: "Neural network framework",
      proficiency: 2,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      category: "Machine Learning",
      color: "text-orange-400",
      accent: "#FF6F00",
      description: "End-to-end ML platform",
      proficiency: 2,
    },
    {
      name: "LangChain",
      icon: <SiMdbook />,
      category: "LLM Framework",
      color: "text-purple-400",
      accent: "#7E57C2",
      description: "Building LLM applications",
      proficiency: 1,
    },
    {
      name: "LangGraph",
      icon: <SiDiagramsdotnet />,
      category: "LLM Orchestration",
      color: "text-indigo-400",
      accent: "#5C6BC0",
      description: "Stateful LLM workflows",
      proficiency: 1,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      category: "Runtime",
      color: "text-green-500",
      accent: "#339933",
      description: "JavaScript runtime",
      proficiency: 1,
    },
    {
      name: "Express",
      icon: <SiExpress />,
      category: "Backend Framework",
      color: "text-gray-300",
      accent: "#000000",
      description: "Web application framework",
      proficiency: 2,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      category: "Backend Framework",
      color: "text-green-400",
      accent: "#009688",
      description: "Modern Python API framework",
      proficiency: 2,
    },
    {
      name: "Flask",
      icon: <SiFlask />,
      category: "Web Framework",
      color: "text-gray-200",
      accent: "#000000",
      description: "Micro web framework",
      proficiency: 3,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "NoSQL Database",
      color: "text-green-400",
      accent: "#47A248",
      description: "Document database",
      proficiency: 2,
    },
    {
      name: "SQL",
      icon: <SiPostgresql />,
      category: "Database",
      color: "text-blue-300",
      accent: "#336791",
      description: "Relational databases",
      proficiency: 3,
    },
    {
      name: "VectorDB",
      icon: <SiMetabase />,
      category: "Specialized Database",
      color: "text-purple-300",
      accent: "#7B1FA2",
      description: "Vector embeddings storage",
      proficiency: 1,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      category: "Mobile Development",
      color: "text-purple-400",
      accent: "#7F52FF",
      description: "Android development",
      proficiency: 3,
    },
    {
      name: "Jetpack Compose",
      icon: <SiAndroid />,
      category: "UI Framework",
      color: "text-green-400",
      accent: "#3DDC84",
      description: "Modern Android UI toolkit",
      proficiency: 3,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      category: "Containerization",
      color: "text-blue-400",
      accent: "#2496ED",
      description: "Container platform",
      proficiency: 1,
    },
    {
      name: "Git",
      icon: <SiGit />,
      category: "Version Control",
      color: "text-orange-500",
      accent: "#F05032",
      description: "Source code management",
      proficiency: 3,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      category: "Backend Services",
      color: "text-yellow-400",
      accent: "#FFCA28",
      description: "Mobile/web backend",
      proficiency: 3,
    },
    {
      name: "C",
      icon: <SiC />,
      category: "Programming Language",
      color: "text-blue-500",
      accent: "#A8B9CC",
      description: "System programming",
      proficiency: 7,
    },
    {
      name: "React",
      icon: <SiReact />,
      category: "Frontend Library",
      color: "text-cyan-400",
      accent: "#61DAFB",
      description: "Component-based UI",
      proficiency: 2,
    },
  ];

  const currentSkill = skills[currentIndex];

  useEffect(() => {
    if (!isSectionInView) return;

    // Trigger icon intro animation
    setShowIcon(false);
    const timer = setTimeout(() => setShowIcon(true), 100);

    const text = `> Analyzing skill: ${currentSkill.name}...\n> Category: ${currentSkill.category}\n> Description: ${currentSkill.description}\n> XP Level: ${currentSkill.proficiency}+\n> Status: ACTIVE`;
    setTerminalText("");
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) setTerminalText(text.slice(0, i + 1));
      else clearInterval(typeInterval);
      i++;
    }, 20);

    const advanceInterval = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % skills.length);
        setIsScanning(false);
      }, 800);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(typeInterval);
      clearInterval(advanceInterval);
    };
  }, [currentIndex, skills.length, isSectionInView]);

  const handleSkillSelect = (index) => {
    setIsScanning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsScanning(false);
      // Trigger scrollIntoView only on user interaction
      if (skillRefs.current[index]) {
        skillRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 300);
  };

  const particles = Array.from({ length: 50 });

  return (
    <div
      id="skills"
      ref={sectionRef}
      className={`min-h-screen bg-black relative overflow-hidden font-mono transition-opacity duration-1000 ${
        isSectionInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/80 border border-green-500/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-4">
                skills-terminal v2.1.0
              </span>
            </div>
            <div className="text-green-400 text-sm sm:text-lg">
              <span className="text-green-500">$</span>{" "}
              ./scan_developer_skills.sh
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* SKILL ANALYZER - HIDDEN ON MOBILE */}
            <div className="hidden lg:block bg-black/90 border border-green-500/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="bg-green-500/10 px-6 py-3 border-b border-green-500/30">
                <span className="text-green-400 text-lg">
                  SKILL_ANALYZER.EXE
                </span>
              </div>
              <div className="p-8 h-[600px] relative flex flex-col items-center justify-center">
                {/* Particle Background */}
                <div className="absolute inset-0 overflow-hidden">
                  {particles.map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3}px`,
                        height: `${Math.random() * 3}px`,
                        backgroundColor: `${currentSkill.accent}80`,
                        animationDuration: `${Math.random() * 10 + 5}s`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* {isScanning && (
                  <div className="absolute inset-0 bg-green-500/5 z-20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-400 animate-scan-y"></div>
                  </div>
                )} */}

                {/* Holographic Icon Display */}
                <div
                  className={`relative w-64 h-64 transition-opacity duration-500 ${
                    showIcon ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Rotating Rings */}
                  <div
                    className={`absolute inset-0 border-2 rounded-full animate-ring-1 ${
                      isScanning ? "opacity-0" : "opacity-50"
                    }`}
                    style={{ borderColor: currentSkill.accent }}
                  ></div>
                  <div
                    className={`absolute inset-0 scale-[0.75] border-2 rounded-full animate-ring-2 ${
                      isScanning ? "opacity-0" : "opacity-50"
                    }`}
                    style={{ borderColor: currentSkill.accent }}
                  ></div>
                  <div
                    className={`absolute inset-0 scale-[0.5] border rounded-full animate-ring-3 ${
                      isScanning ? "opacity-0" : "opacity-50"
                    }`}
                    style={{ borderColor: currentSkill.accent }}
                  ></div>

                  {/* The Icon */}
                  <div
                    className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
                      isScanning
                        ? "scale-95 blur-sm"
                        : "scale-100 animate-icon-intro"
                    }`}
                    style={{
                      filter: `drop-shadow(0 0 30px ${currentSkill.accent})`,
                    }}
                  >
                    <div
                      className={`${currentSkill.color} transition-colors duration-500`}
                    >
                      {React.cloneElement(currentSkill.icon, { size: 128 })}
                    </div>
                  </div>
                </div>

                <div
                  className={`text-center mt-12 transition-opacity duration-500 ${
                    showIcon ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-5xl font-bold text-white mb-3">
                    {currentSkill.name}
                  </h3>
                  <p className="text-green-400 text-xl">
                    {currentSkill.category}
                  </p>
                </div>
              </div>
            </div>

            {/* SYSTEM OUTPUT - ENHANCED AND VISIBLE ON ALL SCREENS */}
            <div
              className="bg-black/90 border border-green-500/50 rounded-lg overflow-hidden backdrop-blur-sm relative transition-all duration-500 animate-border-pulse"
              style={{ boxShadow: `inset 0 0 40px ${currentSkill.accent}1A` }}
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-500/50 opacity-50"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-500/50 opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-500/50 opacity-50"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-500/50 opacity-50"></div>

              <div className="bg-green-500/10 px-4 sm:px-6 py-3 border-b border-green-500/30">
                <span className="text-green-400 text-lg">
                  SYSTEM_OUTPUT.LOG
                </span>
              </div>
              <div className="p-4 sm:p-6 h-[500px] lg:h-[600px] overflow-hidden flex flex-col relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="flex-1 mb-4 z-10">
                  <div className="text-green-400 text-sm sm:text-base leading-relaxed h-40">
                    <div className="whitespace-pre-wrap">{terminalText}</div>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>

                <div className="lg:hidden border-t border-green-500/30 pt-4 z-10">
                  <div className="text-green-400 text-sm mb-4">
                    <span className="text-green-500">$</span> ls
                    /skills/directory/
                  </div>
                  <br />
                  <div
                    ref={carouselRef}
                    className="flex items-center space-x-4 overflow-x-auto pb-4 no-scrollbar"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {skills.map((skill, index) => (
                      <button
                        key={index}
                        ref={(el) => (skillRefs.current[index] = el)}
                        onClick={() => handleSkillSelect(index)}
                        className={`flex-shrink-0 p-3 rounded-lg border transition-all duration-300 group relative flex items-center justify-center w-20 h-20 ${
                          index === currentIndex
                            ? "border-green-500 bg-green-500/20 scale-85"
                            : "border-green-500/30 bg-black/50 scale-90 opacity-70 hover:opacity-100 hover:scale-100"
                        }`}
                        style={{ scrollSnapAlign: "center" }}
                      >
                        <div
                          className={`${skill.color} transition-all duration-300`}
                        >
                          {React.cloneElement(skill.icon, { size: 48 })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block border-t border-green-500/30 pt-6 z-10">
                  <div className="text-green-400 text-sm mb-4">
                    <span className="text-green-500">$</span> ls
                    /skills/directory/
                  </div>
                  <div className="grid grid-cols-5 xl:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                      <button
                        key={index}
                        onClick={() => handleSkillSelect(index)}
                        className={`p-3 rounded-lg border transition-all duration-300 group relative overflow-hidden text-center ${
                          index === currentIndex
                            ? "border-green-500 bg-green-500/20"
                            : "border-green-500/30 bg-black/50 hover:border-green-400 hover:bg-green-500/10"
                        }`}
                        style={{
                          boxShadow:
                            index === currentIndex
                              ? `0 0 15px ${skill.accent}30`
                              : "none",
                        }}
                      >
                        <div
                          className={`${skill.color} transition-all duration-300 group-hover:scale-110 mb-2 flex justify-center`}
                        >
                          {React.cloneElement(skill.icon, { size: 48 })}
                        </div>
                        <div className="text-green-300 text-xs truncate">
                          {skill.name}
                        </div>
                        {index === currentIndex && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 animate-pulse"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
