import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding bg-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="hidden lg:block">
                <br />
                <br />
                <br />
              </div>
              <h1 className="font-bold leading-tight">
                <span className="text-portfolio-text block mb-1 sm:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Hello World!
                </span>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <span className="text-portfolio-text inline-block mr-2">
                    I'm
                  </span>
                  <span className="gradient-text inline-block">
                    Omkar Phadatare
                  </span>
                </div>
                <div className="h-2 sm:h-3 lg:h-4"></div>
                <span className="text-portfolio-text block mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  Building intelligent
                </span>
                <span className="text-portfolio-text block mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  systems with
                </span>
                <span className="text-portfolio-tertiary block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 lg:mt-2">
                  AI/ML
                </span>
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/omkar703"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-portfolio-card border border-portfolio-border hover:border-portfolio-primary hover:bg-portfolio-primary/10 transition-all duration-300 hover-scale"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkarphadatare30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-portfolio-card border border-portfolio-border hover:border-portfolio-primary hover:bg-portfolio-primary/10 transition-all duration-300 hover-scale"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-primary" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="hero"
                onClick={scrollToContact}
                className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                CONTACT ME
              </Button>
              <Button
                variant="heroOutline"
                asChild
                className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <a
                  href="/Professional.pdf"
                  download="Omkar-Phadatare-Resume.pdf"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  GET RESUME
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Code Terminal */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="code-container hover-glow w-full max-w-lg mx-auto lg:max-w-none">
              <div className="code-header">
                <div className="code-dot code-red"></div>
                <div className="code-dot code-yellow"></div>
                <div className="code-dot code-green"></div>
              </div>
              <div className="code-content p-3 sm:p-4 lg:p-6">
                <pre className="text-xs sm:text-sm lg:text-sm leading-relaxed overflow-hidden">
                  <code className="block">
                    <div className="mb-1">
                      <span className="token-keyword">const</span>{" "}
                      <span className="text-portfolio-text">coder</span>{" "}
                      <span className="text-portfolio-text-muted">=</span>{" "}
                      <span className="text-portfolio-text-muted">&#123;</span>
                    </div>

                    <div className="ml-2 sm:ml-4 space-y-1">
                      <div>
                        <span className="token-property">name</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-string">'Omkar Phadatare'</span>
                        <span className="text-portfolio-text-muted">,</span>
                      </div>

                      <div>
                        <span className="token-property">skills</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="text-portfolio-text-muted">[</span>
                      </div>

                      <div className="ml-2 sm:ml-4 flex flex-wrap gap-1">
                        <span className="token-string">'React'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'Python'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'Express'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'FastAPI'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'Flask'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'C++'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'MySQL'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'MongoDB'</span>
                        <span className="text-portfolio-text-muted">,</span>
                        <span className="token-string">'Tailwind'</span>
                      </div>

                      <div>
                        <span className="text-portfolio-text-muted">],</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="token-property">smartWorker</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-boolean">true</span>
                        <span className="text-portfolio-text-muted">,</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="token-property">quickLearner</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-boolean">true</span>
                        <span className="text-portfolio-text-muted">,</span>
                      </div>

                      <div>
                        <span className="token-property">isAvailable</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-boolean">true</span>
                        <span className="text-portfolio-text-muted">,</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="token-property">problemSolver</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-boolean">true</span>
                        <span className="text-portfolio-text-muted">,</span>
                      </div>

                      <div className="hidden md:block">
                        <span className="token-property">languages</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="text-portfolio-text-muted">[</span>
                        <span className="token-string">'English'</span>
                        <span className="text-portfolio-text-muted">
                          ,
                        </span>{" "}
                        <span className="token-string">'Hindi'</span>
                        <span className="text-portfolio-text-muted">
                          ,
                        </span>{" "}
                        <span className="token-string">'Marathi'</span>
                        <span className="text-portfolio-text-muted">],</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="token-property">hireable</span>
                        <span className="text-portfolio-text-muted">
                          :
                        </span>{" "}
                        <span className="token-function">function</span>
                        <span className="text-portfolio-text-muted">
                          () &#123;
                        </span>
                      </div>

                      <div className="hidden sm:block ml-2 sm:ml-4">
                        <span className="token-keyword">return</span>{" "}
                        <span className="text-portfolio-text">this</span>
                        <span className="text-portfolio-text-muted">.</span>
                        <span className="token-property">isAvailable</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="text-portfolio-text-muted">
                          &#125;
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-portfolio-text-muted">&#125;;</span>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
