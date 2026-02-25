'use client';

import { useEffect, useRef, useState } from 'react';
import { Confetti } from '../utils/Confetti';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SurpriseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<Confetti | null>(null);
  const btnRef = useScrollReveal();

  useEffect(() => {
    if (canvasRef.current && !confettiRef.current) {
      confettiRef.current = new Confetti(canvasRef.current);
    }
    
    const handleResize = () => {
      if (confettiRef.current) {
        confettiRef.current.resizeCanvas();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (confettiRef.current) {
        confettiRef.current.stop();
      }
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Slight delay to allow modal to render before starting confetti
    setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.start();
      }
    }, 100);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.stop();
      }
    }, 300); // match exit transition
  };

  return (
    <>
      <section id="surprise" className="py-24 px-6 flex justify-center items-center bg-transparent relative z-20">
        <div ref={btnRef as React.RefObject<HTMLDivElement>} className="scroll-reveal">
          <button 
            onClick={openModal}
            className="group relative px-12 py-5 bg-gradient-to-r from-primary to-accent text-text-main font-semibold rounded-full shadow-xl overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-primary/50"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg tracking-wide">
              Klik kalau kamu penasaran 💌
            </span>
            <div className="absolute inset-0 bg-white/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
      </section>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 px-6 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Dark Glass */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-md" 
          onClick={closeModal}
        ></div>
        
        {/* Confetti Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-[51] pointer-events-none"
        ></canvas>

        {/* Modal Content */}
        <div 
          className={`relative z-[52] bg-white/95 backdrop-blur-md w-full max-w-md rounded-3xl p-10 md:p-14 shadow-2xl text-center transform transition-all duration-500 border border-white ${
            isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'
          }`}
        >
          <button 
            onClick={closeModal}
            className="absolute top-5 right-5 text-text-main/40 hover:text-text-main transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div className="w-20 h-20 bg-gradient-to-br from-primary/50 to-secondary/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-white">
             <span className="text-4xl">💍</span>
          </div>
          
          <h3 className="font-serif text-3xl font-semibold mb-6 text-text-main tracking-wide">
            Kejutan! 🎉
          </h3>
          <p className="text-text-main/90 leading-relaxed text-lg tracking-wide">
            "Aku selalu bersyukur punya kamu.<br/>I love you more every day ❤️"
          </p>
        </div>
      </div>
    </>
  );
}
