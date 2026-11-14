"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  { id: 1, title: "Marketer of the Year", org: "Luxury Beauty Association", year: "2023", points: ["Awarded for redefining heritage brand communications.", "Successfully launched the Gen-Z engagement initiative.", "Recognized among 500+ global nominees."] },
  { id: 2, title: "30 Under 30", org: "Forbes", year: "2020", points: ["Recognized for innovative strategies in consumer luxury engagement.", "Highlighted as a key voice in digital brand transformation.", "Featured in the December issue."] },
  { id: 3, title: "Best Digital Campaign", org: "Glossy Awards", year: "2019", points: ["Won for the 'Future of Fragrance' immersive web experience.", "Achieved highest consumer engagement rate of the year.", "Pioneered tactile digital design principles."] }
];

export default function FolderAwards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-16 text-center">Honors & Accolades</h2>
      <div className="space-y-12 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-charcoal/10 hidden lg:block" />
        
        {awards.map((award, i) => (
          <div key={award.id} className={`flex flex-col lg:flex-row items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row-reverse text-right' : 'text-left'}`}>
            <div className="w-full lg:w-1/2 cursor-pointer" onClick={() => setExpandedId(expandedId === award.id ? null : award.id)}>
              <div className={`bg-paper p-8 shadow-paper border border-black/5 relative transition-all duration-300 ${expandedId === award.id ? 'scale-105 rotate-0 z-10 bg-white' : i % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-burgundy/20 shadow-inner" />
                <h3 className="font-serif text-3xl mt-4 text-charcoal">{award.title}</h3>
                <p className="font-sans text-sm tracking-widest uppercase text-muted-brown mt-4">{award.org}</p>
                <div className="mt-6 text-right font-script text-2xl text-charcoal/50">
                  {award.year}
                </div>
                
                <AnimatePresence>
                  {expandedId === award.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden text-left mt-6 pt-6 border-t border-charcoal/10"
                    >
                      <ul className="list-disc pl-5 space-y-2 font-serif text-lg text-charcoal/80">
                        {award.points.map((pt, idx) => (
                          <li key={idx}>{pt}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="hidden lg:block w-4 h-4 rounded-full bg-cream border border-charcoal/20 z-10 mt-12" />
            <div className="w-full lg:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
