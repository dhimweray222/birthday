"use client";

import { useEffect, useRef, useState } from "react";
import { Confetti } from "../utils/Confetti";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SurpriseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<Confetti | null>(null);
  const btnRef = useScrollReveal();

  // Initialize confetti
  useEffect(() => {
    if (canvasRef.current && !confettiRef.current) {
      confettiRef.current = new Confetti(canvasRef.current);
    }

    const handleResize = () => {
      if (confettiRef.current) {
        confettiRef.current.resizeCanvas();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (confettiRef.current) {
        confettiRef.current.stop();
      }
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);

    // Prevent scroll but avoid layout shift by padding the scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Slight delay to allow modal to render before starting confetti
    setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.start();
      }
    }, 150);
  };

  const closeModal = () => {
    setIsOpen(false);

    // Delay removing the overflow hidden to match the exit CSS transition (500ms)
    setTimeout(() => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (confettiRef.current) {
        confettiRef.current.stop();
      }
    }, 500);
  };

  return (
    <>
      {/* Trigger Section */}
      <section
        id="surprise"
        className="py-20 md:py-32 px-4 flex justify-center items-center relative z-20"
      >
        <div
          ref={btnRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal w-full max-w-sm md:max-w-md mx-auto relative group"
        >
          {/* Animated Glow Behind Button */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

          <button
            onClick={openModal}
            className="relative w-full px-6 py-5 md:py-6 bg-white border border-white/50 backdrop-blur-xl text-text-main font-bold rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-95 flex justify-center items-center gap-3 group"
          >
            <span className="text-xl md:text-2xl animate-bounce">🎁</span>
            <span className="relative z-10 text-sm sm:text-base md:text-lg tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary transition-all duration-500">
              Ada Kejutan!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></div>
          </button>
        </div>
      </section>

      {/* Modal Overlay Base */}
      {/* We use generalized fixed positioning. The pointer-events toggle allows clicks to pass through when closed. */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Glass Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeModal}
        ></div>

        {/* Confetti Layer (Behind Modal Content) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-[101] pointer-events-none"
        ></canvas>

        {/* Modal Card */}
        <div
          className={`relative z-[102] w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/60 p-8 md:p-12 text-center transform transition-all duration-500 delay-75 ${
            isOpen
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-75 translate-y-12 opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
            aria-label="Tutup"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Main Icon */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
              <span className="text-4xl md:text-5xl">💝</span>
            </div>
          </div>

          {/* Header */}
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-text-main">
            Happy Birthday!
          </h3>

          {/* Divider */}
          <div className="w-16 h-1 bg-accent/30 mx-auto rounded-full mb-6"></div>

          {/* Body */}
          <p className="text-text-main/80 text-base md:text-lg leading-relaxed mb-8 px-2">
            Terima kasih sudah lahir dan bertahan sampai hari ini. Dunia punya
            banyak cerita baik sejak ada kamu di dalamnya! ❤️
          </p>

          {/* Action Button */}
          <button
            onClick={closeModal}
            className="w-full bg-text-main text-white font-medium rounded-xl py-3 md:py-4 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Tutup
          </button>
        </div>
      </div>
    </>
  );
}
