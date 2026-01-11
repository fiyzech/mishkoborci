import React from 'react';
import { PRICING_DATA } from '../constants/data';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-[#0f111a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Прозорі тарифи</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Жодних прихованих платежів. Ціни вказані згідно з актуальним прайсом "МішкоБорець".
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_DATA.map((category) => (
            <div 
              key={category.id} 
              className="bg-[#1a1d24] rounded-2xl border border-gray-800 p-6 hover:border-[#0096FF] transition-colors duration-300 flex flex-col"
            >
              {/* Заголовок картки */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#0096FF]/10 rounded-lg text-[#0096FF]">
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
                  <div key={index} className="flex justify-between items-center text-sm border-b border-gray-800 pb-2 last:border-0">
                    <span className="text-gray-300 flex items-center gap-2">
                      <Check size={14} className="text-[#0096FF]" />
                      {item.name}
                    </span>
                    <span className="font-bold text-[#FFD700] whitespace-nowrap ml-2">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Кнопка замовлення */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <a 
                  href="tel:+380971373318"
                  className="block w-full text-center bg-gray-800 hover:bg-[#0096FF] text-white font-semibold py-3 rounded-xl transition-all"
                >
                  Замовити послугу
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Примітка знизу */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* Ціни та умови можуть узгоджуватися з менеджером. Тариф від 01.10.2025</p>
          <p>Мінімальне замовлення на підйом будматеріалів: 1 людина — 800 грн.</p>
        </div>
      </div>
    </section>
  );
};