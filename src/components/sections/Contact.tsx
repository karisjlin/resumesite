import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/resume';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-cyan',
    border: 'hover:border-cyan/50',
    bg: 'hover:bg-cyan/5',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/linkaris',
    href: personalInfo.linkedin,
    color: 'text-violet-light',
    border: 'hover:border-violet/50',
    bg: 'hover:bg-violet/5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/karisjlin',
    href: personalInfo.github,
    color: 'text-text-primary',
    border: 'hover:border-border',
    bg: 'hover:bg-surface',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader number="04" title="Let's Build Something" align="center" />

        <motion.p
          className="text-muted mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a conversation
          about technology. Feel free to reach out through any of the channels below.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ icon: Icon, label, value, href, color, border, bg }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-6 bg-surface border border-border ${border} ${bg} rounded-xl transition-all duration-300 card-hover`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`w-10 h-10 rounded-lg bg-bg flex items-center justify-center ${color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="font-medium text-text-primary text-sm">{label}</p>
                <p className="text-muted text-xs font-mono mt-0.5">{value}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
