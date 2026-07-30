import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photosData } from '../data/mockData';
import { FiSearch, FiDownload, FiZoomIn, FiX } from 'react-icons/fi';

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = photosData.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenLightbox = (index) => {
    const originalIndex = photosData.findIndex(p => p.src === filteredPhotos[index].src);
    setCurrentIndex(originalIndex !== -1 ? originalIndex : 0);
    setOpen(true);
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
            Galerie
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Galerie <span className="text-gradient-orange">Photos</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-8" />
          <div className="max-w-md mx-auto relative px-4">
            <div className="absolute inset-y-0 left-7 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3.5 border border-white/10 rounded-full leading-5 bg-scout-dark-card text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-scout-orange/20 focus:border-scout-orange transition-all duration-200 text-sm"
              placeholder="Rechercher une photo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-7 pr-3 flex items-center text-gray-500 hover:text-white"
              >
                <FiX size={16} />
              </button>
            )}
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-sm bg-scout-dark-card cursor-pointer aspect-square border border-white/5 hover:border-scout-orange/20 transition-all duration-300"
              onClick={() => handleOpenLightbox(index)}
            >
              {photo.type === 'video' ? (
                <video src={photo.src} className="w-full aspect-square object-cover" />
              ) : (
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              {/* Caption below the media */}
              <div className="p-2 text-center bg-scout-dark-card/95 backdrop-blur-sm border-t border-white/5">
                <h3 className="font-bold text-base text-white">{photo.title}</h3>
                <p className="text-xs text-scout-text-secondary">{photo.description}</p>
              </div>
              {/* Overlay for zoom/download */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:scale-110 transition-transform">
                  <FiZoomIn className="text-xl" />
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); window.open(photo.src, '_blank'); }}
                  className="mt-3 p-2 bg-scout-orange hover:bg-scout-orange-hover rounded-full transition-colors border border-white/20"
                  title="Télécharger"
                >
                  <FiDownload size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-scout-text-secondary">
            <div className="text-5xl mb-4">📷</div>
            <p className="text-lg">Aucune photo ne correspond à votre recherche.</p>
          </div>
        )}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={photosData.map(p => ({ src: p.src, alt: p.title, description: p.description }))}
        />
      </div>
    </div>
  );
}
