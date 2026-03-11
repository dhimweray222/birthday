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
        className="max-w-3xl mx-auto text-center relative z-10 scroll-reveal bg-white/50 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(200,107,133,0.1)] border border-white/60"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-white/90 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg border border-white/80 relative">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-50"></div>
          <svg className="w-8 h-8 text-accent/80 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-text-main tracking-widest uppercase text-sm drop-shadow-sm">
          <span className="block text-accent/70 text-base italic lowercase mb-2 font-light">untuk</span>
          My Love,
        </h2>
        
        <div className="text-text-main/80 leading-[2.2] text-lg md:text-xl font-serif space-y-8 tracking-wide">
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:-mt-2">
            Selamat ulang tahun untuk seseorang yang membuat hidupku jauh lebih berarti. Melalui surat kecil ini, aku hanya ingin mengingatkan betapa spesialnya kamu di mataku.
          </p>
          <p>
            Kamu lebih dari sekadar rupa yang rupawan, kamu adalah rumah tempatku kembali, ketenangan di tengah riuhnya dunia, dan penyemangat saat langkahku terasa berat.
          </p>
          <p>
            Aku berharap di usiamu yang baru ini, setiap doamu diijabah, setiap sedihmu berubah menjadi tawa, dan setiap harapanmu menemukan jalannya. Ingatlah bahwa aku akan selalu ada di sini, di setiap langkahmu, mendukungmu sepenuh hati.
          </p>
          <div className="pt-16 pb-4">
            <h3 className="font-['Playfair_Display'] text-3xl text-accent italic opacity-90 drop-shadow-sm">
              Happy Birthday, Sayang. 
            </h3>
            <p className="text-sm uppercase tracking-widest mt-4 text-text-main/50 font-sans font-semibold">I love you endlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
