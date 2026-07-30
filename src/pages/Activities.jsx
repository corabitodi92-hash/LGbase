import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activitesData } from '../data/mockData';
import { FiCalendar, FiMapPin, FiFilter } from 'react-icons/fi';

const categories = [
  'Toutes',
  'Activités culturelles',
  'Activités spirituelles',
  'Camps scouts',
  'Actions communautaires',
  'Formations',
  'Environnement',
  'Solidarité',
  'Autres activités'
];

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('Toutes');

  const filteredActivities = activeCategory === 'Toutes'
    ? activitesData
    : activitesData.filter(a => a.categorie === activeCategory);

  return (
    <div className="min-h-screen bg-scout-dark text-scout-text-primary">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-orange/5 via-scout-dark to-scout-dark-card/30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-scout-orange/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/15 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            <FiFilter className="inline mr-1" /> Programmes
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nos <span className="text-gradient-orange">Activités</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-scout-text-secondary max-w-2xl mx-auto px-4">
            Découvrez la diversité des actions menées par notre groupe.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-scout-orange text-white shadow-md shadow-scout-orange/20'
                  : 'bg-scout-dark-card text-scout-text-secondary hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredActivities.map((activite) => (
              <motion.div
                key={activite.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-scout-dark-card rounded-2xl shadow-sm overflow-hidden flex flex-col h-full group hover:border-scout-orange/20 transition-all duration-300 border border-white/5"
              >
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={activite.image}
                    alt={activite.titre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-scout-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {activite.categorie}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-scout-orange transition-colors">
                    {activite.titre}
                  </h3>
                  <p className="text-scout-text-secondary mb-5 flex-grow leading-relaxed text-sm">
                    {activite.description}
                  </p>
                  <div className="pt-4 border-t border-white/5 flex justify-between text-sm text-scout-text-secondary font-medium">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-scout-orange" />
                      {activite.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-scout-orange" />
                      {activite.lieu}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-20 text-scout-text-secondary">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">Aucune activité ne correspond à cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
