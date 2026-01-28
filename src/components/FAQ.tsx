import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const QUESTIONS = [
  {
    question: "Графік роботи",
    answer: "ПН-ПТ з 9:00 до 18:00."
  },
  {
    question: "Яке мінімальне замовлення на перенесення меблів?",
    answer: "Мінімальне замовлення для вантажників — 2 години. Для автомобіля — також 2 години подачі + оплата за дорогу (якщо за місто)."
  },
  {
    question: "Чи працюєте ви у вихідні?",
    answer: "Ні, ми не працюємо у вихідні, тільки в суботу, за попередньої домовленості."
  },
  {
    question: "Чи є у вас пакувальні матеріали?",
    answer: "Ми можемо привезти стрейч-плівку та скотч за попередньою домовленістю. Коробки та пухирчасту плівку клієнт купує самостійно."
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#1a1d24]">
      <div className="container mx-auto px-4 max-w-3xl">
        

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Часті <span className="text-[#F97316]">запитання</span>
        </h2>
        
        <div className="space-y-4">
          {QUESTIONS.map((item, index) => (
            <div 
              key={index} 
              // Якщо відкрито - бордер оранжевий, якщо закрито - сірий
              className={`border rounded-xl overflow-hidden bg-[#0f111a] transition-all duration-300
                ${openIndex === index ? 'border-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 'border-gray-800 hover:border-gray-700'}
              `}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Якщо відкрито - текст стає оранжевим */}
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-[#F97316]' : 'text-white'}`}>
                  {item.question}
                </span>
                
                {/* Іконки Оранжеві */}
                {openIndex === index ? (
                  <Minus className="text-[#F97316] flex-shrink-0" />
                ) : (
                  <Plus className="text-[#F97316] flex-shrink-0" />
                )}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};