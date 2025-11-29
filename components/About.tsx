
import React from 'react';
import { SKILLS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ViewType } from '../types';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Sobre Mim" 
          alignment="center"
        />
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-16">
          
          {/* Left: Profile Photo - Smaller & Refined */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 flex flex-col items-center"
          >
            <div className="relative w-full max-w-xs">
              {/* Frame styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl transform translate-x-2 translate-y-2" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group bg-white">
                <img 
                  src="https://i.imgur.com/TNMBi27.jpeg" 
                  alt="Philippe Boechat - Desenvolvedor Frontend"
                  className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Badge below photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 p-4 bg-white rounded-xl shadow-md border border-gray-100 text-center"
              >
                <p className="text-sm font-semibold text-primary-600 mb-1">Frontend Developer</p>
                <p className="text-xs text-gray-600">UI/UX Specialist</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            {/* Main text content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <div>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Olá! Sou o <strong className="text-gray-900">PH</strong>, um desenvolvedor apaixonado por construir interfaces digitais que não são apenas bonitas, mas funcionais e acessíveis.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Com <strong className="text-primary-600">5+ anos de experiência</strong>, especializo-me em <strong>React & TypeScript</strong>. Cada projeto é uma oportunidade de criar soluções escaláveis e performáticas.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Código Limpo", desc: "Padrões e manutenibilidade." },
                { title: "Performance", desc: "Core Web Vitals otimizados." },
                { title: "30 Dias de Suporte", desc: "Acompanhamento pós-entrega." },
                { title: "Mobile First", desc: "Responsivo em qualquer tela." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                onClick={() => onNavigate('services')}
                rightIcon={<ArrowRight size={18} />}
                className="shadow-lg shadow-primary-600/10"
              >
                Ver Soluções e Pacotes
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Stack Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="font-display font-bold text-2xl mb-10 text-center text-gray-900">Tecnologias que Uso</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-primary-200"
              >
                <skill.icon size={36} className={skill.color} strokeWidth={1.5} />
                <span className="font-medium text-gray-700 text-xs text-center leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
