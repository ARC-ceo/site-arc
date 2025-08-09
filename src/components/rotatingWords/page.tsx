'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react';

interface RotatingWordsProps {
  baseText?: string;
  rotatingWords: string[];
  rotateInterval?: number;       // ms
  animationDuration?: number;    // ms
  textClassName?: string;        // classes do <h1>
  rotatingWordClassName?: string;// classes do span rotativo
  align?: 'left' | 'center' | 'right';
  respectReducedMotion?: boolean; // se true, pausa animações quando o SO pede
}

const RotatingWords: React.FC<RotatingWordsProps> = ({
  baseText = '',
  rotatingWords,
  rotateInterval = 3000,
  animationDuration = 600,
  textClassName = 'font-bold text-white text-[24px] sm:text-3xl md:text-5xl leading-tight',
  rotatingWordClassName = 'text-white whitespace-pre-line',
  align = 'left',
  respectReducedMotion = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const alignClass = useMemo(() => {
    if (align === 'center') return 'text-center';
    if (align === 'right') return 'text-right';
    return 'text-left';
  }, [align]);

  useEffect(() => {
    if (rotatingWords.length <= 1) return;

    // checa prefers-reduced-motion só se a prop pedir
    const reduce =
      respectReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) return;

    const tick = () => {
      setFade(true);
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(false);
      }, animationDuration / 2);
    };

    // roda já uma vez para não esperar o primeiro intervalo inteiro
    tick();
    intervalRef.current = window.setInterval(tick, rotateInterval);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [rotatingWords.length, rotateInterval, animationDuration, respectReducedMotion]);

  if (rotatingWords.length === 0) {
    return <h1 className={`${textClassName} ${alignClass}`}>{baseText}</h1>;
  }

  return (
    <h1 className={`${textClassName} ${alignClass}`} aria-live="polite">
      {baseText ? <span className="whitespace-pre-line">{baseText} </span> : null}
      <span className={`relative inline-grid ${rotatingWordClassName}`} style={{ lineHeight: '1.2' }}>
        <span
          className={`transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}
          style={{ transitionDuration: `${animationDuration}ms` }}
        >
          {rotatingWords[currentIndex]}
        </span>
      </span>
    </h1>
  );
};

export default RotatingWords;
