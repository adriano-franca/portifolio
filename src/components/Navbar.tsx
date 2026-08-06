"use client";
import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-950/80 border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-24 h-20 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-100 tracking-tighter">
          Adriano<span className="text-blue-500">.dev</span>
        </span>
        
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}