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
        <div className="mb-16">
          <p className="text-accent italic font-serif text-xl mb-4">Menuju Hari Sakral Kita</p>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-text-main tracking-wider cursor-default">
            17 Maret 2026
          </h3>
          <div className="h-[1px] w-24 bg-accent/50 mx-auto mt-6"></div>
        </div>
        
        <div className="flex justify-center gap-4 md:gap-8 mb-20" id="countdown-container">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_rgba(200,107,133,0.1)] border border-white/80 flex items-center justify-center text-3xl md:text-5xl font-bold font-serif text-text-main mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(200,107,133,0.2)] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent"></div>
              <span className="relative z-10">{timeLeft.days.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-accent">Hari</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_rgba(200,107,133,0.1)] border border-white/80 flex items-center justify-center text-3xl md:text-5xl font-bold font-serif text-text-main mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(200,107,133,0.2)] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent"></div>
              <span className="relative z-10">{timeLeft.hours.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-accent">Jam</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_rgba(200,107,133,0.1)] border border-white/80 flex items-center justify-center text-3xl md:text-5xl font-bold font-serif text-text-main mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(200,107,133,0.2)] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent"></div>
              <span className="relative z-10">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-accent">Menit</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_30px_rgba(200,107,133,0.1)] border border-white/80 flex items-center justify-center text-3xl md:text-5xl font-bold font-serif text-text-main mb-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(200,107,133,0.2)] relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent"></div>
              <span className="relative z-10">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] text-accent">Detik</span>
          </div>
        </div>
        
        <p className="text-sm text-text-main/80 mt-20 font-sans tracking-wide">Made with ❤️ for you</p>
      </div>
    </section>
  );
}
