import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={init as never}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 55, density: { enable: true } },
          color: { value: ['#355E3B', '#06b6d4'] },
          opacity: { value: { min: 0.1, max: 0.35 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            color: '#355E3B',
            opacity: 0.12,
            distance: 150,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
