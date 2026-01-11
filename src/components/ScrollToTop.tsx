import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функція, яка перевіряє, наскільки прогортали сторінку
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Функція прокрутки вгору
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Прибираємо слухач подій, коли компонент зникає (щоб не грузити пам'ять)
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="bg-[#0096FF] hover:bg-[#007acc] text-white p-3 rounded-full shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-1"
        aria-label="Вгору"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};