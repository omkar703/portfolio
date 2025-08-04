import { useState, useEffect, useRef } from "react";

// Custom Hook: Detect when an element is in the viewport
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null);
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

const AboutSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const { ref: sectionRef, isInView: isSectionInView } = useInView({
    threshold: 0.15,
  });

  const aboutText = `> Initializing Omkar_Phadatare.exe...
> SYSTEM SCAN COMPLETE
> -------------------
> IDENTITY: Omkar Phadatare
> Core Interests: AI | ML | Deep Learning | Computer Vision | LLMs
> PROCESSING CAPABILITIES:
> - Design/Develop/Deploy AI Systems ✓
> - Cross-functional Team Leadership ✓
> _`;

  useEffect(() => {
    if (!isSectionInView) {
      setTypedText("");
      return;
    }
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < aboutText.length) {
        setTypedText(aboutText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, [aboutText, isSectionInView]);

  useEffect(() => {
    if (!isSectionInView) return;
    const scanningInterval = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 1500);
    }, 8000);
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 6000);
    return () => {
      clearInterval(scanningInterval);
      clearInterval(glitchInterval);
    };
  }, [isSectionInView]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-black relative overflow-hidden font-mono py-12 sm:py-16 transition-all duration-1000 ${
        isSectionInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
      </div>

      <div className="relative z-10 mb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/80 border border-green-500/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-4">
                about-dev v3.2.1
              </span>
            </div>
            <div className="text-green-400 text-sm sm:text-lg">
              <span className="text-green-500">$</span>{" "}
              ./scan_developer_profile.sh --verbose
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black/90 border border-green-500/50 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="bg-green-500/10 px-4 sm:px-6 py-3 border-b border-green-500/30">
                  <span className="text-green-400 text-lg">
                    IDENTITY_SCANNER.EXE
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div
                      className={`text-xl sm:text-2xl font-bold text-green-400 ${
                        glitchActive ? "animate-pulse" : ""
                      }`}
                    >
                      <span className="text-green-500">$</span> whoami
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl font-bold text-white leading-tight ${
                        glitchActive ? "text-red-400" : ""
                      }`}
                    >
                      I'm Omkar Phadatare, AI/ML Developer
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/90 border border-green-500/50 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20">
                <div className="bg-green-500/10 px-4 sm:px-6 py-3 border-b border-green-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-lg">
                      PROFILE_DATA.LOG
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 min-h-[24rem] overflow-hidden relative">
                  <div className="text-green-400 text-sm sm:text-base leading-relaxed transition-all duration-300">
                    <div className="whitespace-pre-wrap">{typedText}</div>
                    <span
                      className={`animate-pulse text-white ${
                        typedText.length === aboutText.length ? "hidden" : ""
                      }`}
                    >
                      _
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-green-500 to-cyan-500 h-1 rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(
                            (typedText.length / aboutText.length) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      Loading:{" "}
                      {Math.min(
                        Math.round((typedText.length / aboutText.length) * 100),
                        100
                      )}
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/90 border border-green-500/50 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="bg-green-500/10 px-4 sm:px-6 py-3 border-b border-green-500/30">
                  <span className="text-green-400 text-lg">
                    DEVELOPER_STATS.SYS
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "AI_PROJECTS", value: "15+" },
                      { label: "CODE_LINES", value: "50K+" },
                      { label: "YEARS_EXP", value: "2+" },
                      { label: "TECH_STACK", value: "3+" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="bg-green-500/10 border border-green-500/30 rounded p-3"
                      >
                        <div className="text-green-300 text-xs">
                          {stat.label}
                        </div>
                        <div className="text-white text-xl font-bold">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative mt-12 lg:mt-0">
              {/* --- ALL DECORATIVE ELEMENTS RESTORED BELOW --- */}
              {/* --- THEY ARE HIDDEN ON MOBILE FOR RESPONSIVENESS --- */}

              <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-green-500/50 to-transparent animate-pulse hidden lg:block"></div>
              <div
                className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-cyan-500/50 to-transparent animate-pulse hidden lg:block"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-0 w-20 h-px bg-gradient-to-r from-blue-500/50 to-transparent animate-pulse hidden lg:block"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="absolute top-1/4 left-20 w-3 h-3 bg-green-500 rounded-full animate-ping hidden lg:block"></div>
              <div
                className="absolute top-1/2 left-28 w-3 h-3 bg-cyan-500 rounded-full animate-ping hidden lg:block"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-16 w-3 h-3 bg-blue-500 rounded-full animate-ping hidden lg:block"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="absolute top-8 left-8 bg-black/80 border border-green-500/30 rounded p-3 backdrop-blur-sm hidden lg:block">
                <div className="text-green-400 text-xs">
                  <div>CPU: 98.7%</div>
                  <div>GPU: 100%</div>
                  <div>RAM: ++GB</div>
                  <div>NEURAL_NET: ACTIVE</div>
                </div>
              </div>
              <div className="absolute bottom-16 left-4 bg-black/80 border border-cyan-500/30 rounded p-3 backdrop-blur-sm hidden lg:block">
                <div className="text-cyan-400 text-xs">
                  <div>AI_MODELS: 24</div>
                  <div>DATASETS: --</div>
                  <div>TRAINING: --</div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-10 hidden lg:block">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0,255,0,0.3) 1px, transparent 1px), linear-gradient(rgba(0,255,0,0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>

              <div className="relative">
                <div
                  className={`relative transition-all duration-500 z-10 ${
                    isScanning ? "scale-105" : "scale-100"
                  }`}
                >
                  <div className="w-full max-w-sm mx-auto lg:w-96 lg:max-w-none h-[450px] sm:h-[500px] bg-black/90 border border-green-500/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                    <div className="bg-green-500/10 px-4 sm:px-6 py-3 border-b border-green-500/30">
                      <span className="text-green-400 text-lg">
                        VISUAL_PROFILE.IMG
                      </span>
                    </div>
                    <div className="p-4 sm:p-6 h-full flex flex-col">
                      <div className="flex-1 flex items-center justify-center relative">
                        <div className="relative w-full h-full">
                          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center relative">
                              <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  const fallback =
                                    document.getElementById("profile-fallback");
                                  if (fallback) fallback.style.display = "flex";
                                }}
                              />
                              <div
                                id="profile-fallback"
                                className="hidden absolute inset-0 flex-col items-center justify-center text-center space-y-4 p-6"
                              >
                                <div className="w-32 h-32 bg-green-500/20 rounded-full border border-green-500/50 flex items-center justify-center mx-auto">
                                  <svg
                                    className="w-16 h-16 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-12 h-12 border border-green-500/50 rounded bg-green-500/10 hidden lg:flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300">
                  <span className="text-green-400 text-xs font-bold">AI</span>
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-10 h-10 border border-cyan-500/50 rounded bg-cyan-500/10 hidden lg:flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-cyan-400 text-xs font-bold">ML</span>
                </div>
                <div
                  className="absolute top-1/2 -left-8 w-8 h-8 border border-blue-500/50 rounded bg-blue-500/10 hidden lg:flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-blue-400 text-xs font-bold">CV</span>
                </div>
                <div
                  className="absolute top-1/4 -right-8 w-6 h-6 border border-yellow-500/50 rounded bg-yellow-500/10 hidden lg:block animate-pulse hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-1"></div>
                </div>
                <div className="absolute top-12 -left-12 w-auto h-8 bg-black/80 border border-purple-500/30 rounded hidden lg:flex items-center justify-center px-2">
                  <span className="text-purple-400 text-xs whitespace-nowrap">
                    DEEP_LEARNING
                  </span>
                </div>
                <div className="absolute bottom-12 -right-12 w-14 h-8 bg-black/80 border border-orange-500/30 rounded hidden lg:flex items-center justify-center">
                  <span className="text-orange-400 text-xs">LLM</span>
                </div>

                <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-green-500/50 to-transparent animate-pulse hidden lg:block"></div>
                <div
                  className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-cyan-500/50 to-transparent animate-pulse hidden lg:block"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-0 h-px w-16 bg-gradient-to-r from-blue-500/50 to-transparent animate-pulse hidden lg:block"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 left-0 h-px w-12 bg-gradient-to-l from-purple-500/50 to-transparent animate-pulse hidden lg:block"
                  style={{ animationDelay: "3s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
