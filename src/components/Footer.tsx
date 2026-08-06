import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { personalInfo } from "../data/portifolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-8 px-8 md:px-24 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          &copy; {currentYear} {personalInfo.name}. Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}