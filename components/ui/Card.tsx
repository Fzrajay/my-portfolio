import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-[0_0_40px_rgba(6,182,212,.15)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}