import React from 'react';
import { PackageX, Truck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f111a] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Фонові плями: Оранжева та Жовта */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EAB308]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-lg">
        
        <div className="flex justify-center mb-8 relative">
           {/* Вантажівка: Оранжева */}
           <Truck size={100} className="text-[#F97316] animate-bounce" />
           {/* Пакунок: Жовтий */}
           <PackageX size={40} className="text-[#EAB308] absolute -right-2 top-0 rotate-12" />
        </div>

        <h1 className="text-8xl font-black text-white mb-2 tracking-tighter">
          4<span className="text-[#EAB308]">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
          Ой! Схоже, ми заїхали не туди...
        </h2>
        
        <p className="text-gray-400 mb-8 text-lg">
          Або наші вантажники випадково винесли цю сторінку разом із будівельним сміттям. 
          Вибачте, але тут порожньо.
        </p>

        <Link 
          to="/" 
          // Кнопка: Оранжева з тінню
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-1"
        >
          <ArrowLeft size={20} />
          Повернутися на базу
        </Link>
      </div>
    </div>
  );
};