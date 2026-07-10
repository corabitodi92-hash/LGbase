import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMapPin, FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../assets/LOGO_LOULENDO.jpg';
// Removed React logo import

const quickLinks = [
  { name: 'À propos de nous', path: '/a-propos' },
  { name: 'Notre histoire', path: '/historique' },
  { name: 'Nos activités', path: '/activites' },
  { name: 'Galerie Photos', path: '/galerie-photos' },
  { name: 'Documents', path: '/documents' },
];

const affiliations = [
  { name: 'Province Djiri', path: '/province-djiri' },
  { name: 'Église Évangélique du Congo', path: '/eec' },
];

const socials = [
  { icon: <FiFacebook />, href: '#', label: 'Facebook' },
  { icon: <FiInstagram />, href: '#', label: 'Instagram' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
  { icon: <FiYoutube />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-scout-dark text-white overflow-hidden">
      {/* Dégradé decoratif en haut */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-scout-green via-scout-orange to-scout-yellow" />

      {/* Element decoratif circulaire */}
      <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-scout-green/5 blur-3xl" />
      <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full bg-scout-orange/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2"><img className="h-12 w-auto object-contain rounded-full bg-white p-1 shadow-lg" src={logo} alt="Logo LG La Base" /></div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg uppercase tracking-widest">LG La Base</span>
                <span className="text-xs text-white/40 tracking-wide">Groupe Scout Loulendo Gabriel</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
  Amour, Unité, Foi
</p>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-scout-orange hover:border-scout-orange hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-scout-orange">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300">
                      <FiArrowUpRight className="text-scout-orange" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-scout-orange">Nos Affiliations</h3>
            <ul className="space-y-3">
              {affiliations.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300">
                      <FiArrowUpRight className="text-scout-orange" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-scout-orange">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-scout-green/20 text-scout-green flex-shrink-0">
                  <FiMapPin className="text-sm" />
                </div>
                <span className="text-white/50 text-sm leading-relaxed">
                  Paroisse EEC, Province Djiri<br />Brazzaville, Congo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-scout-green/20 text-scout-green flex-shrink-0">
                  <FiPhone className="text-sm" />
                </div>
                <span className="text-white/50 text-sm">+242 00 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-scout-green/20 text-scout-green flex-shrink-0">
                  <FiMail className="text-sm" />
                </div>
                <span className="text-white/50 text-sm">contact@scouts-loulendo.cg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col items-center gap-4">
          <p className="text-white/30 text-sm text-center">
            &copy; {new Date().getFullYear()} LG La Base &mdash; Groupe Scout Loulendo Gabriel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
