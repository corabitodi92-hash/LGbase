import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiDownload, FiChevronLeft, FiChevronRight, FiUsers, FiCalendar, FiAward, FiHeart } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Scale, Users, Cross, Heart, Leaf, UsersRound, Zap } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import logo from '../assets/LOGO_LOULENDO.jpg';
import provinceLogo from '../assets/logoprovince.jpeg';
import churchLogo from '../assets/logoeglise.jpeg';
import scoutBg from '../assets/scout_salute_bg.png';
import img1 from '../assets/EVENEMENI IMAGE/DSC_4771.JPG';
// Duplicate import removed
import img2 from '../assets/EVENEMENI IMAGE/DSC_4772.JPG';
import img3 from '../assets/EVENEMENI IMAGE/DSC_4773.JPG';
import img4 from '../assets/EVENEMENI IMAGE/DSC_4774.JPG';
import img5 from '../assets/EVENEMENI IMAGE/DSC_4858.JPG';
import img6 from '../assets/EVENEMENI IMAGE/DSC_4859.JPG';
import img7 from '../assets/EVENEMENI IMAGE/DSC_4860.JPG';
import img8 from '../assets/EVENEMENI IMAGE/DSC_4861.JPG';
import img9 from '../assets/EVENEMENI IMAGE/DSC_4882.JPG';
import img10 from '../assets/EVENEMENI IMAGE/DSC_4883.JPG';

const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const sloganWords = [
    'Amour','Unité', 'Foi'
];

const stats = [
  { icon: <FiUsers />, value: '150+', label: 'Membres actifs' },
  { icon: <FiCalendar />, value: '10+', label: "Années d'existence" },
  { icon: <FiAward />, value: '50+', label: 'Événements réalisés' },
  { icon: <FiHeart />, value: '20+', label: 'Actions communautaires' },
];

const valeurs = [
  { label: 'Discipline', icon: <Scale size={24} className="text-[#166534]" />, color: '#008A3D', desc: 'Se discipliner soi-même pour devenir le meilleur version de soi et servir les autres avec rigueur.' },
  { label: 'Unité', icon: <Users size={24} className="text-[#22C55E]" />, color: '#E67200', desc: 'Unis, nous formons une seule famille capable de relever tous les défis ensemble.' },
  { label: 'Foi', icon: <Cross size={24} className="text-[#166534]" />, color: '#008A3D', desc: "Ancrés dans la foi chrétienne, nous marchons avec confiance vers l'avenir." },
  { label: 'Amour', icon: <Heart size={24} className="text-[#EA580C]" />, color: '#E67200', desc: "L'amour du prochain guide chacun de nos gestes et de nos actions quotidiennes." },
  { label: 'Service', icon: <Leaf size={24} className="text-[#166534]" />, color: '#008A3D', desc: "Servir la communauté sans compter, c'est au cœur de notre mission scoute." },
  { label: 'Fraternité', icon: <UsersRound size={24} className="text-[#22C55E]" />, color: '#E67200', desc: "Le lien fraternel nous unis au-delà des différences, dans le respect mutuel." },
  { label: 'Engagement', icon: <Zap size={24} className="text-[#166534]" />, color: '#008A3D', desc: 'Nous nous engageons pleinement pour un monde plus juste et plus solidaire.' },
];

