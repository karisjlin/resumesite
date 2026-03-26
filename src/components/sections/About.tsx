import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo, education } from '../../data/resume';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio + education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted leading-relaxed mb-6">{personalInfo.summary}</p>

            <ul className="space-y-2.5 mb-8">
              {personalInfo.devFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm text-muted">
                  <span className="font-mono text-cyan shrink-0 mt-0.5 select-none">//</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            {/* Education card */}
            <div className="bg-bg border border-border rounded-xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-violet/20 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-violet-light" />
              </div>
              <div>
                <p className="font-display font-semibold text-text-primary">
                  {education.degree} {education.field}
                </p>
                <p className="text-muted text-sm">{education.institution}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-mono text-xs text-cyan">{education.year}</span>
                  <span className="font-mono text-xs text-muted">GPA {education.gpa}</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-5 text-muted text-sm">
              <MapPin size={14} className="text-violet" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Right: quick stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {[
              { value: '9+', label: 'yrs in prod' },
              { value: '3', label: 'eng orgs' },
              { value: '$3.5M', label: 'revenue served' },
              { value: '4', label: 'teams shipped' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-bg border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center card-hover"
              >
                <span className="font-display font-bold text-3xl gradient-text mb-1">{stat.value}</span>
                <span className="font-mono text-muted text-xs">{stat.label}</span>
              </div>
            ))}

            {/* Full-width "currently" card — terminal style */}
            <div className="col-span-2 bg-bg border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border bg-surface">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <span className="font-mono text-xs text-muted ml-2">status.sh</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1">
                <p><span className="text-violet-light">$</span> <span className="text-cyan">whoami</span></p>
                <p className="text-text-primary pl-3">Full Stack Developer @ SpeedCast</p>
                <p className="mt-1"><span className="text-violet-light">$</span> <span className="text-cyan">git log --oneline -1</span></p>
                <p className="text-muted pl-3">eCommerce integrations &amp; CI/CD infrastructure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
