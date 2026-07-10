import { motion } from 'framer-motion';
import { responsables } from '../data/mockData';

export default function Organization() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-4">Notre Organigramme</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les responsables qui encadrent et animent la vie du Groupe Scout Loulendo Gabriel.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {responsables.map((person) => (
            <motion.div 
              key={person.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-scout-orange"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={person.photo} 
                  alt={`${person.nom} ${person.prenom}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <span className="inline-block px-3 py-1 bg-scout-yellow text-scout-green font-bold text-xs rounded-full mb-3 uppercase tracking-wide">
                  {person.role}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{person.prenom} {person.nom}</h3>
                <p className="text-scout-orange font-medium mb-4">{person.fonction}</p>
                <p className="text-gray-600 text-sm">{person.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
