"use client";

export default function ProjectSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="animate-pulse space-y-4">

        {/* Image */}
        <div className="h-48 rounded-xl bg-secondary/40" />

        {/* Title */}
        <div className="h-6 w-2/3 rounded-md bg-secondary/40" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-secondary/40" />
          <div className="h-4 w-5/6 rounded bg-secondary/40" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-full bg-secondary/40" />
          <div className="h-5 w-16 rounded-full bg-secondary/40" />
          <div className="h-5 w-12 rounded-full bg-secondary/40" />
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <div className="h-4 w-16 rounded bg-secondary/40" />
          <div className="h-4 w-12 rounded bg-secondary/40" />
        </div>

      </div>
    </div>
  );
}