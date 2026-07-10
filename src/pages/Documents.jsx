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
    switch(type) {
      case 'PDF': return <FaFilePdf className="text-red-500 text-3xl" />;
      case 'Word': return <FaFileWord className="text-blue-500 text-3xl" />;
      case 'Excel': return <FaFileExcel className="text-green-500 text-3xl" />;
      default: return <FiFile className="text-gray-500 text-3xl" />;
    }
  };

  const filteredDocs = documentsData.filter(doc => {
    const matchesSearch = doc.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'Tous' || doc.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-4">Bibliothèque de Documents</h1>
          <p className="text-xl text-gray-600">Téléchargez les formulaires, règlements et rapports officiels.</p>
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          <div className="flex gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeType === type 
                    ? 'bg-scout-green text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-scout-green focus:border-scout-green sm:text-sm"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Documents List */}
        <motion.div layout className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filteredDocs.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {filteredDocs.map((doc, index) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={doc.id} 
                  className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      {getIcon(doc.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{doc.nom}</h3>
                      <div className="flex gap-3 text-sm text-gray-500 mt-1">
                        <span>{doc.taille}</span>
                        <span>•</span>
                        <span>Mise à jour : {doc.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-10 h-10 bg-scout-orange/10 text-scout-orange rounded-full hover:bg-scout-orange hover:text-white transition-colors">
                    <FiDownload className="text-lg" />
                  </button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <FiFileText className="text-5xl mx-auto text-gray-300 mb-4" />
              <p className="text-lg">Aucun document trouvé.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
