'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ThingsILove() {
  const headerRef = useScrollReveal();
  
  const reasons = [
    { title: "Senyumanmu", desc: "Mampu mencerahkan hari-hariku yang paling gelap sekalipun.", icon: "✨" },
    { title: "Cara kamu peduli", desc: "Perhatian kecilmu meyakinkan bahwa aku tak pernah sendiri.", icon: "🫂" },
    { title: "Kesabaranmu", desc: "Melengkapiku di saat aku merasa kurang dan banyak kekurangan.", icon: "🕊️" },
    { title: "Tertawamu", desc: "Melodi paling indah yang selalu ingin aku dengar setiap saat.", icon: "🥰" },
    { title: "Caramu mendukungku", desc: "Membuatku merasa bisa menaklukkan dunia ini bersamamu.", icon: "🤝" },
    { title: "Segalanya tentang kamu", desc: "Tidak ada satu hal pun darimu yang tidak aku syukuri.", icon: "❤️" }
  ];

  return (
    <section id="reasons" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>} 
          className="text-center mb-20 scroll-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-text-main tracking-wide">
            Hal Yang Paling Aku Suka Darimu
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => {
            const cardRef = useScrollReveal();
            return (
              <div 
                key={index}
                ref={cardRef as React.RefObject<HTMLDivElement>}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white hover:shadow-primary/50 transition-all duration-500 hover:scale-105 flex items-center gap-6 scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shrink-0 text-3xl shadow-inner border border-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl mb-2 text-text-main tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-main/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
