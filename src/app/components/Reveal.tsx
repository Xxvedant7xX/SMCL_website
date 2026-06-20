import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up:    'opacity:0;transform:translateY(40px)',
    left:  'opacity:0;transform:translateX(-40px)',
    right: 'opacity:0;transform:translateX(40px)',
    fade:  'opacity:0',
  };

  const getStyle = (): React.CSSProperties => {
    if (visible) return {
      opacity: 1,
      transform: 'translate(0)',
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    };
    const base: React.CSSProperties = { opacity: 0, transition: 'none' };
    if (direction === 'up')    return { ...base, transform: 'translateY(40px)' };
    if (direction === 'left')  return { ...base, transform: 'translateX(-40px)' };
    if (direction === 'right') return { ...base, transform: 'translateX(40px)' };
    return base;
  };

  return (
    <div ref={ref} style={getStyle()} className={className}>
      {children}
    </div>
  );
}
