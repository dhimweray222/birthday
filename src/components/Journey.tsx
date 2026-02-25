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
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-text-main tracking-wide">
          Our Journey
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-8 text-lg font-medium text-text-main/80 tracking-wide">
          Momen-momen indah yang tak terlupakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* Timeline Item 1 */}
        <div 
          ref={card1Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group scroll-reveal"
        >
          <div className="overflow-hidden rounded-xl mb-6 h-72">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="First Meet" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="p-3 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3 tracking-wide text-text-main">First Meet</h3>
            <p className="text-sm md:text-base text-text-main/80 leading-relaxed">
              Awal dari segalanya. Hari di mana aku menemukan bagian diriku yang hilang.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div 
          ref={card2Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group scroll-reveal delay-100"
        >
          <div className="overflow-hidden rounded-xl mb-6 h-72">
            <img 
              src="https://images.unsplash.com/photo-1554162985-e2162ea6acaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="First Date" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="p-3 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3 tracking-wide text-text-main">First Date</h3>
            <p className="text-sm md:text-base text-text-main/80 leading-relaxed">
              Detak jantung yang tak karuan, senyum malu-malu, dan tatapan penuh harap.
            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div 
          ref={card3Ref as React.RefObject<HTMLDivElement>} 
          className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group scroll-reveal delay-200"
        >
          <div className="overflow-hidden rounded-xl mb-6 h-72">
            <img 
              src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Best Memory" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="p-3 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3 tracking-wide text-text-main">Best Memory</h3>
            <p className="text-sm md:text-base text-text-main/80 leading-relaxed">
              Setiap detik bersamamu adalah memori terbaik yang pernah aku miliki.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
