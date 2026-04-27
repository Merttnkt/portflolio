const email = "mert.tankit".concat("@", "gmail.com");

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Merttnkt",
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.8-.26.8-.58v-2.03c-3.34.73-4.03-1.41-4.03-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.69.8.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mert-tankit",
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 5 3.77 6.2 2.28 6.2 0.8 6.2-.4 5 0 3.5.4 2 1.6 1 3.1 1c1.5 0 2.7 1.2 1.88 2.5zM.3 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: `mailto:${email}`,
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];
export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-secondary/20">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact
        </h2>

        <p className="text-muted text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Have a project idea? Let&apos;s work together.
        </p>

        {/* CARD */}
        <div className="rounded-2xl p-6 md:p-10 bg-white/5 border border-white/10 backdrop-blur-md md:backdrop-blur-lg">

          <div className="text-center mb-10">
            <p className="text-2xl md:text-3xl font-semibold mb-3">
              Say Hello
            </p>

            <a
              href={`mailto:${email}`}
              className="text-lg md:text-2xl text-primary hover:opacity-80 transition-opacity"
            >
              {email}
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>



      </div>
    </section>
  );
}