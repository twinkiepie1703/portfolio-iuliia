"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const edu = [
  {
    id: 1,
    uni: "London School of Economics (LSE)",
    degree: "MSc in Consumer Behavior",
    dates: "2014—2015",
    details: ["Focus on psychological drivers of luxury consumption.", "Thesis: The impact of digital scarcity on Gen Z luxury perception.", "Graduated with Distinction."]
  },
  {
    id: 2,
    uni: "University of the Arts London",
    degree: "BA (Hons) Fashion Marketing",
    dates: "2010—2014",
    details: ["First Class Honors.", "Final project: 'The Digital Future of Heritage Brands'.", "President of the Fashion Business Society."]
  }
];

export default function FolderEducation() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="font-serif text-5xl mb-12 text-center text-charcoal">Academic Archive</h2>
      <div className="space-y-12">
        {edu.map((item, index) => (
          <div 
            key={item.id}
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            className={`bg-cream p-8 shadow-paper border border-charcoal/5 cursor-pointer transition-all duration-300 ${index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'} ${expandedId === item.id ? 'scale-105 rotate-0 z-10 bg-white' : ''}`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div>
                <h3 className="font-serif text-3xl mb-2 text-charcoal">{item.degree}</h3>
                <p className="text-sm tracking-widest uppercase text-muted-brown">{item.uni}</p>
              </div>
              <div className="text-right">
                <span className="font-script text-2xl text-charcoal/60">{item.dates}</span>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-6 pt-6 border-t border-charcoal/10"
                >
                  <ul className="list-disc pl-5 space-y-2 font-serif text-lg text-charcoal/80">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
