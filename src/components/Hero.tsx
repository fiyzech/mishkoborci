import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { CONTACTS } from '../constants/data';

export const Hero: React.FC = () => {
  // Захист від помилки, якщо CONTACTS ще не завантажився
  const phoneNumber = CONTACTS?.phone ? CONTACTS.phone.replace(/\D/g, '') : '0000000000';

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden bg-[#0f111a]">
      
      {/* 1. ФОНОВЕ ФОТО З ЗАТЕМНЕННЯМ */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/team2.jpeg" 
          alt="Команда МішкоБорців" 
          // scale-125 - це стандартний клас Tailwind (scale-120 не існує за замовчуванням)
          className="w-full h-full object-cover object-center blur-[3px] scale-110"
        />
        {/* Чорна вуаль */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Градієнт знизу під колір фону сайту */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f111a] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center md:text-left"> 
          
          {/* Бейдж (Жовтий) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAB308]/10 text-[#EAB308] text-xs md:text-sm font-bold mb-6 border border-[#EAB308]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EAB308]"></span>
            </span>
            Працюємо зараз у Львові та області
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Послуги <br/>
            {/* Градієнт Оранжевий -> Жовтий */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EAB308]">
              Вантажників
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed drop-shadow-md mx-auto md:mx-0">
            Підйом будматеріалів, перевезення меблів, спуск та вивіз сміття. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Кнопка (Оранжева) */}
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#ea580c] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] active:scale-95"
            >
              <PhoneCall className="w-6 h-6" />
              Замовити зараз
            </a>
            
            <a 
              href="#pricing"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg font-semibold py-4 px-8 rounded-xl transition-all active:scale-95 backdrop-blur-md"
            >
              Дивитись ціни
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

         

        </div>
      </div>
    </section>
  );
};