'use client'

import React, { useEffect, useState } from 'react';

interface RotatingWordsProps {
  baseText: string;
  rotatingWords: string[];
  rotateInterval?: number;
  animationDuration?: number;
  textClassName?: string;
  rotatingWordClassName?: string;
}

const RotatingWords: React.FC<RotatingWordsProps> = ({
  baseText,
  rotatingWords,
  rotateInterval = 3000,
  animationDuration = 1000,
  textClassName = 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900',
  rotatingWordClassName = 'text-blue-600',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (rotatingWords.length <= 1) return;

    const interval = setInterval(() => {
      // Inicia o fade out
      setFade(true);
      
      // Após metade da animação, muda a palavra e faz fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(false);
      }, animationDuration / 2);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [rotatingWords.length, rotateInterval, animationDuration]);

  if (rotatingWords.length === 0) {
    return <h1 className={textClassName}>{baseText}</h1>;
  }

  return (
    <h1 className={textClassName}>
      {baseText}{' '}
      <span className={`relative inline-block ${rotatingWordClassName}`}>
        <span 
          className={`transition-opacity duration-${animationDuration} ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {rotatingWords[currentIndex]}
        </span>
      </span>
    </h1>
  );
};

export default RotatingWords;