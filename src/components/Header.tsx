import React, { useState } from 'react';
import { Truck, Info, PhoneCall, Menu, X, Users } from 'lucide-react'; // Звичайні іконки
import { FaViber, FaTelegram } from 'react-icons/fa'; // <--- Брендові іконки
import { CONTACTS } from '../constants/data';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = CONTACTS.phone.replace(/\D/g, ''); 

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f111a] text-gray-200 border-b border-gray-800 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* Логотип */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer z-50">
          <div className="text-2xl font-black tracking-wider uppercase select-none">
            <span className="text-[#0096FF] drop-shadow-[0_0_10px_rgba(0,150,255,0.5)]">МІШКОБОРЦІ</span>
          </div>
        </a>

        {/* ДЕСКТОП: Навігація */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <a href="#pricing" className="flex items-center gap-2 hover:text-white transition-colors">
            <Truck className="w-4 h-4" />
            Послуги
          </a>
          <a href="#pricing" className="flex items-center gap-2 hover:text-white transition-colors">
            <Info className="w-4 h-4" />
            Ціни
          </a>
          <a href="#about" className="flex items-center gap-2 hover:text-white transition-colors">
            <Users className="w-4 h-4" />
            Про нас
          </a>
        </nav>

        {/* ПРАВА ЧАСТИНА: Месенджери + Телефон */}
        <div className="hidden lg:flex items-center gap-4">
          
          <div className="w-px h-6 bg-gray-700 mx-1"></div>

          {/* Telegram */}
          <a 
            href={`https://t.me/+${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2AABEE] hover:text-white transition-transform hover:-translate-y-1"
            title="Написати в Telegram"
          >
            <FaTelegram size={24} />
          </a>

          {/* Viber */}
          <a 
            href={`viber://chat?number=%2B${phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#7360F2] hover:text-white transition-transform hover:-translate-y-1"
            title="Написати у Viber"
          >
            <FaViber size={24} />
          </a>

          {/* Телефон */}
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 hover:text-[#FFD700] transition-colors ml-2 font-bold text-sm">
            <PhoneCall className="w-4 h-4 text-[#FFD700]" />
            <span>{CONTACTS.phone}</span>
          </a>
        </div>

        {/* МОБІЛЬНЕ МЕНЮ (Бургер) */}
        <button 
          className="lg:hidden z-50 p-2 text-gray-300 hover:text-white"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ВИПАДАЮЧЕ МЕНЮ */}
        <div className={`fixed inset-0 bg-[#0f111a] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <nav className="flex flex-col items-center space-y-6 text-xl font-bold">
              <a href="#pricing" onClick={toggleMenu}>Акції</a>
              <a href="#pricing" onClick={toggleMenu}>Послуги</a>
              <a href="#pricing" onClick={toggleMenu}>Ціни</a>
              <a href="#about" onClick={toggleMenu}>Про нас</a>
            </nav>

            <div className="flex flex-col items-center gap-6 mt-8 w-full px-8">
              {/* Іконки в мобільному меню */}
              <div className="flex gap-6">
                <a href={`https://t.me/+${phoneNumber}`} className="p-3 bg-[#2AABEE]/10 rounded-full text-[#2AABEE]">
                  <FaTelegram size={32} />
                </a>
                <a href={`viber://chat?number=%2B${phoneNumber}`} className="p-3 bg-[#7360F2]/10 rounded-full text-[#7360F2]">
                  <FaViber size={32} />
                </a>
              </div>

              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-[#FFD700] font-bold text-lg">
                <PhoneCall className="w-5 h-5" />
                {CONTACTS.phone}
              </a>
            </div>
        </div>
      </div>
    </header>
  );
};