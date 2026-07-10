import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photosData } from '../data/mockData';
import { FiSearch, FiDownload, FiZoomIn } from 'react-icons/fi';

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = photosData.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    photo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenLightbox = (index) => {
    // Find the original index in photosData
    const originalIndex = photosData.findIndex(p => p.src === filteredPhotos[index].src);
    setCurrentIndex(originalIndex !== -1 ? originalIndex : 0);
    setOpen(true);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-6 text-center">Galerie Photos</h1>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-scout-orange focus:border-scout-orange sm:text-sm transition duration-150 ease-in-out"
              placeholder="Rechercher une photo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md bg-gray-100 cursor-pointer aspect-square"
              onClick={() => handleOpenLightbox(index)}
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <FiZoomIn className="text-3xl mb-2" />
                <h3 className="font-bold text-lg">{photo.title}</h3>
                <p className="text-sm">{photo.description}</p>
                
                {/* Download button - stop propagation so lightbox doesn't open */}
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(photo.src, '_blank'); }}
                  className="mt-4 p-2 bg-scout-orange rounded-full hover:bg-scout-yellow transition-colors"
                  title="Télécharger"
                >
                  <FiDownload />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            Aucune photo ne correspond à votre recherche.
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
