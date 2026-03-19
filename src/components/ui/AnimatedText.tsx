import { useTypewriter } from '../../hooks/useTypewriter';

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

export function AnimatedText({ words, className = '' }: AnimatedTextProps) {
  const displayText = useTypewriter({ words });

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-violet ml-0.5">|</span>
    </span>
  );
}
