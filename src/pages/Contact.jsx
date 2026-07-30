import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiClock, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-scout-dark text-scout-text-primary">

      {/* ── EN-TÊTE ── */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-scout-orange/5 via-scout-dark to-scout-dark-card/30">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-scout-orange/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-scout-orange/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-scout-orange/15 text-scout-orange text-sm font-bold mb-4 tracking-wide uppercase">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contactez-<span className="text-gradient-orange">nous</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-scout-orange to-scout-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-scout-text-secondary max-w-xl mx-auto px-4">
            Nous sommes à votre écoute pour toute question ou demande d'adhésion.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-gradient-to-br from-scout-orange to-scout-dark rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white/10" />

            <h2 className="text-2xl font-bold mb-2 relative z-10">Informations</h2>
            <p className="text-white/50 text-sm mb-8 relative z-10">Retrouvez-nous via ces coordonnées</p>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-scout-dark/60 transition-colors duration-300">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Adresse</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Paroisse EEC, Province Djiri<br />Brazzaville, République du Congo</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-scout-dark/60 transition-colors duration-300">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Téléphone</h3>
                  <p className="text-white/60 text-sm">+242 06 000 00 00</p>
                  <p className="text-white/60 text-sm">+242 05 000 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-scout-dark/60 transition-colors duration-300">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-white/60 text-sm">contact@scoutsloulendo.cg</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-scout-dark/60 transition-colors duration-300">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Horaires</h3>
                  <p className="text-white/60 text-sm">Sam - Dim: 8h00 - 17h00</p>
                </div>
              </div>
            </div>

            {/* Mini chat */}
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <FiMessageCircle className="text-white" />
                <span className="text-sm font-bold">Réponse rapide</span>
              </div>
              <p className="text-white/50 text-xs">Nous répondons généralement sous 24h</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-scout-dark-card rounded-3xl p-8 lg:p-10 border border-white/5 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-scout-orange/10 text-scout-orange">
                <FiSend className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Envoyez un message</h2>
                <p className="text-scout-text-secondary text-sm">Remplissez le formulaire ci-dessous</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-scout-text-secondary mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-scout-dark focus:ring-2 focus:ring-scout-orange/30 focus:border-scout-orange transition-all duration-200 text-sm text-white placeholder-gray-600"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-scout-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-scout-dark focus:ring-2 focus:ring-scout-orange/30 focus:border-scout-orange transition-all duration-200 text-sm text-white placeholder-gray-600"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-scout-text-secondary mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-scout-dark focus:ring-2 focus:ring-scout-orange/30 focus:border-scout-orange transition-all duration-200 text-sm text-white placeholder-gray-600"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-scout-text-secondary mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-scout-dark focus:ring-2 focus:ring-scout-orange/30 focus:border-scout-orange transition-all duration-200 resize-none text-sm text-white placeholder-gray-600"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              <button className="w-full bg-scout-orange text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-scout-orange-hover transition-all duration-300 shadow-lg shadow-scout-orange/20 hover:-translate-y-0.5 cursor-pointer">
                Envoyer le message
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
