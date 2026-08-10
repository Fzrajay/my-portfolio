import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles = variant === 'primary' ? 'bg-cyan-500 hover:bg-cyan-400 text-white' : 'border border-slate-700 hover:border-cyan-500 text-white';

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-2xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${styles}
      `}
    >
      {children}

      <ArrowRight size={18} />
    </Link>
  );
}
