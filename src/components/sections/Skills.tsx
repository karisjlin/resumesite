import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench, FlaskConical, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { skills } from '../../data/resume';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Wrench,
  FlaskConical,
  Cloud,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          title="Skills & Tools"
          subtitle="Technologies I've worked with across full-stack development, testing, and DevOps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = iconMap[group.icon] ?? Monitor;
            return (
              <motion.div
                key={group.category}
                className="bg-bg border border-border rounded-xl p-6 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet/20 flex items-center justify-center">
                    <Icon size={16} className="text-violet-light" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary">{group.category}</h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.skills.map((skill) => (
                    <motion.span key={skill} variants={item}>
                      <Badge label={skill} />
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
