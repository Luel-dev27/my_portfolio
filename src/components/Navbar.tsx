import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const profileImage = '/profile.jpg';
const fallbackProfileImage = '/profile.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'glass rounded-full py-3 pr-3 pl-8' : ''
      }`}>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg overflow-hidden border border-white/20">
            <img
              src={profileImage}
              alt="Luel Abrha profile portrait"
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackProfileImage;
              }}
            />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight">Luel Abrha</div>
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">FULL STACK DEVELOPER</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-900/20 hover:scale-105 transition-all"
          >
            Reach Out
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 text-white/70">
            <Github size={24} />
            <Linkedin size={24} />
            <Twitter size={24} />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
