"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const certs = [
  { id: 1, title: "Luxury Brand Management", org: "SDA Bocconi", date: "2022", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Digital Strategy", org: "HBS Online", date: "2020", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" }
];

export default function FolderCertifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeCert = certs.find(c => c.id === selectedCert);

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 relative">
      <h2 className="font-serif text-5xl text-charcoal text-center mb-16">Credentials</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certs.map((c) => (
          <div key={c.id} className="bg-warm-ivory p-6 border-l-4 border-dusty-pink shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute right-[-20%] top-[-20%] opacity-5 font-serif text-9xl group-hover:scale-110 transition-transform pointer-events-none">
              {c.date.slice(-2)}
            </div>
            <h3 className="font-serif text-2xl text-charcoal">{c.title}</h3>
            <p className="text-sm uppercase tracking-widest text-muted-brown mt-2">{c.org}</p>
            <div className="mt-8 flex justify-between items-center">
              <span className="font-script text-xl text-charcoal/60">{c.date}</span>
              <button onClick={() => setSelectedCert(c.id)} className="px-4 py-2 rounded-lg bg-paper text-charcoal text-xs uppercase tracking-widest hover:bg-cream transition-colors shadow-sm border border-charcoal/5">
                View Document
              </button>
            </div>
          </div>
        ))}
      </div>

      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert !== null && activeCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 lg:p-12"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-warm-ivory p-4 rounded-xl shadow-2xl relative w-full max-w-4xl max-h-[90vh] flex flex-col"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-10"
                >
                  ✕
                </button>
                
                <div className="flex-grow overflow-hidden border border-charcoal/10 rounded-lg bg-cream">
                  <img 
                    src={activeCert.image} 
                    alt={activeCert.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center pt-6 pb-2">
                  <h3 className="font-serif text-3xl text-charcoal">{activeCert.title}</h3>
                  <p className="text-sm tracking-widest uppercase text-muted-brown mt-2">{activeCert.org} · {activeCert.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
