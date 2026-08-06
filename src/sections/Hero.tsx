"use client";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portifolio";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 px-8 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
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
          {/* Botão de Download do Currículo */}
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
    </section>
  );
}