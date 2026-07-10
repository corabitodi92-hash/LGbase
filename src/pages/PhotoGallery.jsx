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
    <div className="min-h-screen bg-white">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-green/10 via-white to-scout-orange/5">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-scout-green/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-green/10 text-scout-green text-sm font-bold mb-4 tracking-wide uppercase">
            Galerie
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Galerie <span className="text-gradient-green">Photos</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-green to-scout-orange mx-auto rounded-full mb-8" />
          <div className="max-w-md mx-auto relative px-4">
            <div className="absolute inset-y-0 left-7 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-scout-green/20 focus:border-scout-green transition-all duration-200 text-sm"
              placeholder="Rechercher une photo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-7 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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
              className="relative group rounded-2xl overflow-hidden shadow-sm bg-gray-100 cursor-pointer aspect-square border border-gray-100 hover:shadow-xl transition-all duration-300"
              onClick={() => handleOpenLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:scale-110 transition-transform">
                  <FiZoomIn className="text-xl" />
                </div>
                <h3 className="font-bold text-lg">{photo.title}</h3>
                <p className="text-sm text-white/70">{photo.description}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); window.open(photo.src, '_blank'); }}
                  className="mt-3 p-2 bg-scout-orange/80 backdrop-blur-sm rounded-full hover:bg-scout-orange transition-colors border border-white/20"
                  title="Télécharger"
                >
                  <FiDownload size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-gray-500">
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
