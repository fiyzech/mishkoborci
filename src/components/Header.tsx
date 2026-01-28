import React from 'react';
import { PhoneCall, FileText } from 'lucide-react';
import { FaViber, FaTelegram } from 'react-icons/fa';
import { CONTACTS } from '../constants/data';

export const Header: React.FC = () => {
  const phoneNumber = CONTACTS.phone.replace(/\D/g, '');

  return (
    // Повернув фон #0f111a (як було)
    <header className="sticky top-0 z-50 w-full bg-[#0f111a] text-gray-200 border-b border-gray-800 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* ЛОГОТИП */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer z-50 mr-2">
          <div className="text-xl md:text-2xl font-black tracking-wider  select-none leading-none">
            <span className="text-[#EAB308]">МішкоБорeць</span>    
          </div>
        </a>

        {/* МОБІЛЬНА ПАНЕЛЬ */}
        <div className="flex items-center gap-3 md:hidden">
          
          <a 
            href="#pricing" 
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white border border-gray-700 active:scale-95 transition-all hover:border-[#F97316]"
            aria-label="Ціни"
          >
            <FileText size={18} />
          </a>

          <div className="w-px h-6 bg-gray-800 mx-1"></div>

          {/* Telegram (Оранжевий) */}
          <a 
            href={`https://t.me/+${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] active:scale-95 transition-all hover:bg-[#F97316] hover:text-white"
            aria-label="Telegram"
          >
            <FaTelegram size={20} />
          </a>

          {/* Viber (Оранжевий) */}
          <a 
            href={`viber://chat?number=%2B${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] active:scale-95 transition-all hover:bg-[#F97316] hover:text-white"
            aria-label="Viber"
          >
            <FaViber size={20} />
          </a>

          {/* ТЕЛЕФОН (Оранжевий) */}
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] animate-pulse hover:animate-none active:scale-95 transition-all hover:bg-[#ea580c]"
            aria-label="Подзвонити"
          >
            <PhoneCall size={20} fill="currentColor" />
          </a>
        </div>

        {/* ДЕСКТОПНЕ МЕНЮ */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <a href="#pricing" className="hover:text-white transition-colors">Послуги</a>
          <a href="#pricing" className="hover:text-white transition-colors">Ціни</a>
          <a href="#about" className="hover:text-white transition-colors">Про нас</a>
          <a href="#reviews" className="hover:text-white transition-colors">Відгуки</a>
          <a href="#faq" className="hover:text-white transition-colors">Часті запитання</a>
        </nav>

        {/* ДЕСКТОП КОНТАКТИ */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-px h-6 bg-gray-700 mx-2"></div>
          <a href={`https://t.me/+${phoneNumber}`} className="text-gray-400 hover:text-[#F97316] hover:-translate-y-1 transition-all">
            <FaTelegram size={24} />
          </a>
          <a href={`viber://chat?number=%2B${phoneNumber}`} className="text-gray-400 hover:text-[#F97316] hover:-translate-y-1 transition-all">
            <FaViber size={24} />
          </a>
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-[#EAB308] font-bold text-lg ml-2 hover:scale-105 transition-transform">
            <PhoneCall className="w-5 h-5" />
            {CONTACTS.phone}
          </a>
        </div>

      </div>
    </header>
  );
};