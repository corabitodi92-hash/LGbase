import { motion } from 'framer-motion';
import { responsables } from '../data/mockData';
import { FiUsers } from 'react-icons/fi';

export default function Organization() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-scout-dark text-scout-text-primary">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-orange/5 via-scout-dark to-scout-dark-card/30">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-scout-orange/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/15 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            <FiUsers className="inline mr-1" /> Équipe
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Notre <span className="text-gradient-orange">Organigramme</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-scout-text-secondary max-w-2xl mx-auto px-4">
            Découvrez les responsables qui encadrent et animent la vie du Groupe Scout Loulendo Gabriel.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
              whileHover={{ y: -8 }}
              className="bg-scout-dark-card rounded-2xl border border-white/5 overflow-hidden group hover:border-scout-orange/20 transition-all duration-300 shadow-md"
            >
              <div className="h-52 overflow-hidden bg-scout-dark relative">
                <img
                  src={person.photo}
                  alt={`${person.nom} ${person.prenom}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <span className="inline-block px-4 py-1.5 bg-scout-orange/15 text-scout-orange font-bold text-xs rounded-full mb-3 uppercase tracking-wider">
                  {person.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{person.prenom} {person.nom}</h3>
                <p className="text-scout-orange font-semibold text-sm mb-3">{person.fonction}</p>
                <p className="text-scout-text-secondary text-xs leading-relaxed">{person.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
