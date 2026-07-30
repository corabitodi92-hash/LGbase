import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMapPin, FiPhone, FiMail, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/LOGO_LOULENDO.jpg';

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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre inscription !');
  };

  return (
    <footer className="relative bg-scout-dark text-scout-text-primary border-t border-white/5 overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-scout-orange via-scout-orange/50 to-transparent" />

      {/* Decorative blurred glow */}
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-scout-orange/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                className="h-12 w-auto object-contain rounded-full bg-white/5 p-0.5 border border-white/10" 
                src={logo} 
                alt="Logo LG La Base" 
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg uppercase tracking-widest text-white">LG La Base</span>
                <span className="text-[10px] text-scout-text-secondary tracking-wide uppercase">Groupe Scout Loulendo Gabriel</span>
              </div>
            </div>
            <p className="text-scout-text-secondary text-sm leading-relaxed max-w-sm">
              Mouvement éducatif rattaché à la Province Djiri et à l'Église Évangélique du Congo. Notre engagement est d'unir et fortifier la jeunesse.
            </p>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-scout-orange hover:border-scout-orange hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-scout-text-secondary hover:text-white text-sm"
                  >
                    <FiChevronRight className="text-scout-orange/60 group-hover:text-scout-orange group-hover:translate-x-0.5 transition-all text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Affiliations</h3>
            <ul className="space-y-3">
              {affiliations.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-scout-text-secondary hover:text-white text-sm"
                  >
                    <FiChevronRight className="text-scout-orange/60 group-hover:text-scout-orange group-hover:translate-x-0.5 transition-all text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info column */}
          <div className="lg:col-span-4 lg:pl-4">
            <div className="relative rounded-2xl bg-scout-dark-card/60 border border-white/5 p-6 overflow-hidden h-full flex flex-col justify-between group">
              {/* Background mountain photo with low opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80')` }}
              />
              
              <div className="relative z-10 space-y-4">
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">Restez informés</h4>
                <p className="text-scout-text-secondary text-xs leading-relaxed">
                  Abonnez-vous pour recevoir les dernières nouvelles de nos activités et projets.
                </p>
                <form onSubmit={handleSubmit} className="space-y-2 mt-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    className="w-full bg-scout-dark/65 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-scout-orange transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-scout-orange hover:bg-scout-orange-hover text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors cursor-pointer"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info Row */}
        <div className="border-t border-white/5 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left text-sm text-scout-text-secondary mb-8">
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <FiMapPin className="text-scout-orange text-lg" />
            <span>Paroisse EEC, Province Djiri, Brazzaville, Congo</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <FiPhone className="text-scout-orange text-lg" />
            <span>+242 06 000 00 00</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <FiMail className="text-scout-orange text-lg" />
            <span>contact@scoutsloulendo.cg</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-scout-text-secondary/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} LG La Base — Groupe Scout Loulendo Gabriel. Tous droits réservés.
          </p>
          <div className="text-scout-text-secondary/30 text-[10px] uppercase tracking-wider font-semibold">
            Bâtir un monde meilleur
          </div>
        </div>
      </div>
    </footer>
  );
}

