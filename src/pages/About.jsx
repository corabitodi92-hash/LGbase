import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiStar } from 'react-icons/fi';

export default function About() {
  const sections = [
    {
      id: 'mission',
      title: 'Notre Mission',
      icon: <FiTarget className="text-4xl text-scout-orange" />,
      content: "Contribuer à l'éducation des jeunes, en les aidant à réaliser pleinement leurs potentiels physique, intellectuel, émotionnel, social et spirituel, en tant que citoyens et en tant que membres de leurs communautés locales, nationales et internationales."
    },
    {
      id: 'vision',
      title: 'Notre Vision',
      icon: <FiEye className="text-4xl text-scout-green" />,
      content: "Bâtir un monde meilleur où les jeunes sont épanouis, autonomes, solidaires et engagés pour la paix et la sauvegarde de la création, ancrés dans les valeurs chrétiennes de l'Église Évangélique du Congo."
    },
    {
      id: 'valeurs',
      title: 'Nos Valeurs',
      icon: <FiHeart className="text-4xl text-scout-yellow" />,
      content: "Discipline, Unité, Foi, Amour, Service, Fraternité, Engagement, Respect de l'environnement, Loyauté et Honnêteté."
    },
    {
      id: 'objectifs',
      title: 'Nos Objectifs',
      icon: <FiStar className="text-4xl text-scout-orange" />,
      content: "Former le caractère, promouvoir la santé, encourager l'habileté manuelle et l'esprit de service envers le prochain."
    }
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-6">À propos de nous</h1>
          <div className="w-24 h-1 bg-scout-orange mx-auto rounded"></div>
        </motion.div>

        {/* Qui sommes-nous */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-scout-green/5 rounded-3xl p-8 md:p-12 shadow-sm border border-scout-green/10"
          >
            <h2 className="text-3xl font-bold text-scout-green mb-6">Qui sommes-nous ?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le <strong>Groupe Scout Loulendo Gabriel</strong> est un mouvement éducatif pour les jeunes, fondé sur le volontariat.
              Il est rattaché à la Province Djiri et est une branche active de l'Église Évangélique du Congo (EEC).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ouvert à tous sans distinction d'origine, de race ou de croyance, notre groupe fonctionne selon les principes 
              et la méthode conçus par le fondateur du scoutisme, Lord Baden-Powell, tout en intégrant les réalités et la culture congolaises.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-full">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
