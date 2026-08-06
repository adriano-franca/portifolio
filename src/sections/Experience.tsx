"use client";
import { experiences } from "../data/portifolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-8 md:px-24 bg-gray-950 text-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-blue-500"
        >
          Experiência Profissional
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-gray-800 hover:border-blue-500 transition-colors"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 mt-1">
                <span className="text-lg text-blue-400 font-medium">{exp.company}</span>
                <span className="text-sm text-gray-500 bg-gray-900 px-3 py-1 rounded-full w-fit">{exp.period}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}