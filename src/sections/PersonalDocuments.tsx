import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Eye, Lock } from 'lucide-react';
import { personalDocuments, type PersonalDocumentItem } from '../data/documents';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export const PersonalDocuments: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<PersonalDocumentItem | null>(null);

  return (
    <section id="documents" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-burgundy uppercase tracking-widest">
          07 // Identity Documents
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-burgundy/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-brand-warm-gray tracking-tight">
            Personal Documents
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
            Official government-issued identity documents and verification records.
          </p>
        </div>

        {/* Privacy Note Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 self-start md:self-auto">
          <Lock className="w-3.5 h-3.5 text-brand-burgundy" />
          <span>Official identity verification</span>
        </div>
      </div>

      {/* Compact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {personalDocuments.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative"
          >
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-brand-burgundy/40 dark:hover:border-brand-burgundy/40 transition-all duration-200 flex flex-col justify-between h-full bg-white/70 dark:bg-dark-card/60 backdrop-blur-sm shadow-sm hover:shadow-md">
              {/* Top tag */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-burgundy/10 border border-brand-burgundy/20 flex items-center justify-center text-brand-burgundy group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Original Document
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-brand-slate font-medium mb-1">
                  Identity Document
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-brand-warm-gray leading-snug">
                  {doc.title}
                </h3>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/5">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-brand-burgundy/10 hover:bg-brand-burgundy text-brand-burgundy hover:text-white border border-brand-burgundy/30 transition-all text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
                  aria-label={`View ${doc.title} document`}
                >
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Document</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Document Modal */}
      {selectedDoc && (
        <ImageLightboxModal
          isOpen={Boolean(selectedDoc)}
          onClose={() => setSelectedDoc(null)}
          title={selectedDoc.title}
          category="Official Identity Document"
          badge="Verified Record"
          imageSrc={selectedDoc.image}
          altText={`${selectedDoc.title} document`}
        />
      )}
    </section>
  );
};
