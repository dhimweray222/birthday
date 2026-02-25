'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect } from 'react';

export default function Closing() {
  const containerRef = useScrollReveal();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('March 17, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="closing" className="py-32 px-6 bg-transparent text-center border-t border-white/30">
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className="max-w-3xl mx-auto scroll-reveal"
      >
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-16 text-text-main tracking-widest uppercase cursor-default">
          Menuju 17 Maret 2026.
        </h3>
        
        <div className="flex justify-center gap-2 md:gap-10 mb-20" id="countdown-container">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_16px_rgba(251,207,232,0.6)] border border-white flex items-center justify-center text-2xl md:text-4xl font-bold font-serif text-text-main mb-4 transition-transform hover:scale-105">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-text-main/80">Hari</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_16px_rgba(251,207,232,0.6)] border border-white flex items-center justify-center text-2xl md:text-4xl font-bold font-serif text-text-main mb-4 transition-transform hover:scale-105">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-text-main/80">Jam</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_16px_rgba(251,207,232,0.6)] border border-white flex items-center justify-center text-2xl md:text-4xl font-bold font-serif text-text-main mb-4 transition-transform hover:scale-105">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-text-main/80">Menit</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_16px_rgba(251,207,232,0.6)] border border-white flex items-center justify-center text-2xl md:text-4xl font-bold font-serif text-text-main mb-4 transition-transform hover:scale-105">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-text-main/80">Detik</span>
          </div>
        </div>
        
        <p className="text-sm text-text-main/80 mt-20 font-sans tracking-wide">Made with ❤️ for you</p>
      </div>
    </section>
  );
}
