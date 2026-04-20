import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { maps } from '../data/maps.js';

const onImgError = (e, fallback) => {
  if (e.currentTarget.dataset.fallback === '1') return;
  e.currentTarget.dataset.fallback = '1';
  e.currentTarget.src = fallback;
};

export default function MapsGallery() {
  return (
    <section id="maps" className="relative w-full bg-cs-bg py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <span className="mb-3 inline-block rounded-sm border border-cs-accent/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cs-accent sm:text-xs">
          Active Duty Maps
        </span>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-wider text-white sm:text-5xl md:text-6xl">
          战场 <span className="text-cs-accent">画廊</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base">
          左右滑动,或使用键盘 ← → 切换。每 6 秒自动轮播下一张。
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          className="h-[70vh] min-h-[520px] w-full"
        >
          {maps.map((m) => (
            <SwiperSlide key={m.id}>
              <div className="relative h-full w-full">
                <img
                  src={m.image}
                  alt={`${m.name} map screenshot`}
                  loading="lazy"
                  onError={(e) => onImgError(e, m.fallback)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-bg via-cs-bg/70 to-cs-bg/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cs-bg/80 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-14 sm:pb-24 md:px-20 md:pb-28">
                  <div className="max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-sm bg-cs-accent/20 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.25em] text-cs-accent">
                        {m.type}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-cs-accent/60 to-transparent" />
                    </div>
                    <h3 className="font-display text-6xl font-extrabold uppercase leading-none tracking-wider text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-7xl md:text-8xl">
                      {m.name}
                    </h3>
                    <p className="mt-4 font-display text-lg font-medium uppercase tracking-[0.2em] text-cs-accent sm:text-xl">
                      {m.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
