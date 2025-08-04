import { User, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    // {
    //   title: 'FULLSTACK DEVELOPER',
    //   company: '---',
    //   period: '(Aug 2022 - Sep 2024)',
    //   description: 'Developed and maintained full-stack web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions and implemented responsive designs with modern frameworks.',
    //   isHighlighted: false,
    // },
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
    <section id="experience" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Experiences
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - 3D Illustration */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              {/* 3D Laptop Illustration */}
              <div className="w-80 h-80 relative">
                {/* Laptop Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-portfolio-gradient-primary rounded-lg opacity-80"></div>

                {/* Laptop Screen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-40 bg-portfolio-card border-2 border-portfolio-border rounded-lg">
                  <div className="p-4 h-full">
                    <div className="w-full h-full bg-portfolio-dark rounded border border-portfolio-border overflow-hidden">
                      {/* Code lines */}
                      <div className="p-3 space-y-1">
                        <div className="h-2 bg-portfolio-primary rounded w-3/4"></div>
                        <div className="h-2 bg-portfolio-secondary rounded w-1/2"></div>
                        <div className="h-2 bg-portfolio-tertiary rounded w-5/6"></div>
                        <div className="h-2 bg-portfolio-primary rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Icon */}
                <div className="absolute top-0 right-0 w-16 h-20 bg-portfolio-gradient-secondary rounded-lg animate-float opacity-80 flex items-center justify-center">
                  <div className="w-8 h-8 bg-portfolio-tertiary rounded opacity-60"></div>
                </div>

                {/* Coffee Cup */}
                <div
                  className="absolute top-16 left-0 w-12 h-16 bg-portfolio-primary rounded-full animate-float opacity-60"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Content - Experience Timeline */}
          <div className="space-y-8 animate-slide-in-right">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-portfolio-card hover-scale ${
                  exp.isHighlighted
                    ? "bg-portfolio-gradient-card border-portfolio-primary shadow-portfolio-primary"
                    : "bg-portfolio-card border-portfolio-border"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      exp.isHighlighted
                        ? "bg-portfolio-primary"
                        : "bg-portfolio-border"
                    }`}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-portfolio-text">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-portfolio-tertiary font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-portfolio-primary">
                      {exp.company}
                    </h4>

                    <p className="text-portfolio-text-muted leading-relaxed">
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
  );
};

export default ExperienceSection;
