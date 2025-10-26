import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center bg-black px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        {/* Main Content */}
        <div className="space-y-6 text-center">
          {/* Greeting with refined typography */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none animate-fade-in">
            Omkar Phadatare
          </h1>

          {/* Tagline with better spacing */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light tracking-tight pt-2">
            AI/ML Developer specializing in Deep Learning & Robotics
          </p>

          {/* Description with improved readability */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed pt-4 font-light">
            Building intelligent systems with Computer Vision, NLP, and modern
            web technologies.
          </p>

          {/* CTA Buttons with Apple-style refinement */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-10">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="Professional.pdf"
              download="Omkar-Phadatare-Resume.pdf"
              className="flex items-center gap-2 px-7 py-3 text-white text-sm font-medium rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              View Resume
            </a>
          </div>

          {/* Social Links with refined hover effects */}
          <div className="flex items-center justify-center gap-8 pt-16">
            <a
              href="https://github.com/omkar703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omkarphadatare30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToContact}
              className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Subtle Location with divider */}
          <div className="pt-16 flex items-center justify-center gap-3">
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <p className="text-xs text-gray-600 font-light tracking-wide uppercase">
              Based in Bhopal, India
            </p>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
