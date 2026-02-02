import React from 'react';
import { PhoneCall, FileText } from 'lucide-react';
import { FaViber, FaTelegram } from 'react-icons/fa';
import { CONTACTS } from '../constants/data';

export const Header: React.FC = () => {
  // Захист від помилки, якщо CONTACTS ще не підтягнулись
  const phoneNumber = CONTACTS?.phone ? CONTACTS.phone.replace(/\D/g, '') : '0000000000';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f111a] text-gray-200 border-b border-gray-800 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* 1. ЛОГОТИП + НАЗВА */}
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer z-50 mr-2">
          
          {/* КАРТИНКА ЛОГОТИПУ */}
          <img 
            src="/logo2.png"   // Переконайся, що файл називається logo.png і лежить у public
            alt="Логотип" 
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
          />

          {/* ТЕКСТОВА НАЗВА (як на скріншоті) */}
          <div className="text-xl md:text-2xl font-black tracking-wider uppercase select-none leading-none">
            {/* Градієнтний текст МішкоБорець */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EAB308]">
              МішкоБорець
            </span>
          </div>
        </a>

        {/* 2. МОБІЛЬНА ПАНЕЛЬ (Кнопки праворуч на телефоні) */}
        <div className="flex items-center gap-3 md:hidden">
          
          {/* Кнопка "Ціни" */}
          <a 
            href="#pricing" 
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white border border-gray-700 active:scale-95 transition-all hover:border-[#F97316]"
            aria-label="Ціни"
          >
            <FileText size={18} />
          </a>

          <div className="w-px h-6 bg-gray-800 mx-1"></div>

          {/* Telegram */}
          <a 
            href={`https://t.me/+${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] active:scale-95 transition-all hover:bg-[#F97316] hover:text-white"
            aria-label="Telegram"
          >
            <FaTelegram size={20} />
          </a>

          {/* Viber */}
          <a 
            href={`viber://chat?number=%2B${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] active:scale-95 transition-all hover:bg-[#F97316] hover:text-white"
            aria-label="Viber"
          >
            <FaViber size={20} />
          </a>

          {/* ТЕЛЕФОН */}
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] animate-pulse hover:animate-none active:scale-95 transition-all hover:bg-[#ea580c]"
            aria-label="Подзвонити"
          >
            <PhoneCall size={20} fill="currentColor" />
          </a>
        </div>

        {/* 3. ДЕСКТОПНЕ МЕНЮ */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <a href="#pricing" className="hover:text-[#F97316] transition-colors">Акції</a>
          <a href="#pricing" className="hover:text-white transition-colors">Послуги</a>
          <a href="#pricing" className="hover:text-white transition-colors">Ціни</a>
          <a href="#about" className="hover:text-white transition-colors">Про нас</a>
          <a href="#reviews" className="hover:text-white transition-colors">Відгуки</a>
        </nav>

        {/* 4. ДЕСКТОП КОНТАКТИ */}
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
            {CONTACTS?.phone || "+380 00 000 0000"}
          </a>
        </div>

      </div>
    </header>
  );
};