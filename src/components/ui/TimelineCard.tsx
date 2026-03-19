import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Badge } from './Badge';
import type { ExperienceEntry } from '../../types';

interface TimelineCardProps {
  entry: ExperienceEntry;
  side: 'left' | 'right';
  index: number;
}

export function TimelineCard({ entry, side, index }: TimelineCardProps) {
  const isLeft = side === 'left';

  return (
    <motion.div
      className={`relative w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* Connector dot — hidden on mobile, shown on md+ */}
      <div
        className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-violet border-2 border-bg z-10 ${
          isLeft ? '-right-[1.65rem]' : '-left-[1.65rem]'
        }`}
      />

      <div className="bg-surface border border-border rounded-xl p-6 card-hover">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-semibold text-lg text-text-primary">{entry.role}</h3>
            <p className="text-violet-light font-medium">{entry.company}</p>
          </div>
          {entry.endDate === 'Present' ? (
            <Badge label="Present" variant="present" />
          ) : null}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {entry.location} · {entry.type}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {entry.startDate} – {entry.endDate}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {entry.highlights.map((h, i) => (
            <li key={i} className="text-sm text-muted flex gap-2">
              <span className="text-violet mt-1 shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <Badge key={tech} label={tech} variant="accent" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
