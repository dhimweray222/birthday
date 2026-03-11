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
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-text-main tracking-wide">
            <span className="italic font-light text-accent mr-2">Things</span>I Love
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"></div>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => {
            const cardRef = useScrollReveal();
            return (
              <div 
                key={index}
                ref={cardRef as React.RefObject<HTMLDivElement>}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(200,107,133,0.08)] border border-white/70 hover:shadow-[0_15px_40px_rgba(200,107,133,0.15)] transition-all duration-700 hover:scale-[1.03] flex items-center gap-6 scroll-reveal group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-white/90 to-primary/30 flex items-center justify-center shrink-0 text-3xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white group-hover:rotate-12 transition-transform duration-500 relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-[1.5rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl mb-2 text-text-main tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-main/70 leading-relaxed font-sans font-light">
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
