import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "BACHELOR DEGREE",
      institution: "VIT Bhopal University",
      period: "2023 - Present",
      description:
        "Currently pursuing Bachelor's degree with focus on Electronics and Communication Engineering, specializing in Artificial Intelligence and Cybernetics.",
      isActive: true,
    },
    {
      degree: "HIGHER SECONDARY CERTIFICATE",
      institution: "Santmai Junior College",
      period: "2021 - 2023",
      description:
        "Completed secondary education with specialization in computer science fundamentals.",
      isActive: false,
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
        id="education"
        className="min-h-screen flex items-center bg-black px-4 sm:px-6 lg:px-8 py-20 font-mono"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-500">
              Academic journey and qualifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - 3D Education Illustration */}
            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative w-80 h-80">
                {/* Base Platform */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-green-500/20 rounded-lg border border-green-500/30"></div>

                {/* Main Isometric Book/Building */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-48">
                  {/* Front Face */}
                  <div className="absolute bottom-0 left-0 w-64 h-32 bg-black border-2 border-green-500/50 rounded-lg hover:border-green-500 transition-all"></div>

                  {/* Top Face */}
                  <div className="absolute top-0 left-8 w-64 h-32 bg-green-500/10 border-2 border-green-500/40 rounded-lg transform -skew-x-12 -skew-y-12 hover:border-green-500 transition-all"></div>

                  {/* Side Face */}
                  <div className="absolute bottom-0 right-0 w-16 h-32 bg-black border-r-2 border-t-2 border-b-2 border-green-500/50 rounded-r-lg hover:border-green-500 transition-all"></div>

                  {/* Book Details */}
                  <div className="absolute bottom-4 left-4 space-y-2 z-10">
                    <div className="w-32 h-2 bg-green-500 rounded"></div>
                    <div className="w-24 h-2 bg-green-400 rounded"></div>
                    <div className="w-28 h-2 bg-green-500/60 rounded"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-green-500 rounded-lg animate-float flex items-center justify-center border-2 border-green-500">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>

                <div
                  className="absolute bottom-20 right-4 w-6 h-6 bg-green-500/30 rounded animate-float border-2 border-green-500/50"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Decorative Lines */}
                <div className="absolute top-24 left-16 w-16 h-1 bg-green-500 rounded animate-pulse"></div>
                <div
                  className="absolute top-32 left-20 w-12 h-1 bg-green-400 rounded animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-40 left-24 w-8 h-1 bg-green-500/60 rounded animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Right Content - Education Timeline */}
            <div className="space-y-8 order-2 lg:order-2">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 hover-scale ${
                    edu.isActive
                      ? "bg-black border-green-500 shadow-lg shadow-green-500/20"
                      : "bg-black border-green-500/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg border-2 flex-shrink-0 ${
                        edu.isActive
                          ? "bg-green-500 border-green-500"
                          : "bg-black border-green-500/50"
                      }`}
                    >
                      <GraduationCap
                        className={`w-5 h-5 ${
                          edu.isActive ? "text-black" : "text-green-400"
                        }`}
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-300">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-green-400 font-medium">
                          {edu.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-green-500">
                        {edu.institution}
                      </h4>

                      <p className="text-gray-400 leading-relaxed">
                        {edu.description}
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

export default EducationSection;
