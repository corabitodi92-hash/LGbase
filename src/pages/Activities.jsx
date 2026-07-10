import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activitesData } from '../data/mockData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

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
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-4">Nos Activités</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez la diversité des actions menées par notre groupe.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-scout-orange text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div className="h-48 relative overflow-hidden group">
                  <img 
                    src={activite.image} 
                    alt={activite.titre} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-scout-yellow text-scout-green px-3 py-1 rounded-full text-xs font-bold shadow">
                    {activite.categorie}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activite.titre}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{activite.description}</p>
                  
                  <div className="pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-scout-orange" /> {activite.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-scout-green" /> {activite.lieu}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredActivities.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            Aucune activité ne correspond à cette catégorie pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}
