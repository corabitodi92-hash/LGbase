import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiMapPin, FiCalendar, FiUsers, FiAward, FiHeart, FiShield, FiCompass, FiZap, FiBookOpen } from 'react-icons/fi';

import logo from '../assets/LOGO_LOULENDO.jpg';
import provinceLogo from '../assets/logoprovince.jpeg';
import churchLogo from '../assets/logoeglise.jpeg';
import img1 from '../assets/EVENEMENI IMAGE/DSC_4771.JPG';
import img2 from '../assets/EVENEMENI IMAGE/DSC_4772.JPG';
import img3 from '../assets/EVENEMENI IMAGE/DSC_4773.JPG';
import img4 from '../assets/EVENEMENI IMAGE/DSC_4774.JPG';
import img5 from '../assets/EVENEMENI IMAGE/DSC_4858.JPG';
import img6 from '../assets/EVENEMENI IMAGE/DSC_4859.JPG';
import img7 from '../assets/EVENEMENI IMAGE/DSC_4860.JPG';
import img8 from '../assets/EVENEMENI IMAGE/DSC_4861.JPG';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="w-full bg-scout-dark overflow-hidden">
      
      {/* ── SECTION 1 : HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Majestic background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-float"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')`,
            animationDuration: '24s'
          }}
        />
        {/* Dark overlay with linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-scout-dark via-scout-dark/65 to-scout-dark/30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-scout-dark/30 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Content Container */}
        <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center pt-24 pb-16">
          {/* Scroll / Logos marquee */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            {[churchLogo, logo, provinceLogo].map((src, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 rounded-full bg-scout-orange/20 blur-xl group-hover:bg-scout-orange/30 transition-all duration-300" />
                <img 
                  src={src} 
                  alt={idx === 0 ? 'Logo Église' : idx === 1 ? 'Logo LG La Base' : 'Logo Province'} 
                  className="relative w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border border-white/10 p-0.5 bg-scout-dark/40 shadow-lg transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LG <span className="text-gradient-orange">La Base</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-scout-text-secondary text-sm md:text-lg font-medium tracking-wider uppercase max-w-xl mb-10"
          >
            Groupe Scout Loulendo Gabriel — Paroisse EEC Djiri
          </motion.p>

          {/* Slogan pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['Amour', 'Unité', 'Foi'].map((word, i) => (
              <span
                key={word}
                className="px-5 py-2 rounded-full font-bold text-xs border border-white/5 bg-white/5 backdrop-blur-md text-white/90 hover:border-scout-orange/30 hover:text-scout-orange transition-all duration-300"
              >
                {word}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/a-propos"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-scout-orange hover:bg-scout-orange-hover text-white font-bold uppercase tracking-wider rounded-full shadow-lg shadow-scout-orange/20 hover:shadow-xl hover:shadow-scout-orange/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Découvrir le groupe
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 : VALUES & STATS ("Don'tik ou") ── */}
      <section className="py-24 relative z-20 border-t border-white/5 bg-scout-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Values list */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-xs font-bold tracking-widest uppercase mb-4">
                  Nos Valeurs
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  Le Socle de Notre Engagement
                </h2>
                <p className="text-scout-text-secondary text-sm leading-relaxed">
                  À travers des méthodes d'éducation non formelles, nous inculquons des principes qui forment le caractère des jeunes et les guident toute leur vie.
                </p>
              </div>

              {/* Grid of 4 icons */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <FiHeart className="text-xl" />, title: 'Amour', desc: 'Le partage et le respect.' },
                  { icon: <FiUsers className="text-xl" />, title: 'Unité', desc: 'Une seule grande famille.' },
                  { icon: <FiCompass className="text-xl" />, title: 'Foi', desc: 'Confiance et spiritualité.' },
                  { icon: <FiShield className="text-xl" />, title: 'Discipline', desc: 'Rigueur et apprentissage.' }
                ].map((val, idx) => (
                  <div key={idx} className="group flex flex-col gap-2 p-4 rounded-xl bg-scout-dark-card/40 border border-white/5 hover:border-scout-orange/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-scout-orange group-hover:bg-scout-orange group-hover:text-white transition-colors duration-300">
                      {val.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm mt-1">{val.title}</h3>
                    <p className="text-scout-text-secondary text-[11px] leading-snug">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Stat cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div className="rounded-2xl bg-scout-dark-card border border-white/5 overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={img1} 
                    alt="Scoutisme LG La Base" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scout-dark-card to-transparent" />
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <span className="text-scout-orange text-[10px] font-bold uppercase tracking-widest">01 / HISTOIRE</span>
                  <h3 className="text-3xl font-black text-white">10+ ANS</h3>
                  <p className="text-scout-text-secondary text-xs leading-relaxed">
                    Années d'existence à former la jeunesse à Brazzaville, rattachés à la paroisse EEC Djiri.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-scout-dark-card border border-white/5 overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={img2} 
                    alt="Membres scouts" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scout-dark-card to-transparent" />
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <span className="text-scout-orange text-[10px] font-bold uppercase tracking-widest">02 / EFFECTIFS</span>
                  <h3 className="text-3xl font-black text-white">150+</h3>
                  <p className="text-scout-text-secondary text-xs leading-relaxed">
                    Membres actifs et engagés, répartis dans les différentes branches de notre groupe.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3 : SUNSET PATH / MISSION ("Tomok wod Tentira Prom") ── */}
      <section className="py-24 border-t border-white/5 bg-scout-dark-card/30 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Texts */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-xs font-bold tracking-widest uppercase">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Éduquer, Inspirer & Servir la Communauté
              </h2>
              <p className="text-scout-text-secondary text-sm leading-relaxed">
                Le Groupe Scout Loulendo Gabriel s'efforce de contribuer à l'éducation complète des jeunes. Nous les guidons vers le développement physique, civique et spirituel pour en faire des citoyens autonomes et utiles.
              </p>
              <p className="text-scout-text-secondary text-sm leading-relaxed">
                Fortement intégrés au sein de la paroisse EEC de Djiri, nous allions les exigences de la méthode scoute mondiale de Baden-Powell et les principes chrétiens pour guider chaque jeune sur un chemin d'apprentissage et de solidarité.
              </p>
              <div className="pt-4">
                <Link 
                  to="/a-propos" 
                  className="inline-flex items-center gap-2 text-white hover:text-scout-orange text-sm font-semibold tracking-wider transition-colors duration-200 group"
                >
                  Découvrir notre historique 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right side: Scenic image */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-scout-orange to-transparent opacity-20 blur-xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1000&q=80" 
                  alt="Scenic mountain path at sunset" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scout-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white/80 text-xs font-semibold uppercase tracking-wider bg-scout-dark/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  Sentier de l'Aventure
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4 : ACTIVITIES / BRANCHES ("DUSAWS") ── */}
      <section className="py-24 border-t border-white/5 bg-scout-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-xs font-bold tracking-widest uppercase">
              Nos Branches
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Des Programmes Adaptés à Chaque Âge
            </h2>
            <p className="text-scout-text-secondary text-sm">
              La progression scoute est organisée en plusieurs tranches d'âge pour répondre au mieux aux besoins d'apprentissage et de développement des jeunes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: img5,
                branch: 'Louveteaux',
                age: '6 - 12 ANS',
                desc: 'La meute apprend la vie en communauté à travers le jeu et le développement de la créativité.'
              },
              {
                img: img6,
                branch: 'Éclaireurs',
                age: '12 - 17 ANS',
                desc: 'L\'aventure en patrouille, l\'apprentissage des techniques de campisme, de nœuds et d\'orientation.'
              },
              {
                img: img7,
                branch: 'Routiers',
                age: '17 - 25 ANS',
                desc: 'Le service communautaire, l\'engagement civique et la préparation à la vie d\'adulte responsable.'
              },
              {
                img: img8,
                branch: 'Grands Camps',
                age: 'CAMPINGS',
                desc: 'Rassemblements annuels réguliers en pleine nature pour tester nos compétences et vivre la fraternité.'
              }
            ].map((act, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-scout-dark-card border border-white/5 hover:border-scout-orange/20 transition-all duration-300 flex flex-col group hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={act.img} 
                    alt={act.branch} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scout-dark-card to-transparent" />
                  <span className="absolute top-4 left-4 bg-scout-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {act.age}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-scout-orange transition-colors">
                      {act.branch}
                    </h3>
                    <p className="text-scout-text-secondary text-xs leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <Link to="/activites" className="text-scout-orange hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors">
                      En savoir plus <FiArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 5 : EVENTS GRID ("No tle Tenddes") ── */}
      <section className="py-24 border-t border-white/5 bg-scout-dark-card/10">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="inline-block px-3 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-xs font-bold tracking-widest uppercase">
                Dernières Nouvelles
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Nos Prochains Événements
              </h2>
            </div>
            <div>
              <Link 
                to="/evenements"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block text-center"
              >
                Tous nos événements
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left side: two small event cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Event 1 */}
              <div className="rounded-xl bg-scout-dark-card border border-white/5 p-5 flex flex-col justify-between group hover:border-scout-orange/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-44 rounded-lg overflow-hidden relative">
                    <img 
                      src={img3} 
                      alt="Camp scout" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute bottom-3 left-3 bg-scout-dark/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                      AOÛT 2026
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-scout-orange transition-colors">
                      Camp National d'Été
                    </h3>
                    <p className="text-scout-text-secondary text-xs leading-relaxed">
                      Grand camp de formation technique et d'aventure pour toutes les patrouilles à l'intérieur du pays.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4">
                  <Link to="/evenements" className="text-scout-orange hover:text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors">
                    Détails <FiArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* Event 2 */}
              <div className="rounded-xl bg-scout-dark-card border border-white/5 p-5 flex flex-col justify-between group hover:border-scout-orange/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-44 rounded-lg overflow-hidden relative">
                    <img 
                      src={img4} 
                      alt="Action communautaire" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute bottom-3 left-3 bg-scout-dark/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                      SEPT 2026
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-scout-orange transition-colors">
                      Action Solidaire Djiri
                    </h3>
                    <p className="text-scout-text-secondary text-xs leading-relaxed">
                      Journée de salubrité et d'appui aux activités de reboisement dans notre quartier paroissial.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4">
                  <Link to="/evenements" className="text-scout-orange hover:text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors">
                    Détails <FiArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right side: large featured banner card */}
            <div className="rounded-xl bg-scout-dark-card border border-white/5 overflow-hidden relative aspect-[4/5] lg:aspect-auto flex flex-col justify-end group">
              <img 
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80" 
                alt="Misty mountains hike" 
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-102 transition-all duration-700 pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-scout-dark via-scout-dark/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-8 space-y-6">
                <span className="text-scout-orange text-[10px] font-bold uppercase tracking-widest">REJOINDRE LE MOUVEMENT</span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Envie de Rejoindre l'Aventure ?
                </h3>
                <p className="text-scout-text-secondary text-xs leading-relaxed">
                  Inscrivez votre enfant ou devenez chef scout pour contribuer activement à l'éducation de la jeunesse congolaise.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-scout-orange hover:bg-scout-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-md"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

