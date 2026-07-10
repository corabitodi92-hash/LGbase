import { motion } from 'framer-motion';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProvinceDjiri() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-green/10 via-white to-scout-orange/5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-scout-green/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-green/10 text-scout-green text-sm font-bold mb-4 tracking-wide uppercase">
            <FiGlobe className="inline mr-1" /> Province
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Province <span className="text-gradient-green">Djiri</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-green to-scout-orange mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-500 max-w-xl mx-auto px-4">
            Découvrez la Province Djiri à laquelle est rattaché notre groupe scout.
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Page en cours de rédaction</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Les informations détaillées sur la Province Djiri seront bientôt disponibles.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-scout-green text-white font-bold rounded-full hover:bg-scout-green/90 transition-all shadow-md hover:shadow-lg"
          >
            Retour à l'accueil <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
