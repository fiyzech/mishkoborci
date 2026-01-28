import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { CONTACTS } from '../constants/data';

export const Hero: React.FC = () => {
  const phoneNumber = CONTACTS.phone.replace(/\D/g, '');

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden">
      
      {/* 1. ФОНОВЕ ФОТО З ЗАТЕМНЕННЯМ */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/team2.jpeg" 
          alt="Команда МішкоБорців" 
          className="w-full h-full object-cover object-center blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f111a] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center md:text-left"> 
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-xs md:text-sm font-bold mb-6 border border-[#FFD700]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
            </span>
            Працюємо зараз у Львові та області
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Вантажники <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0096FF] to-[#00d4ff]">
              Професіонали
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed drop-shadow-md mx-auto md:mx-0">
            Підйом будматеріалів, спуск та вивіз сміття. 
            {/* <span className="text-white font-semibold"> Ваші речі — в надійних руках.</span> */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 bg-[#0096FF] hover:bg-[#007acc] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(0,150,255,0.3)] hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] active:scale-95"
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

          {/* Статистика знизу */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-700/50 pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-black text-white">500+</div>
              <div className="text-xs md:text-sm text-gray-400">Замовлень</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#FFD700]">10+</div>
              <div className="text-xs md:text-sm text-gray-400">Років на ринку</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0096FF]">9:00 до 18:00</div>
              <div className="text-xs md:text-sm text-gray-400">Графік</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};