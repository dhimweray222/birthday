'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Letter() {
  const contentRef = useScrollReveal();

  return (
    <section id="letter" className="py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Background soft glowing blur shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/80 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
      
      <div 
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="max-w-2xl mx-auto text-center relative z-10 scroll-reveal"
      >
        <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm border border-primary/50">
          <svg className="w-8 h-8 text-accent opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-text-main tracking-wider">
          Dear My Love,
        </h2>
        
        <div className="text-text-main/90 leading-loose text-lg md:text-xl font-serif italic space-y-8 tracking-wide">
          <p>
            Selamat ulang tahun untuk seseorang yang membuat hidupku jauh lebih berarti. Melalui surat kecil ini, aku hanya ingin mengingatkan betapa spesialnya kamu di mataku.
          </p>
          <p>
            Kamu lebih dari sekadar rupa yang rupawan, kamu adalah rumah tempatku kembali, ketenangan di tengah riuhnya dunia, dan penyemangat saat langkahku terasa berat.
          </p>
          <p>
            Aku berharap di usiamu yang baru ini, setiap doamu diijabah, setiap sedihmu berubah menjadi tawa, dan setiap harapanmu menemukan jalannya. Ingatlah bahwa aku akan selalu ada di sini, di setiap langkahmu, mendukungmu sepenuh hati.
          </p>
          <p className="font-semibold text-text-main mt-16 block not-italic">
            Happy Birthday, Sayang. <br /> I love you endlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
