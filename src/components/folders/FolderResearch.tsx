"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  { id: 1, title: "The Illusion of Scarcity in the Digital Era", journal: "Journal of Luxury Brand Strategy", date: "Oct 2023", tags: ["Luxury", "Behavior"] },
  { id: 2, title: "Scent and Memory: Marketing the Intangible", journal: "Beauty Industry Insights", date: "Mar 2022", tags: ["Beauty"] }
];

export default function FolderResearch() {
  const [reading, setReading] = useState(false);

  return (
    <div className="max-w-5xl mx-auto min-h-full relative">
      <AnimatePresence mode="wait">
        {!reading ? (
          <motion.div key="list" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, scale:0.95}} className="space-y-12">
            <h2 className="font-serif text-5xl text-charcoal mb-12">Research Library</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.map(art => (
                <div key={art.id} onClick={() => setReading(true)} className="bg-warm-ivory p-8 border border-charcoal/10 shadow-sm hover:shadow-paper hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="flex gap-2 mb-4">
                    {art.tags.map(t => <span key={t} className="text-[10px] uppercase tracking-widest border border-charcoal/20 px-2 py-1 rounded-sm">{t}</span>)}
                  </div>
                  <h3 className="font-serif text-3xl mb-4 group-hover:text-burgundy transition-colors">{art.title}</h3>
                  <div className="flex justify-between items-center mt-8 pt-4 border-t border-charcoal/10 text-xs tracking-widest text-muted-brown">
                    <span>{art.journal}</span>
                    <span>{art.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="article" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-white p-8 md:p-16 shadow-2xl relative">
            <button onClick={() => setReading(false)} className="absolute top-8 left-8 text-xs uppercase tracking-widest hover:text-burgundy">← Back</button>
            <div className="max-w-2xl mx-auto mt-12 prose prose-lg font-sans">
              <h1 className="font-serif text-4xl text-center mb-8">The Illusion of Scarcity</h1>
              <p>In the modern landscape of luxury marketing, the absence of noise has become the ultimate status symbol. As digital environments become increasingly cluttered, brands that choose restraint signal a profound confidence.</p>
              <blockquote>"True luxury does not shout; it merely exists, waiting to be discovered."</blockquote>
              <p>Ultimately, minimalism in luxury is about curation. It is the understanding that what you choose to omit is just as important as what you choose to include.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
