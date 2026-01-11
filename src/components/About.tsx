import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1d24] text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* ЛІВА ЧАСТИНА: Текст */}
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#0096FF] uppercase bg-[#0096FF]/10 rounded-full">
            Про компанію
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Чому обирають <span className="text-[#0096FF]">МішкоБорців</span>?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Працюємо швидко, чітко і акуратно.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Відповідальність за вантаж",
              "Фізично міцні та ввічливі працівники",
              "Подача машини протягом 30 хвилин",
              "Прибиремо за собою"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#FFD700] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 bg-[#0f111a] rounded-xl border-l-4 border-[#FFD700]">
            <p className="text-gray-400 italic">
              "Наша мета — забезпечити професійне та безпечне виконання вантажно-розвантажувальних робіт, щоб ви могли зосередитися на своїх справах, довіривши фізичну частину роботи нам."
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-2 gap-4">
          
          {/* Фото 1 (Верхнє ліве) */}
          <div className="space-y-4 translate-y-8 md:translate-y-12">
            <div className="h-48 md:h-64 bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-2xl border border-gray-700">
              <img src="/bij.jpg" alt="Вивіз будсміття" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Фото 2 (Верхнє праве) */}
          <div className="space-y-4">
            <div className="h-48 md:h-64 bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-2xl border border-gray-700">
               <img src="/sprinter_rizne.png" alt="Вантажне авто з речами" className="w-full h-full object-cover" />
            </div>
            
            {/* Фото 3 (Нижнє праве) */}
            <div className="-mt-8 md:-mt-40"></div>
            <div className="h-40 md:h-56 bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-2xl border border-gray-700">
               <img src="/mebli.jpg" alt="Перевезення меблів" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Фото 4 (Нижнє ліве) */}
          {/* Додав 'relative z-10', щоб витягнути шар наверх */}
          <div className="-mt-8 md:-mt-48 relative z-10"> 
             <div className="h-40 md:h-56 bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-2xl border border-gray-700">
               <img src="/sprinter_1.jpg" alt="Наш автопарк" className="w-full h-full object-cover" />
             </div>
          </div>

        

        </div>

      </div>
    </section>
  );
};