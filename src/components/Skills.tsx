"use client";

const skillCategories = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React", highlight: true },
      { name: "React Native", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Angular", highlight: false },
    ],
  },
  {
    category: "Backend",
    description: "Creating scalable server-side applications and APIs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "Laravel", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "SQLite", highlight: true },
      { name: "FastAPI", highlight: false },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Workflow and deployment tools",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0z" />
      </svg>
    ),
    skills: [
      { name: "Git", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Linux", highlight: true },
      { name: "Plesk", highlight: false },
      { name: "cPanel", highlight: false },
      { name: "Postman", highlight: false },
    ],
  },
];

const allTechs = ["React", "React Native", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Laravel", "Supabase", "SQLite", "Git", "Docker", "Linux"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm md:text-base">
            Technologies I use in real projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="glass rounded-xl p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    <span translate="no">{category.category}</span>
                  </h3>
                  <p className="text-xs text-muted">{category.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${skill.highlight ? "bg-primary" : "bg-muted/40"}`} />
                    <span
                      translate="no"
                      className={`text-sm ${skill.highlight ? "text-foreground font-medium" : "text-muted"}`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {allTechs.map((tech) => (
              <span
                key={tech}
                translate="no"
                className="px-3 py-1 text-xs bg-secondary/40 text-muted rounded-full border border-border/40"
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