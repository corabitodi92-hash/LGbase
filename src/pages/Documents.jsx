import { useState } from 'react';
import { motion } from 'framer-motion';
import { documentsData } from '../data/mockData';
import { FiDownload, FiFileText, FiSearch, FiFile } from 'react-icons/fi';
import { FaFilePdf, FaFileWord, FaFileExcel } from 'react-icons/fa';

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('Tous');

  const types = ['Tous', 'PDF', 'Word', 'Excel'];

  const getIcon = (type) => {
    switch (type) {
      case 'PDF': return <FaFilePdf className="text-red-500 text-3xl" />;
      case 'Word': return <FaFileWord className="text-blue-500 text-3xl" />;
      case 'Excel': return <FaFileExcel className="text-green-500 text-3xl" />;
      default: return <FiFile className="text-gray-500 text-3xl" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'PDF': return 'bg-red-500/10';
      case 'Word': return 'bg-blue-500/10';
      case 'Excel': return 'bg-green-500/10';
      default: return 'bg-white/5';
    }
  };

  const filteredDocs = documentsData.filter(doc => {
    const matchesSearch = doc.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'Tous' || doc.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-scout-dark text-scout-text-primary">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-orange/5 via-scout-dark to-scout-dark-card/30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-scout-orange/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/15 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            Ressources
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bibliothèque de <span className="text-gradient-orange">Documents</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-scout-text-secondary max-w-2xl mx-auto px-4">
            Téléchargez les formulaires, règlements et rapports officiels.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Filters and Search */}
        <div className="bg-scout-dark-card p-5 rounded-2xl border border-white/5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
          <div className="flex gap-2 flex-wrap justify-center">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeType === type
                    ? 'bg-scout-orange text-white shadow-md shadow-scout-orange/20'
                    : 'bg-scout-dark text-scout-text-secondary hover:bg-white/5 border border-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2.5 border border-white/10 rounded-xl bg-scout-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-scout-orange/20 focus:border-scout-orange transition-all duration-200 text-sm"
              placeholder="Rechercher un document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Documents List */}
        <motion.div layout className="bg-scout-dark-card rounded-2xl border border-white/5 overflow-hidden shadow-md">
          {filteredDocs.length > 0 ? (
            <ul className="divide-y divide-white/5">
              {filteredDocs.map((doc, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={doc.id}
                  className="p-6 hover:bg-white/5 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-2xl ${getBgColor(doc.type)} group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(doc.type)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-scout-orange transition-colors">{doc.nom}</h3>
                      <div className="flex gap-3 text-xs text-scout-text-secondary mt-1.5">
                        <span className="font-medium">{doc.taille}</span>
                        <span className="text-white/20">•</span>
                        <span>Mise à jour : {doc.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-11 h-11 bg-scout-orange/10 text-scout-orange rounded-xl hover:bg-scout-orange hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-scout-orange/20 cursor-pointer">
                    <FiDownload className="text-lg" />
                  </button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="p-16 text-center text-scout-text-secondary">
              <FiFileText className="text-5xl mx-auto text-gray-700 mb-4" />
              <p className="text-lg">Aucun document trouvé.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
