import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-scout-green/10">
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/src/assets/LOGO_LOULENDO.jpg')] bg-no-repeat bg-center bg-cover"
            style={{ filter: 'blur(8px)' }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
          <motion.img 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/src/assets/LOGO_LOULENDO.jpg" 
            alt="Logo Groupe Loulendo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full bg-white p-2 shadow-2xl mb-8"
          />
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-scout-green mb-4 drop-shadow-md"
          >
            Groupe Loulendo Gabriel
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-10 font-medium"
          >
            Discipline • Unité • Foi • Amour • Service • Fraternité • Engagement
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/a-propos" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 bg-scout-orange text-white font-bold rounded-full shadow-lg hover:bg-scout-yellow hover:text-scout-green transition-all transform hover:scale-105">
              Découvrir <FiArrowRight />
            </Link>
            <Link to="/activites" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 bg-scout-green text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105">
              Voir les activités <FiActivity />
            </Link>
            <Link to="/documents" className="btn-outline flex items-center justify-center gap-2 px-8 py-4 border-2 border-scout-green text-scout-green font-bold rounded-full shadow-lg hover:bg-scout-green hover:text-white transition-all transform hover:scale-105">
              Télécharger documents <FiDownload />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-scout-orange mb-6"
          >
            Bienvenue chez les Scouts Loulendo Gabriel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Nous sommes un groupe scout dynamique rattaché à la Province Djiri et à l'Église Évangélique du Congo (EEC). 
            Notre mission est de former la jeunesse à travers les valeurs du scoutisme pour bâtir un monde meilleur.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
