"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted/50 text-sm">
          © {new Date().getFullYear()} Mert. All rights reserved.
        </p>
        <p className="text-muted/50 text-sm">
          Designed & Built by{" "}
          <span className="text-primary/70 font-medium">Mert</span>
        </p>
      </div>
    </footer>
  );
}