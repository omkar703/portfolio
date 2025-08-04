import { GraduationCap, Calendar } from "lucide-react";

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
    <section id="education" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - 3D Education Illustration */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative w-80 h-80">
              {/* Base Platform */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg opacity-80"></div>

              {/* Main Isometric Shape */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-48">
                {/* Front Face */}
                <div className="absolute bottom-0 left-0 w-64 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg"></div>

                {/* Top Face */}
                <div className="absolute top-0 left-8 w-64 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg transform -skew-x-12 -skew-y-12"></div>

                {/* Side Face */}
                <div className="absolute bottom-0 right-0 w-16 h-32 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-r-lg"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-portfolio-primary rounded-lg animate-float opacity-80 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div
                className="absolute top-16 right-8 w-8 h-8 bg-portfolio-secondary rounded-full animate-float opacity-70"
                style={{ animationDelay: "1s" }}
              ></div>

              <div
                className="absolute bottom-20 right-4 w-6 h-6 bg-portfolio-tertiary rounded animate-float opacity-60"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Decorative Lines */}
              <div className="absolute top-24 left-16 w-16 h-1 bg-portfolio-primary rounded animate-pulse"></div>
              <div
                className="absolute top-32 left-20 w-12 h-1 bg-portfolio-secondary rounded animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-40 left-24 w-8 h-1 bg-portfolio-tertiary rounded animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Right Content - Education Timeline */}
          <div className="space-y-8 animate-slide-in-right">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-portfolio-card hover-scale ${
                  edu.isActive
                    ? "bg-portfolio-gradient-card border-portfolio-primary shadow-portfolio-primary"
                    : "bg-portfolio-card border-portfolio-border"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      edu.isActive
                        ? "bg-portfolio-primary"
                        : "bg-portfolio-border"
                    }`}
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-portfolio-text">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-portfolio-tertiary font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-portfolio-primary">
                      {edu.institution}
                    </h4>

                    <p className="text-portfolio-text-muted leading-relaxed">
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
  );
};

export default EducationSection;