function FlipCard({ val, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative h-52 cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FACE AVANT */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border backface-hidden"
          style={{
            backgroundColor: val.color + '06',
            borderColor: val.color + '18',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Anneau de bordure anime */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: `inset 0 0 30px ${val.color}15, 0 0 20px ${val.color}10`,
            }}
          />
          {/* Icone flottante */}
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
            className="text-5xl relative z-10"
          >
            {val.icon}
          </motion.span>
          <span className="font-bold text-gray-800 text-base relative z-10">{val.label}</span>
          {/* Indicateur flip */}
          <span className="text-[10px] text-gray-300 font-medium uppercase tracking-widest relative z-10">Cliquer</span>
        </div>

        {/* FACE ARRIERE */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 border backface-hidden"
          style={{
            backgroundColor: val.color,
            borderColor: val.color,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-3xl mb-1">{val.icon}</span>
          <span className="font-bold text-white text-lg">{val.label}</span>
          <p className="text-white/80 text-sm leading-relaxed">{val.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => { setDirection(1); setCurrentImg((prev) => (prev + 1) % carouselImages.length); };
  const goPrev = () => { setDirection(-1); setCurrentImg((prev) => (prev - 1 + carouselImages.length) % carouselImages.length); };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 1.05 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.95, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }),
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO SECTION ── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section" style={{ backgroundImage: `url(${scoutBg})` }}>

                <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
{/* Grille subtile de fond */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Cercles decoratifs animés */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-white/[0.03] translate-x-1/2 translate-y-1/2"
        />

        {/* Particules flottantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${6 + i * 3}px`,
              height: `${6 + i * 3}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              backgroundColor: i % 2 === 0 ? 'rgba(0,138,61,0.4)' : 'rgba(230,114,0,0.3)',
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        ))}

        {/* Gradient radial derrière le contenu */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,138,61,0.15)_0%,transparent_60%)]" />

        {/* Contenu Hero */}
        <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center pt-10 pb-20 min-h-screen">

          {/* Logos scrolling marquee */}
          <div className="relative overflow-hidden h-56 flex items-center justify-center mask-fade logo-marquee">
  <motion.div className="flex gap-8" animate={{ x: ['0%', '-100%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
    {[churchLogo, logo, provinceLogo].map((src, idx) => (
      <motion.div key={idx} className="relative">
        <div className="absolute inset-0 rounded-full bg-scout-green/20 blur-3xl animate-pulse-glow" />
        <img src={src} alt={idx === 0 ? 'Logo Église' : idx === 1 ? 'Logo LG La Base' : 'Logo Province'} className="relative w-56 h-56 object-cover rounded-full" />
      </motion.div>
    ))}
  </motion.div>
</div>

          {/* Titre */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-extrabold text-white mb-3 tracking-tight"
          >
            LG <span className="text-gradient-orange">La Base</span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 text-lg md:text-xl mb-6 tracking-wide"
          >
            Groupe Scout Loulendo Gabriel
          </motion.p>

          {/* Slogan avec mots qui s'animent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-2xl"
          >
            {sloganWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2 rounded-full font-bold text-sm border cursor-default"
                style={{
                  backgroundColor: i % 2 === 0 ? 'rgba(0,138,61,0.15)' : 'rgba(230,114,0,0.15)',
                  color: i % 2 === 0 ? '#4ade80' : '#fb923c',
                  borderColor: i % 2 === 0 ? 'rgba(0,138,61,0.3)' : 'rgba(230,114,0,0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 z-20"
          >
            <Link
              to="/a-propos"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-scout-orange text-white font-bold rounded-full shadow-lg shadow-scout-orange/30 hover:shadow-xl hover:shadow-scout-orange/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Découvrir
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/activites"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-scout-green/90 text-white font-bold rounded-full shadow-lg shadow-scout-green/30 hover:shadow-xl hover:shadow-scout-green/40 hover:bg-scout-green hover:-translate-y-0.5 transition-all duration-300"
            >
              Activités
              <FiActivity className="group-hover:rotate-12 transition-transform" />
            </Link>
            <Link
              to="/documents"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-bold rounded-full hover:bg-white/10 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Documents
              <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Flèche vers le bas */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-scout-green/10 text-scout-green mb-3 group-hover:bg-scout-green group-hover:text-white transition-all duration-300">
                <span className="text-xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CARROUSEL D'IMAGES ── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-scout-green/10 text-scout-green text-sm font-bold mb-4 tracking-wide uppercase">
              Galerie
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Nos Moments en <span className="text-gradient-orange">Images</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-scout-green to-scout-orange mx-auto rounded-full" />
          </motion.div>

          {/* Carrousel amélioré */}
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ height: '480px' }}>
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentImg}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={carouselImages[currentImg]}
                alt={`Photo scout ${currentImg + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dégradés */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Numéro d'image */}
            <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-sm font-medium border border-white/10">
              {String(currentImg + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
            </div>

            {/* Indicateurs (points) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentImg ? 1 : -1); setCurrentImg(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentImg ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Boutons gauche/droite */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-md hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all border border-white/10 hover:scale-110"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-md hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all border border-white/10 hover:scale-110"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ── VALEURS ANIMÉES ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Fondamentales & <span className="text-gradient-green">Inébranlables</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-sm max-w-md mx-auto">Cliquez sur une carte pour découvrir sa signification</p>
          </motion.div>

          {/* Bandeau defilant automatiquement (double pour effet infini) */}
          <div className="relative mb-14">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 w-max"
            >
              {[...valeurs, ...valeurs].map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border whitespace-nowrap text-sm font-bold"
                  style={{
                    borderColor: val.color + '30',
                    color: val.color,
                    backgroundColor: val.color + '08',
                  }}
                >
                  <span className="text-lg">{val.icon}</span>
                  {val.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Grille de cartes interactives avec flip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 perspective-[1000px]">
            {valeurs.map((val, i) => (
              <FlipCard key={val.label} val={val} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-24 bg-gradient-to-b from-scout-green/5 to-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-scout-green/10 text-scout-green text-sm font-bold mb-4 tracking-wide uppercase">
              Notre Groupe
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Bienvenue sur <span className="text-gradient-orange">LG La Base</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Nous sommes un groupe scout dynamique rattaché à la Province Djiri et à l'Église Évangélique du Congo (EEC).
            Notre mission est de former la jeunesse à travers les valeurs du scoutisme pour bâtir un monde meilleur.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/a-propos"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-scout-green text-white font-bold rounded-full shadow-lg shadow-scout-green/20 hover:shadow-xl hover:shadow-scout-green/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              En savoir plus
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-scout-green text-scout-green font-bold rounded-full hover:bg-scout-green hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
