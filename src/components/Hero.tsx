export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-dvh flex flex-col justify-center relative overflow-hidden py-20 md:py-24 lg:py-28"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* blur blobs (mobile optimize) */}
        <div className="absolute top-1/4 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px]" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-white">
          Hi, I&apos;m
          <br />
          <span className="mt-1 inline-block">Mert</span>
        </h1>

        <div className="mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
            <span className="text-primary font-medium">
              Full Stack Developer
            </span>
          </h2>
        </div>

        <div className="max-w-xl lg:max-w-2xl mx-auto p-4 md:p-6 rounded-2xl mb-8 md:mb-12 bg-white/5 backdrop-blur-md md:backdrop-blur-lg border border-white/10">
          <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed">
            I build user-focused, performant and scalable applications using modern web technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">

          <a
            href="#projects"
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-white bg-primary hover:bg-primary-hover transition-colors text-sm md:text-base flex items-center justify-center gap-2"
          >
            View Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="group px-6 md:px-8 py-3 md:py-4 rounded-full font-medium border border-border text-muted hover:text-white hover:border-primary transition-colors text-sm md:text-base flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </a>

        </div>

        <div className="mt-14 md:mt-16 lg:mt-20">
          <p className="text-muted text-sm mb-4">
            Technologies I work with
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["React", "React Native", "Next.js", "TypeScript", "Laravel", "Supabase"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 text-xs md:text-sm font-mono text-muted border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}