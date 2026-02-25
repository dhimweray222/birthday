'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Journey() {
  const headerRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();
  const card3Ref = useScrollReveal();

  return (
    <section id="journey" className="py-32 px-6 max-w-6xl mx-auto">
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>} 
        className="text-center mb-20 scroll-reveal"
      >
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-main tracking-wide">
          <span className="italic font-light text-accent mr-2">Our</span>Journey
        </h2>
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"></div>
        <p className="mt-8 text-lg font-serif italic text-text-main/70 tracking-wide">
          Momen-momen indah yang tak akan terlupakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* Timeline Item 1 */}
        <div 
          ref={card1Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_10px_40px_rgba(200,107,133,0.1)] border border-white/80 hover:shadow-[0_20px_50px_rgba(200,107,133,0.2)] transition-all duration-700 md:hover:-translate-y-4 group scroll-reveal"
        >
          <div className="overflow-hidden rounded-[2rem] rounded-tr-[4rem] mb-8 h-80 relative">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="First Meet" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.15]" 
            />
          </div>
          <div className="px-4 text-center">
            <h3 className="font-serif text-3xl font-semibold mb-3 tracking-wide text-text-main">First Meet</h3>
            <div className="h-[1px] w-12 bg-accent/40 mx-auto my-4"></div>
            <p className="text-sm md:text-base text-text-main/70 leading-relaxed font-sans font-light">
              Awal dari segalanya. Hari di mana aku menemukan bagian diriku yang hilang.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div 
          ref={card2Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_10px_40px_rgba(200,107,133,0.1)] border border-white/80 hover:shadow-[0_20px_50px_rgba(200,107,133,0.2)] transition-all duration-700 md:hover:-translate-y-4 group scroll-reveal delay-100"
        >
          <div className="overflow-hidden rounded-[2rem] rounded-tl-[4rem] mb-8 h-80 relative">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1554162985-e2162ea6acaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="First Date" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.15]" 
            />
          </div>
          <div className="px-4 text-center">
            <h3 className="font-serif text-3xl font-semibold mb-3 tracking-wide text-text-main">First Date</h3>
            <div className="h-[1px] w-12 bg-accent/40 mx-auto my-4"></div>
            <p className="text-sm md:text-base text-text-main/70 leading-relaxed font-sans font-light">
              Detak jantung yang tak karuan, senyum malu-malu, dan tatapan penuh harap.
            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div 
          ref={card3Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_10px_40px_rgba(200,107,133,0.1)] border border-white/80 hover:shadow-[0_20px_50px_rgba(200,107,133,0.2)] transition-all duration-700 md:hover:-translate-y-4 group scroll-reveal delay-200"
        >
          <div className="overflow-hidden rounded-[2rem] rounded-tr-[4rem] mb-8 h-80 relative">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Best Memory" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.15]" 
            />
          </div>
          <div className="px-4 text-center">
            <h3 className="font-serif text-3xl font-semibold mb-3 tracking-wide text-text-main">Best Memory</h3>
            <div className="h-[1px] w-12 bg-accent/40 mx-auto my-4"></div>
            <p className="text-sm md:text-base text-text-main/70 leading-relaxed font-sans font-light">
              Setiap detik bersamamu adalah memori terbaik yang pernah aku miliki.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
