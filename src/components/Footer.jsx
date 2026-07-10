import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-scout-green text-white pt-16 pb-8 border-t-4 border-scout-orange mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img className="h-12 w-auto object-contain rounded-full bg-white p-1" src="/src/assets/LOGO_LOULENDO.jpg" alt="Logo Loulendo" />
              <span className="font-bold text-xl uppercase tracking-wider">Groupe Loulendo</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Discipline, unité, foi, amour, service, fraternité et engagement. Nous formons la jeunesse de demain avec les valeurs du scoutisme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-orange transition-colors"><FiFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-orange transition-colors"><FiInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-orange transition-colors"><FiTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scout-orange transition-colors"><FiYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-scout-yellow">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/a-propos" className="text-white/80 hover:text-white hover:underline transition-colors">À propos de nous</Link></li>
              <li><Link to="/historique" className="text-white/80 hover:text-white hover:underline transition-colors">Notre histoire</Link></li>
              <li><Link to="/activites" className="text-white/80 hover:text-white hover:underline transition-colors">Nos activités</Link></li>
              <li><Link to="/galerie-photos" className="text-white/80 hover:text-white hover:underline transition-colors">Galerie Photos</Link></li>
              <li><Link to="/documents" className="text-white/80 hover:text-white hover:underline transition-colors">Documents</Link></li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-scout-yellow">Nos Affiliations</h3>
            <ul className="space-y-3">
              <li><Link to="/province-djiri" className="text-white/80 hover:text-white hover:underline transition-colors">Province Djiri</Link></li>
              <li><Link to="/eec" className="text-white/80 hover:text-white hover:underline transition-colors">Église Évangélique du Congo</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white hover:underline transition-colors">Scoutisme Mondial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-scout-yellow">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-scout-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">Paroisse EEC, Province Djiri<br/>Brazzaville, Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-scout-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">+242 00 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-scout-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">contact@scouts-loulendo.cg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Groupe Scout Loulendo Gabriel. Tous droits réservés.
          </p>
          <p className="text-white/60 text-sm">
            Conçu pour l'avenir.
          </p>
        </div>
      </div>
    </footer>
  );
}
