import React from 'react';
import { PackageX, Truck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f111a] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0096FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-lg">
        
        <div className="flex justify-center mb-8 relative">
           <Truck size={100} className="text-[#0096FF] animate-bounce" />
           <PackageX size={40} className="text-[#FFD700] absolute -right-2 top-0 rotate-12" />
        </div>

        <h1 className="text-8xl font-black text-white mb-2 tracking-tighter">
          4<span className="text-[#FFD700]">0</span>4
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
          className="inline-flex items-center gap-2 bg-[#0096FF] hover:bg-[#007acc] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1"
        >
          <ArrowLeft size={20} />
          Повернутися на базу
        </Link>
      </div>
    </div>
  );
};