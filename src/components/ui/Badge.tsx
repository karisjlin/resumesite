interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline' | 'present';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const base = 'inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium transition-colors duration-200';

  const variants: Record<string, string> = {
    default: 'bg-surface border border-border text-text-primary hover:border-violet/60',
    accent: 'bg-violet/20 border border-violet/50 text-violet-light',
    outline: 'border border-cyan/50 text-cyan bg-transparent hover:bg-cyan/10',
    present: 'bg-cyan/20 border border-cyan/50 text-cyan',
  };

  return <span className={`${base} ${variants[variant]}`}>{label}</span>;
}
