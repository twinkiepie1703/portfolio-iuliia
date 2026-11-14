"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Maison de Beauté",
    role: "Global Marketing Director",
    dates: "2021 — Present",
    desc: "Led global marketing strategies for a heritage beauty brand, balancing historical prestige with modern digital accessibility.",
    image: "https://images.unsplash.com/photo-1596462502278-27bf84033001?q=80&w=800&auto=format&fit=crop",
    details: ["Orchestrated skincare relaunch (+40% YoY).", "Developed 360° global campaigns.", "Managed 15+ creatives."]
  },
  {
    id: 2,
    company: "Luxe Analytics",
    role: "Senior Brand Strategist",
    dates: "2018 — 2021",
    desc: "Consulted top-tier luxury fashion houses on digital transformation and emerging market playbooks.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    details: ["Authored comprehensive brand playbooks.", "Ethnographic consumer research.", "Advised C-level executives."]
  },
  {
    id: 3,
    company: "Vogue International",
    role: "Digital Content Editor",
    dates: "2015 — 2018",
    desc: "Curated and produced editorial content focusing on beauty innovations and luxury skincare.",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop",
    details: ["Edited features on beauty trends.", "Collaborated on high-profile shoots.", "Grew readership by 25%."]
  }
];

export default function FolderExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-16 relative">
      <div className="flex items-end justify-between border-b border-charcoal/10 pb-4 mb-12">
        <h2 className="font-serif text-4xl lg:text-6xl text-charcoal">Case Files</h2>
        <span className="font-script text-2xl text-burgundy -rotate-3">Professional Record</span>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={exp.id} className="relative group cursor-pointer" onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}>
            {/* The Document */}
            <div className={`bg-warm-ivory border border-charcoal/10 shadow-paper p-8 lg:p-12 transition-all duration-500 relative z-10 ${expandedId === exp.id ? 'scale-[1.02] bg-white' : 'hover:scale-[1.01]'}`}>
              
              {/* Paper clip or staple visual */}
              <div className="absolute top-4 left-4 w-8 h-2 border-2 border-gray-400 rounded-full bg-transparent -rotate-12 opacity-50" />

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/3">
                  <div className="aspect-[4/5] bg-cream p-2 shadow-sm -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <img src={exp.image} alt={exp.company} className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3 space-y-4 pt-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <h3 className="font-serif text-2xl lg:text-4xl text-charcoal">{exp.company}</h3>
                      <p className="font-sans text-[10px] md:text-sm tracking-widest uppercase text-muted-brown mt-1">{exp.role}</p>
                    </div>
                    <span className="font-script text-xl text-charcoal/60 lg:text-right whitespace-nowrap">{exp.dates}</span>
                  </div>
                  
                  <p className="font-sans text-charcoal/80 leading-relaxed text-lg">
                    {exp.desc}
                  </p>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-charcoal/10 mt-6 space-y-4">
                          <h4 className="text-xs tracking-widest uppercase text-burgundy">Key Outcomes</h4>
                          <ul className="list-disc pl-5 space-y-2 font-serif text-lg text-charcoal/90">
                            {exp.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {!expandedId || expandedId !== exp.id ? (
                    <div className="pt-4 text-xs tracking-widest uppercase text-charcoal/50 flex items-center gap-2">
                      Open File <span className="w-6 h-[1px] bg-charcoal/30 inline-block" />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
