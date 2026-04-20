import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMaps = () => {
    document.getElementById('maps')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://wsrv.nl/?url=raw.githubusercontent.com/MurkyYT/cs2-map-icons/main/images/thumbs/de_inferno_1_png.png&w=2400&output=webp&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cs-bg/40 via-cs-bg/70 to-cs-bg" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(245,166,35,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(230,92,0,0.25), transparent 45%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="mb-4 rounded-sm border border-cs-accent/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cs-accent">
          Fan Maps Gallery
        </span>
        <h1 className="font-display text-5xl font-extrabold uppercase leading-none tracking-wider text-white animate-glow sm:text-7xl md:text-8xl lg:text-9xl">
          Counter-Strike
          <span className="mt-2 block bg-gradient-to-r from-cs-accent via-orange-400 to-cs-accent2 bg-clip-text text-transparent">
            2
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl">
          重温这些在雷达图与硝烟中诞生的传奇战场 —— 从 Dust II 到 Anubis,
          每一寸地形都是 CS 二十余年的战术史。
        </p>

        <button
          onClick={scrollToMaps}
          className="mt-10 rounded-sm border-2 border-cs-accent bg-cs-accent/10 px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-cs-accent transition-all hover:bg-cs-accent hover:text-cs-bg hover:shadow-[0_0_25px_rgba(245,166,35,0.6)]"
        >
          探索地图
        </button>
      </div>

      <button
        onClick={scrollToMaps}
        aria-label="Scroll to maps gallery"
        className="absolute bottom-8 z-10 text-white/50 transition-colors hover:text-cs-accent"
      >
        <ChevronDown size={40} className="animate-bounceDown" />
      </button>
    </section>
  );
}
