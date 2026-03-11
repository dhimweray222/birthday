'use client';

export default function Hero() {
  const scrollToJourney = () => {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 text-center">
      {/* Background soft glowing blur shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/40 rounded-full blur-[80px] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="z-10 animate-[fadeIn_2s_ease-out_forwards] opacity-0">
        {/* Floating Couple Image with elegant soft gradient border */}
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[8px] border-white/50 shadow-[0_0_40px_rgba(200,107,133,0.3)] mx-auto mb-10 transition-transform duration-1000 md:hover:scale-[1.05] animate-[float_6s_ease-in-out_infinite] relative">
          <img 
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Us" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Glowing Title */}
        <div className="relative inline-block mt-4">
          <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full pointer-events-none transform scale-150"></div>
          <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-main mb-6 tracking-wide drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)] leading-tight">
            Happy Birthday, <br className="md:hidden" /><span className="text-accent italic">My Love</span> ❤️
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl font-medium text-text-main/80 mb-12 max-w-xl mx-auto leading-relaxed tracking-wide">
          Hari ini dunia lebih indah <br className="md:hidden" />karena kamu lahir.
        </p>

        <button 
          onClick={scrollToJourney}
          className="group relative px-12 py-4 bg-white/70 backdrop-blur-xl border border-white/80 text-text-main font-semibold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95 hover:shadow-[0_15px_40px_rgba(200,107,133,0.2)] mt-4"
        >
          <span className="relative z-10 tracking-[0.2em] font-sans text-xs font-bold uppercase text-accent group-hover:text-text-main transition-colors duration-500">Mulai Perjalanan</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-700"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
