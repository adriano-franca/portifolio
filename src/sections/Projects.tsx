"use client";
import { projects } from "../data/portifolio";
import { FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-8 md:px-24 bg-gray-900 text-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-blue-500"
        >
          Projetos & Iniciativas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Efeito cascata
              className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors flex flex-col h-full group"
            >
              <FaFolderOpen className="text-3xl text-blue-500 mb-4 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <span className="text-sm text-blue-400 font-mono mb-4">{project.tech}</span>
              <p className="text-gray-400 flex-grow leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}