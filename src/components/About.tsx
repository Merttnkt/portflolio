export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-60 h-60 md:w-72 md:h-72 bg-primary/5 rounded-full blur-[30px] md:blur-2xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-60 h-60 md:w-72 md:h-72 bg-blue-500/5 rounded-full blur-[30px] md:blur-2xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* MAIN CARD */}
          <div className="rounded-3xl p-6 md:p-8 mb-6 bg-white/5 border border-white/10 backdrop-blur-md md:backdrop-blur-lg">

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">

              {/* AVATAR */}
              <div className="flex justify-center md:justify-start">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    M
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">
                  Mert
                </h3>

                <p className="text-primary mb-4">
                  Full Stack Developer
                </p>

                <p className="text-muted leading-relaxed mb-5">
                  Computer Engineer from Turkey passionate about building modern, scalable web applications.
                  I focus on creating{" "}
                  <span className="text-foreground">clean, efficient code</span>{" "}
                  and delivering exceptional user experiences.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["React", "React Native", "Next.js", "TypeScript", "Laravel", "Supabase", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      translate="no"
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">

            {[
              {
                title: "Web Development",
                desc: "Modern & responsive web apps",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              },
              {
                title: "Mobile Development",
                desc: "Cross-platform mobile apps",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              },
              {
                title: "Backend Development",
                desc: "Scalable APIs & databases",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-4 md:p-6 text-center bg-white/5 border border-white/10 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>

                <p className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {item.title}
                </p>

                <p className="text-xs text-muted">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}