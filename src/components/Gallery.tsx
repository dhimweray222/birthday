'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const headerRef = useScrollReveal();
  
  const photos = [
    "/foto/WhatsApp%20Image%202026-03-14%20at%2022.39.47.jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2010.51.51%20(1).jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2010.51.51%20(2).jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2010.51.51.jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.06.42%20(1).jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.06.42.jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.06.43%20(1).jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.06.43%20(2).jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.06.43.jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.17.18.jpeg",
    "/foto/WhatsApp%20Image%202026-03-17%20at%2011.17.19.jpeg"
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-pink-50/50 backdrop-blur-sm border-y border-white/40">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>} 
          className="text-center mb-16 md:mb-20 scroll-reveal"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-text-main tracking-wide">
            <span className="italic font-light text-accent mr-2">Beautiful</span>Memories
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"></div>
        </div>

        {/* 
          A 4-column grid with 4 rows. 
          Total slots: 4 x 4 = 16.
          Center image (index 5) takes 2x2 = 4 slots in the middle.
          The remaining 10 images take 1 slot each.
          10 (small) + 4 (center) + 2 (extra padding/spans) = 16.
          To make it exact for 11 photos:
          Row 1: 4 small photos (col-span-1)
          Row 2 & 3: 1 small photo (col-span-1), CENTER PHOTO (col-span-2 row-span-2), 1 small photo (col-span-1) -> this accounts for 4 photos + 1 large
          Row 4: 4 small photos (col-span-1)
          Total: 4 + 2 + 1(center) + 4 = 11 photos. Perfect fit for a perfectly aligned 4x4 grid bottom!
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[220px]">
          {photos.map((src, index) => {
            const cardRef = useScrollReveal();
            
            let spanClasses = "col-span-1 row-span-1";
            
            // To achieve the perfect center, the 5th image (index 4) should be the center.
            // Wait, flow layout:
            // index 0 -> row 1, col 1
            // index 1 -> row 1, col 2
            // index 2 -> row 1, col 3
            // index 3 -> row 1, col 4
            // index 4 -> row 2, col 1
            // index 5 -> row 2, col 2 (span 2x2) -> occupies row 2,3 col 2,3
            // index 6 -> row 2, col 4
            // index 7 -> row 3, col 1
            // index 8 -> row 3, col 4 (auto-flows because center occupies col 2,3)
            // index 9 -> row 4, col 1
            // index 10 -> row 4, col 2 (needs to span across remaining?) 
            // Wait, if it's 11 photos:
            // 4 (top) + 1 (middle-left) + 1 (center) + 1 (middle-right) + 1 (bottom-left) + 1 (middle-right-bottom) = wait.
             
            // Let's use specific grid column/row placements on desktop to ensure perfect composition.
            if (index === 0) spanClasses = "md:col-start-1 md:row-start-1 col-span-1 row-span-1";
            if (index === 1) spanClasses = "md:col-start-2 md:row-start-1 col-span-1 row-span-1";
            if (index === 2) spanClasses = "md:col-start-3 md:row-start-1 col-span-1 row-span-1";
            if (index === 3) spanClasses = "md:col-start-4 md:row-start-1 col-span-1 row-span-1";
            
            if (index === 4) spanClasses = "md:col-start-1 md:row-start-2 col-span-1 row-span-1"; // Left of center
            
            if (index === 5) spanClasses = "md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 col-span-2 row-span-2"; // CENTER HUGE
            
            if (index === 6) spanClasses = "md:col-start-4 md:row-start-2 col-span-1 row-span-1"; // Right of center
            
            if (index === 7) spanClasses = "md:col-start-1 md:row-start-3 col-span-1 row-span-1 md:block hidden"; // Left of center, bottom
            
            if (index === 8) spanClasses = "md:col-start-4 md:row-start-3 col-span-1 row-span-1 md:block hidden"; // Right of center, bottom
            
            if (index === 9) spanClasses = "md:col-start-2 md:col-span-1 md:row-start-4 col-span-1 row-span-1"; // Center bottom left
            
            if (index === 10) spanClasses = "md:col-start-3 md:col-span-1 md:row-start-4 col-span-1 row-span-1"; // Center bottom right
            
            // Adjust mobile classes to stack gracefully since mobile 4x4 grid is too small
            const mobileClasses = index === 5 ? "col-span-2 row-span-2" : (index >= 9 ? "col-span-2 text-center" : "col-span-1 row-span-1");

            return (
              <div 
                key={index}
                ref={cardRef as React.RefObject<HTMLDivElement>}
                className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_25px_rgba(200,107,133,0.12)] border-[3px] border-white/80 hover:border-white group scroll-reveal ${spanClasses} ${spanClasses.includes('hidden') ? '' : mobileClasses}`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none hover:bg-transparent"></div>
                <img 
                  src={src} 
                  alt={`Memory ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.08] block" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
