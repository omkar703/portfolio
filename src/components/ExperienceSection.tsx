import { User } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SELF EMPLOYED",
      company: "Freelance Developer",
      period: "(Jan 2023 - Present)",
      description:
        "Code and build something everyday. Working on personal projects, learning new technologies, and providing freelance development services to clients worldwide.",
      isHighlighted: true,
    },
  ];

  return (
    <>
      <style>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section
        id="experience"
        className="min-h-screen flex items-center bg-black px-4 sm:px-6 lg:px-8 py-20 font-mono"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-500">
              Professional journey and work history.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Terminal Illustration */}
            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative w-80 h-80">
                {/* Laptop Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-green-500/20 rounded-lg border border-green-500/30"></div>

                {/* Laptop Screen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-40 bg-black border-2 border-green-500/50 rounded-lg hover:border-green-500 transition-all">
                  <div className="p-4 h-full">
                    <div className="w-full h-full bg-black rounded border border-green-500/30 overflow-hidden">
                      {/* Terminal Header */}
                      <div className="flex items-center gap-1 px-2 py-1 border-b border-green-500/20 bg-black">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      {/* Code lines */}
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-green-500 rounded w-3/4"></div>
                        <div className="h-2 bg-green-400 rounded w-1/2"></div>
                        <div className="h-2 bg-green-500/60 rounded w-5/6"></div>
                        <div className="h-2 bg-green-400 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Icon */}
                <div className="absolute top-0 right-0 w-16 h-20 bg-black border-2 border-green-500/50 rounded-lg animate-float flex items-center justify-center hover:border-green-500 transition-all">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>

                {/* Coffee Cup */}
                <div
                  className="absolute top-16 left-0 w-12 h-16 bg-green-500 rounded-full animate-float border-2 border-green-500/50"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Right Content - Experience Timeline */}
            <div className="space-y-8 order-2 lg:order-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 hover-scale ${
                    exp.isHighlighted
                      ? "bg-black border-green-500 shadow-lg shadow-green-500/20"
                      : "bg-black border-green-500/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg border-2 flex-shrink-0 ${
                        exp.isHighlighted
                          ? "bg-green-500 border-green-500"
                          : "bg-black border-green-500/50"
                      }`}
                    >
                      <User
                        className={`w-5 h-5 ${
                          exp.isHighlighted ? "text-black" : "text-green-400"
                        }`}
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-300">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-green-400 font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-green-500">
                        {exp.company}
                      </h4>

                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
