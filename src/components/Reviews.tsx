import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Олександр",
    role: "Переїзд офісу",
    text: "Хлопці молодці. Приїхали вчасно, все акуратно розібрали, запакували і перевезли. Жодної подряпини на меблях. Рекомендую!",
    stars: 5
  },
  {
    name: "Ірина",
    role: "Доставка будматеріалів",
    text: "Замовляла підйом гіпсокартону на 9 поверх. Роботу виконали бережно і якісно. Ціна адекватна.",
    stars: 5
  },
  {
    name: "Максим",
    role: "Вивіз сміття",
    text: "Винесли 200 мішків бою і старі вікна. Все чисто, швидко.",
    stars: 5
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0f111a]">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-16">

          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Що кажуть <span className="text-[#F97316]">клієнти?</span>
          </h2>
          {/* Лінія підкреслення: Оранжева */}
          <div className="w-24 h-1 bg-[#F97316] mx-auto rounded-full"></div>
        </div>

        {/* КАРТКИ ВІДГУКІВ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div 
              key={index} 
              // Картка: темна, при наведенні бордер стає Оранжевим/Жовтим
              className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800 relative hover:border-[#F97316] transition-colors duration-300 group hover:-translate-y-1 shadow-lg"
            >
              {/* Іконка цитати: Оранжева, напівпрозора */}
              <Quote className="absolute top-8 right-8 text-[#F97316]/20 w-12 h-12 group-hover:text-[#F97316]/40 transition-colors" />
              
              {/* Зірки: Жовті */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#EAB308] fill-[#EAB308]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-white font-bold text-lg">{review.name}</h4>
                {/* Роль: Оранжева */}
                <p className="text-sm text-[#F97316] font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};