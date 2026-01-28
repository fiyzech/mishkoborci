import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaViber, FaTelegram } from 'react-icons/fa';
import { CONTACTS, NAV_LINKS } from '../constants/data';

export const Footer: React.FC = () => {
  const phoneNumber = CONTACTS.phone.replace(/\D/g, '');

  return (
    <footer id="contact" className="bg-[#0b0d14] text-gray-400 py-10 pb-24 md:pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Лого + Соцмережі */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
              <div className="text-2xl font-black tracking-wider ">
                {/* Замінив синій на Оранжевий */}
                <span className="text-[#F97316]">МішкоБорeць</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Ваш надійний партнер.
              <br />
              Професійні вантажники, які знають свою справу. 
            </p>
            
            <div className="flex gap-4">
              {/* Telegram - тепер Оранжевий */}
              <a 
                href={`https://t.me/+${phoneNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all hover:-translate-y-1"
              >
                <FaTelegram size={20} />
              </a>

              {/* Viber - теж Оранжевий (для єдиного стилю) */}
              <a 
                href={`viber://chat?number=%2B${phoneNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all hover:-translate-y-1"
              >
                <FaViber size={20} />
              </a>
            </div>
          </div>

          {/* Навігація */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Навігація</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="flex items-center gap-2 hover:text-[#F97316] transition-colors group">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#F97316] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Контакти</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-1" />
                <span>{CONTACTS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors text-lg font-semibold">
                  {CONTACTS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© 2025 МішкоБорець. Всі права захищено.</p>
        </div>
      </div>
    </footer>
  );
};