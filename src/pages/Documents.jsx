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
      case 'PDF': return 'bg-red-50';
      case 'Word': return 'bg-blue-50';
      case 'Excel': return 'bg-green-50';
      default: return 'bg-gray-50';
    }
  };

  const filteredDocs = documentsData.filter(doc => {
    const matchesSearch = doc.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'Tous' || doc.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-green/10 via-white to-scout-orange/5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-scout-green/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/10 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            Ressources
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Bibliothèque de <span className="text-gradient-green">Documents</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-green to-scout-orange mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Téléchargez les formulaires, règlements et rapports officiels.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Filters and Search */}
        <div className="bg-white p-5 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          <div className="flex gap-2 flex-wrap justify-center">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeType === type
                    ? 'bg-scout-green text-white shadow-md shadow-scout-green/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-scout-green/20 focus:border-scout-green transition-all duration-200 text-sm"
              placeholder="Rechercher un document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Documents List */}
        <motion.div layout className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filteredDocs.length > 0 ? (
            <ul className="divide-y divide-gray-50">
              {filteredDocs.map((doc, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={doc.id}
                  className="p-6 hover:bg-gray-50/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-2xl ${getBgColor(doc.type)} group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(doc.type)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-scout-green transition-colors">{doc.nom}</h3>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1.5">
                        <span className="font-medium">{doc.taille}</span>
                        <span className="text-gray-300">•</span>
                        <span>Mise à jour : {doc.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-11 h-11 bg-scout-orange/10 text-scout-orange rounded-xl hover:bg-scout-orange hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-scout-orange/20">
                    <FiDownload className="text-lg" />
                  </button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="p-16 text-center text-gray-500">
              <FiFileText className="text-5xl mx-auto text-gray-300 mb-4" />
              <p className="text-lg">Aucun document trouvé.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
