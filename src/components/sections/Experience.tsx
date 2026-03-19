import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineCard } from '../ui/TimelineCard';
import { experience } from '../../data/resume';

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          title="Work Experience"
          subtitle="A decade of shipping production code across eCommerce, fintech, and enterprise platforms."
        />

        <div ref={ref} className="relative">
          {/* Vertical timeline line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-violet to-cyan origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {experience.map((entry, index) => (
              <TimelineCard
                key={entry.id}
                entry={entry}
                side={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
