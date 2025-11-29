
import React from 'react';
import { SKILLS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ViewType } from '../types';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const highlights = [
    { title: "5+ Anos", desc: "De experiência em desenvolvimento" },
    { title: "Código Limpo", desc: "Padrões profissionais e manutenível" },
    { title: "Performance", desc: "Web Vitals otimizados" },
    { title: "Suporte 30 dias", desc: "Acompanhamento pós-entrega" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title="Sobre Mim" 
          alignment="left"
        />
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 items-start">
          
          {/* LEFT: Photo Card - Smaller & Better */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm">
              {/* Photo Card Container */}
              <div className="group relative">
                {/* Decorative bg */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 via-primary-100 to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://i.imgur.com/TNMBi27.jpeg" 
                      alt="Philippe Boechat"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay info */}
                  <div className="p-6 bg-gradient-to-t from-primary-900/95 to-primary-900/60 text-white">
                    <h3 className="text-xl font-bold mb-2">Philippe Boechat</h3>
                    <p className="text-sm text-primary-100 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Frontend Developer & UI Specialist
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards Below */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200"
                >
                  <p className="text-2xl font-bold text-primary-600">5+</p>
                  <p className="text-xs text-gray-600 mt-1">Anos de Exp.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-4 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl border border-blue-200"
                >
                  <p className="text-2xl font-bold text-blue-600">20+</p>
                  <p className="text-xs text-gray-600 mt-1">Projetos</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start"
          >
            {/* Main Content */}
            <div className="mb-10">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Olá! Sou o <span className="font-bold text-gray-900">PH</span>, um desenvolvedor apaixonado por criar interfaces digitais que são <span className="text-primary-600 font-semibold">bonitas, funcionais e acessíveis</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Especializo-me no ecossistema <span className="font-bold">React & TypeScript</span>. Cada projeto é uma oportunidade de entregar código limpo, performático e escalável que adiciona valor real ao negócio.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-primary-300 hover:from-primary-50 hover:to-primary-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => onNavigate('services')}
              rightIcon={<ArrowRight size={18} />}
              className="shadow-lg shadow-primary-600/20 w-full sm:w-auto"
            >
              Ver Soluções e Pacotes
            </Button>
          </motion.div>
        </div>

        {/* Tech Stack Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-16 border-t border-gray-200"
        >
          <h3 className="font-display font-bold text-3xl mb-12 text-center">Tecnologias que Uso</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)" }}
                className="group p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-100 hover:border-primary-300 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-default"
              >
                <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={32} className={skill.color} strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-gray-700 text-sm text-center leading-tight group-hover:text-primary-600 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
