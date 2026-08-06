"use client";
import { personalInfo, skills } from "../data/portifolio";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="py-20 px-8 md:px-24 bg-gray-900 text-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed text-justify text-lg">
            {personalInfo.about}
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Hard Skills</h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200 hover:border-blue-500 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}