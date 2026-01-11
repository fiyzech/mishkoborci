import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-100 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Швидкі та надійні вантажники
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Ми бережемо ваші речі та нерви.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#pricing" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Дізнатись ціни
          </a>
          <a 
            href="#faq" 
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Часті запитання
          </a>
        </div>
      </div>
    </section>
  );
};