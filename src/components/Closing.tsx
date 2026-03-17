'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Closing() {
  const containerRef = useScrollReveal();

  return (
    <section id="closing" className="py-32 px-6 bg-transparent text-center border-t border-white/30">
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className="max-w-3xl mx-auto scroll-reveal"
      >
        <p className="text-sm text-text-main/80 pt-10 pb-10 font-sans tracking-wide">Made with ❤️ for you</p>
      </div>
    </section>
  );
}
