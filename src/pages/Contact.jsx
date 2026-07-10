import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-scout-green mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">Nous sommes à votre écoute pour toute question ou demande d'adhésion.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-scout-green rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-scout-orange opacity-20"></div>
            
            <h2 className="text-3xl font-bold mb-8 relative z-10">Informations</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-white/80">Paroisse EEC, Province Djiri<br/>Brazzaville, République du Congo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                  <p className="text-white/80">+242 00 000 00 00<br/>+242 00 000 00 00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-white/80">contact@scouts-loulendo.cg</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez un message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scout-green focus:border-transparent transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scout-green focus:border-transparent transition-all" placeholder="Votre email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scout-green focus:border-transparent transition-all" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scout-green focus:border-transparent transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button className="w-full bg-scout-orange text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-scout-yellow hover:text-scout-green transition-all shadow-md">
                Envoyer le message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
