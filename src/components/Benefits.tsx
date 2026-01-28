import React from 'react';
// Імпортуємо правильні іконки: 
// Users (Команда), CalendarCheck (Роки досвіду), Handshake (Співпраця), Clock (Час)
import { Users, CalendarCheck, Handshake, Clock } from 'lucide-react';


const BENEFITS = [
  {
    icon: Users, // Іконка людей для "Досвідчені працівники"
    title: "ДОСВІДЧЕНІ ПРАЦІВНИКИ",
    description: "Наша команда є професіоналами в організації вантажних перевезень."
  },
  {
    icon: CalendarCheck, // Іконка календаря для "10 років на ринку"
    title: "Більше 10 років на ринку",
    description: "Досвід, перевірений роками."
  },
  {
    icon: Handshake, // Іконка рукостискання для "Довгострокова співпраця"
    title: "ДОВГОСТРОКОВА СПІВПРАЦЯ",
    description: "Більшість наших клієнтів співпрацюють з нами роками."
  },
  {
    icon: Clock, // Іконка годинника для "Працюємо щоденно"
    title: "ПРАЦЮЄМО ЩОДЕННО",
    description: "Приймаємо замовлення з 9:00 до 18:00. Працюємо без вихідних за домовленістю."
  }
];

export const Benefits: React.FC = () => {
  return (
     <section id="benefits" className="py-12 md:py-24 bg-[#1a1d24] text-white">
      
      {/* ФОН */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/team.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ЗАГОЛОВОК */}
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16 uppercase tracking-wider">
          Наші <span className="text-[#F97316]">Переваги</span>
        </h2>

        {/* СІТКА ПЕРЕВАГ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col items-center text-center px-4 py-6 group
                /* Вертикальні лінії для десктопу (окрім останнього елемента) */
                ${index !== BENEFITS.length - 1 ? 'lg:border-r lg:border-gray-800' : ''}
                /* Горизонтальні лінії для мобільного (окрім останнього) */
                ${index !== BENEFITS.length - 1 ? 'border-b border-gray-800 lg:border-b-0' : ''}
              `}
            >
              {/* Іконка (Оранжева) */}
              <div className="mb-6 p-4 rounded-full border-2 border-[#F97316] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <item.icon size={40} strokeWidth={1.5} />
              </div>

              {/* Заголовок */}
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                {item.title}
              </h3>

              {/* Опис */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};