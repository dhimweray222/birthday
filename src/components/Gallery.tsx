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
    <section id="gallery" className="py-24 md:py-32 px-4 md:px-6 bg-pink-50/50 backdrop-blur-sm border-y border-white/40">
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

        {/* Patchwork Quilt Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[140px] md:auto-rows-[180px] lg:auto-rows-[220px]">
          {photos.map((src, index) => {
            const cardRef = useScrollReveal();
            
            // Definisikan layout patchwork yang unik di setiap device (M=Mobile 2-col, D=Desktop 4-col)
            let spanClasses = "";
            
            switch(index) {
              case 0: // Gambar 1: Besar di pojok kiri atas
                spanClasses = "col-span-2 row-span-2 md:col-span-2 md:row-span-2"; 
                break;
              case 1: // Gambar 2: Kecil di atas kanan
                spanClasses = "col-span-1 row-span-1 md:col-span-1 md:row-span-1"; 
                break;
              case 2: // Gambar 3: Tinggi di kanan
                spanClasses = "col-span-1 row-span-2 md:col-span-1 md:row-span-2"; 
                break;
              case 3: // Gambar 4: Kecil di tengah
                spanClasses = "col-span-1 row-span-1 md:col-span-1 md:row-span-1"; 
                break;
              case 4: // Gambar 5: Menengah/Tinggi di kiri
                spanClasses = "col-span-1 row-span-2 md:col-span-1 md:row-span-2"; 
                break;
              case 5: // Gambar 6: Kotak sedang (center-ish on desktop)
                spanClasses = "col-span-1 row-span-1 md:col-span-2 md:row-span-1"; // Wide on desktop
                break;
              case 6: // Gambar 7: Kecil di sela-sela
                spanClasses = "col-span-1 row-span-1 md:col-span-1 md:row-span-1"; 
                break;
              case 7: // Gambar 8: Besar memanjang di bawah (Mobile) atau kotak besar di tengah (Desktop)
                spanClasses = "col-span-2 row-span-1 md:col-span-2 md:row-span-2"; 
                break;
              case 8: // Gambar 9: Kecil melengkapi
                spanClasses = "col-span-1 row-span-1 md:col-span-1 md:row-span-1"; 
                break;
              case 9: // Gambar 10: Kecil melengkapi akhir
                spanClasses = "col-span-1 row-span-1 md:col-span-1 md:row-span-1"; 
                break;
              case 10: // Gambar 11: Foto terakhir yang lebar di bagian paling bawah
                spanClasses = "col-span-2 row-span-1 md:col-span-2 md:row-span-1"; 
                break;
              default:
                spanClasses = "col-span-1 row-span-1";
            }
            
            return (
              <div 
                key={index}
                ref={cardRef as React.RefObject<HTMLDivElement>}
                className={`relative overflow-hidden rounded-[1.25rem] md:rounded-[2rem] shadow-[0_8px_25px_rgba(200,107,133,0.12)] border-[3px] border-white/80 hover:border-white group scroll-reveal ${spanClasses}`}
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
