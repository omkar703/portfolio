import { Github, Linkedin, Download, Mail, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,
          .slide-in-right {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section
        id="about"
        className="min-h-screen flex items-center bg-black px-4 sm:px-6 lg:px-8 font-mono"
      >
        <div className="max-w-6xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Content - Main Info */}
            <div className="lg:col-span-3 space-y-12 fade-in-up">
              {/* Main Heading */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-300 leading-tight">
                    Hello World!
                  </h1>
                  <p className="text-4xl lg:text-5xl font-bold text-gray-300">
                    I'm <span className="text-green-500">Omkar Phadatare</span>
                  </p>
                </div>
                <div className="h-1 w-20 bg-green-500"></div>
                <p className="text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl">
                  AI/ML Developer building intelligent systems with Deep
                  Learning & Robotics.
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Specializing in deep learning, computer vision, and NLP. I
                design and deploy production-ready AI systems using PyTorch,
                TensorFlow, and modern web technologies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover-lift text-base"
                  aria-label="Contact Me"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/Professional.pdf"
                  download="Omkar-Phadatare-Resume.pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black border-2 border-gray-800 text-gray-300 font-bold rounded hover:border-green-500 hover:text-green-400 transition-all hover-lift text-base"
                  aria-label="Download Resume"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/omkar703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black border border-gray-800 text-gray-500 hover:border-green-500 hover:text-green-400 transition-all hover-lift"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omkarphadatare30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black border border-gray-800 text-gray-500 hover:border-green-500 hover:text-green-400 transition-all hover-lift"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Info Grid */}
            <div
              className="lg:col-span-2 space-y-8 slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">
                  Available for Work
                </span>
              </div>

              {/* Info Grid */}
              <div className="space-y-8">
                {/* Location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs uppercase tracking-wider">
                      Based in
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg">Bhopal, India</p>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs uppercase tracking-wider">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "PyTorch",
                      "TensorFlow",
                      "React",
                      "Node.js",
                      "FastAPI",
                      "MongoDB",
                      "Docker",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-black border border-gray-800 rounded text-gray-400 text-sm hover:border-green-500 hover:text-green-400 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs uppercase tracking-wider">
                      Focus Areas
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Deep Learning",
                      "Computer Vision",
                      "Natural Language Processing",
                      "Full-Stack Development",
                    ].map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-gray-900">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold text-green-500">2+</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-500">10+</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Projects Built
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
