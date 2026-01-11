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
    text: "Замовляла підйом гіпсокартону на 9 поверх.  ㅤㅤРоботу виконали бережно і якісно. Ціна адекватна.",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Що кажуть клієнти?</h2>
          <div className="w-24 h-1 bg-[#0096FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800 relative hover:border-[#FFD700] transition-colors duration-300">
              <Quote className="absolute top-8 right-8 text-[#0096FF]/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-sm text-[#0096FF]">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};