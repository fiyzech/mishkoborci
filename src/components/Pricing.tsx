import React from 'react';
import { PRICING_DATA } from '../constants/data';
import { Check, PhoneCall } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-[#0f111a]">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК СЕКЦІЇ */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Прозорі <span className="text-[#F97316]">тарифи</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Жодних прихованих платежів. Ціни вказані згідно з актуальним прайсом "МішкоБорець".
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_DATA.map((category) => (
            <div 
              key={category.id} 
              // Картка: темна, при наведенні бордер стає оранжевим
              className="bg-[#1a1d24] rounded-2xl border border-gray-800 p-6 hover:border-[#F97316] hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
            >
              {/* Заголовок картки */}
              <div className="flex items-center gap-4 mb-6">
                {/* Іконка: Оранжева */}
                <div className="p-3 bg-[#F97316]/10 rounded-lg text-[#F97316]">
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Список цін */}
              <div className="space-y-4 flex-grow">
                {category.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-gray-800 pb-2 last:border-0 group">
                    <span className="text-gray-300 flex items-center gap-2">
                      {/* Галочка: Оранжева */}
                      <Check size={14} className="text-[#F97316]" />
                      {item.name}
                    </span>
                    {/* Ціна: Жовта */}
                    <span className="font-bold text-[#EAB308] whitespace-nowrap ml-2 group-hover:scale-105 transition-transform">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Кнопка замовлення */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <a 
                  href="tel:+380971373318"
                  className="flex items-center justify-center gap-2 w-full text-center bg-gray-800 hover:bg-[#F97316] text-white font-bold py-3 rounded-xl transition-all active:scale-95 hover:shadow-lg"
                >
                  <PhoneCall size={18} />
                  Замовити послугу
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Примітка знизу */}
        <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="mb-2">* Ціни та умови можуть узгоджуватися з менеджером. Тариф від 01.10.2025</p>
          <p>
            <span className="text-[#F97316]">*</span> Мінімальне замовлення на підйом будматеріалів: 1 людина — <span className="text-[#EAB308]">800 грн</span>.
          </p>
        </div>
      </div>
    </section>
  );
};