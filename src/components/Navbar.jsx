import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/LOGO_LOULENDO.jpg';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Activités', path: '/activites' },
  { name: 'Événements', path: '/evenements' },
  { name: 'Galerie', path: '/galerie-photos' },
  { name: 'Documents', path: '/documents' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-scout-dark/85 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-11 w-auto object-contain rounded-full bg-white/10 p-0.5 border border-white/20 shadow-md"
                src={logo}
                alt="Logo LG La Base"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-extrabold text-sm md:text-base uppercase tracking-widest text-white group-hover:text-scout-orange transition-colors">
                  LG La Base
                </span>
                <span className="text-[10px] text-scout-text-secondary tracking-wide uppercase font-medium">
                  Groupe Scout Loulendo Gabriel
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-scout-text-secondary hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-dot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-scout-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA / Right Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-scout-orange hover:bg-scout-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-scout-orange/20 hover:shadow-lg hover:shadow-scout-orange/30 hover:-translate-y-0.5"
            >
              Rejoindre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-scout-dark/95 border-b border-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-scout-orange/15 text-scout-orange border-l-4 border-scout-orange font-bold'
                          : 'text-scout-text-secondary hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 bg-scout-orange hover:bg-scout-orange-hover text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Rejoindre
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

