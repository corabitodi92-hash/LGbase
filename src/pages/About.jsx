import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiStar } from 'react-icons/fi';

const valeurs = [
  { label: 'Discipline', icon: '⚖️' },
  { label: 'Unité', icon: '🤝' },
  { label: 'Foi', icon: '✝️' },
  { label: 'Amour', icon: '❤️' },
  { label: 'Service', icon: '🌿' },
  { label: 'Fraternité', icon: '👥' },
  { label: 'Engagement', icon: '🌟' },
];

export default function About() {
  const sections = [
    {
      id: 'mission',
      title: 'Notre Mission',
      icon: <FiTarget className="text-3xl" />,
      content: "Contribuer à l'éducation des jeunes, en les aidant à réaliser pleinement leurs potentiels physique, intellectuel, émotionnel, social et spirituel, en tant que citoyens et en tant que membres de leurs communautés locales, nationales et internationales.",
      color: '#E67200',
    },
    {
      id: 'vision',
      title: 'Notre Vision',
      icon: <FiEye className="text-3xl" />,
      content: "Bâtir un monde meilleur où les jeunes sont épanouis, autonomes, solidaires et engagés pour la paix et la sauvegarde de la création, ancrés dans les valeurs chrétiennes de l'Église Évangélique du Congo.",
      color: '#008A3D',
    },
    {
      id: 'objectifs',
      title: 'Nos Objectifs',
      icon: <FiStar className="text-3xl" />,
      content: "Former le caractère, promouvoir la santé, encourager l'habileté manuelle et l'esprit de service envers le prochain.",
      color: '#E67200',
    },
  ];

  return (
    <div className="min-h-screen bg-scout-dark text-scout-text-primary">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-orange/5 via-scout-dark to-scout-dark-card/30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-scout-orange/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-scout-orange/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/15 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            À propos de <span className="text-gradient-orange">nous</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-scout-text-secondary max-w-xl mx-auto px-4">
            Découvrez qui nous sommes, notre mission et les valeurs qui guident notre mouvement.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* ── QUI SOMMES-NOUS ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-scout-dark-card border border-white/5 rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Qui <span className="text-gradient-orange">sommes-nous</span> ?
          </h2>
          <p className="text-lg text-scout-text-primary leading-relaxed mb-4">
            Le <strong className="text-scout-orange">Groupe Scout Loulendo Gabriel</strong> est un mouvement éducatif pour les jeunes, fondé sur le volontariat.
            Il est rattaché à la Province Djiri et est une branche active de l'Église Évangélique du Congo (EEC).
          </p>
          <p className="text-lg text-scout-text-secondary leading-relaxed">
            Ouvert à tous sans distinction d'origine, de race ou de croyance, notre groupe fonctionne selon les principes
            et la méthode conçus par le fondateur du scoutisme, Lord Baden-Powell, tout en intégrant les réalités et la culture congolaises.
          </p>
        </motion.div>

        {/* ── VALEURS (SLOGAN) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            Nos Valeurs
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Ce qui nous <span className="text-gradient-orange">anime</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-transparent mx-auto rounded-full mb-10" />

          <div className="flex flex-wrap justify-center gap-4">
            {valeurs.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl shadow-sm border border-white/5 bg-scout-dark-card cursor-default transition-all duration-300"
                style={{
                  borderColor: i % 2 === 0 ? 'rgba(255, 90, 43, 0.2)' : 'rgba(0, 138, 97, 0.2)',
                  backgroundColor: 'rgba(21, 27, 34, 0.65)',
                }}
              >
                <span className="text-3xl">{v.icon}</span>
                <span
                  className="font-bold text-sm tracking-wide"
                  style={{ color: i % 2 === 0 ? '#FF5A2B' : '#008A3D' }}
                >
                  {v.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── MISSION / VISION / OBJECTIFS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-scout-dark-card p-8 rounded-2xl border border-white/5 transition-all duration-300 group hover:border-scout-orange/20"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="p-4 rounded-2xl transition-colors duration-300 group-hover:scale-110"
                  style={{ backgroundColor: section.color + '18', color: section.color === '#E67200' ? '#FF5A2B' : section.color }}
                >
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-scout-text-secondary leading-relaxed text-sm">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
