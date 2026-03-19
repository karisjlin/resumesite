import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ number, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col ${alignClass} mb-12`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-cyan text-sm font-medium tracking-widest mb-2">{number}</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      <div className={`mt-3 h-0.5 w-12 bg-gradient-to-r from-violet to-cyan ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && <p className="mt-4 text-muted max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
