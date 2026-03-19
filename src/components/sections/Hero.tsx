import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { ParticleBackground } from '../ui/ParticleBackground';
import { AnimatedText } from '../ui/AnimatedText';
import { personalInfo } from '../../data/resume';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.p
          className="font-mono text-cyan text-sm tracking-widest uppercase mb-4"
          {...fadeUp(0.2)}
        >
          Helloo! This is
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-text-primary mb-4 leading-none"
          {...fadeUp(0.4)}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          className="font-display text-xl md:text-2xl text-muted mb-8 h-8"
          {...fadeUp(0.6)}
        >
          <AnimatedText words={personalInfo.title} className="text-violet-light" />
        </motion.div>

        {/* Summary teaser */}
        <motion.p
          className="text-muted max-w-xl mx-auto mb-10 leading-relaxed"
          {...fadeUp(0.8)}
        >
          9+ years building scalable web platforms, APIs, and eCommerce solutions.
          I bridge the gap between front-end craft and back-end architecture.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          {...fadeUp(1.0)}
        >
          <button
            onClick={() => scrollTo('experience')}
            className="px-6 py-3 bg-violet hover:bg-violet/90 text-white font-medium rounded-lg transition-all duration-200 glow-violet hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 border border-border hover:border-violet/60 text-text-primary font-medium rounded-lg transition-all duration-200 hover:bg-surface"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div className="flex items-center justify-center gap-5" {...fadeUp(1.1)}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-violet-light transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-cyan transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-violet-light transition-colors"
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
