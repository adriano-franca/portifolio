"use client";
import Image from "next/image";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portifolio";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        
        {/* Coluna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Olá, eu sou <span className="text-blue-500">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            {personalInfo.role}
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.headline}
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="/curriculo.pdf" 
              download 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              <Download size={20} />
              Baixar Currículo
            </a>

            <div className="flex gap-5 border-l border-gray-700 pl-6">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaGithub size={28} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Coluna da Imagem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* Certifique-se de que a imagem perfil.jpg está na pasta public/ */}
            <Image 
              src="/perfil.jpg" 
              alt={`Foto de ${personalInfo.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}