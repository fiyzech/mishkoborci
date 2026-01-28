import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-[#1a1d24] text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* ЛІВА ЧАСТИНА: Текст (На мобільному знизу, order-2) */}
        <div className="order-2 md:order-1">
          {/* Бейдж: Оранжевий */}
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#F97316] uppercase bg-[#F97316]/10 rounded-full">
            Про компанію
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {/* Текст: Оранжевий */}
            Чому обирають <span className="text-[#F97316]">МішкоБорців</span>?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Працюємо швидко, чітко і акуратно.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Більше 10-ти років на ринку",
              "На постійній співпраці з клієнтами",
              "Ринкові ціни",
              "Відповідальність за вантаж",
              "Фізично міцні та ввічливі працівники",
              "Подача машини протягом 30 хвилин",
              "Прибираємо за собою"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* Іконки: Жовті */}
                <CheckCircle2 className="text-[#EAB308] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          {/* Цитата: Жовтий бордер */}
          <div className="p-6 bg-[#0f111a] rounded-xl border-l-4 border-[#EAB308]">
            <p className="text-gray-400 italic">
              "Наша мета — забезпечити професійне та безпечне виконання вантажно-розвантажувальних робіт."
            </p>
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА: Сітка фотографій (На мобільному зверху, order-1) */}
        <div className="order-1 md:order-2 grid grid-cols-2 gap-3 md:gap-6">
          
          {/* КОЛОНКА 1 (Ліва) - На комп'ютері зсунута вниз (mt-12) */}
          <div className="flex flex-col gap-3 md:gap-6 md:mt-12">
            
            {/* Фото 1 */}
            <div className="h-32 md:h-64 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#F97316]/50 hover:scale-105 transition-all duration-500 cursor-pointer">
              <img src="/bij.jpg" alt="Вивіз будсміття" className="w-full h-full object-cover" />
            </div>

            {/* Фото 2 (Внизу зліва) */}
            <div className="h-32 md:h-64 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#F97316]/50 hover:scale-105 transition-all duration-500 cursor-pointer">
               <img src="/sprinter_1.jpg" alt="Наш автопарк" className="w-full h-full object-cover" />
            </div>

          </div>

          {/* КОЛОНКА 2 (Права) - Стоїть рівно */}
          <div className="flex flex-col gap-3 md:gap-6">
            
            {/* Фото 3 (Зверху справа) */}
            <div className="h-32 md:h-64 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#F97316]/50 hover:scale-105 transition-all duration-500 cursor-pointer">
               <img src="/sprinter_rizne.png" alt="Вантажне авто з речами" className="w-full h-full object-cover" />
            </div>
            
            {/* Фото 4 (Внизу справа) */}
            <div className="h-32 md:h-64 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#F97316]/50 hover:scale-105 transition-all duration-500 cursor-pointer">
               <img src="/mebli.jpg" alt="Перевезення меблів" className="w-full h-full object-cover" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};