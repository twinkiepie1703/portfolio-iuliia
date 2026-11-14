"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notes = [
  { id: 1, title: "What makes a luxury brand feel timeless?", cat: "NOTES / 04", date: "Oct 12", excerpt: "An observation on heritage vs hype." },
  { id: 2, title: "The Return of the Tactile", cat: "NOTES / 03", date: "Sep 05", excerpt: "Investing in texture in a digital world." }
];

export default function FolderJournal() {
  const [active, setActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="list" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-12">
            <h2 className="font-serif text-5xl text-charcoal mb-12">Notes & Observations</h2>
            {notes.map(n => (
              <div key={n.id} onClick={() => setActive(true)} className="group cursor-pointer border-b border-charcoal/10 pb-8 hover:px-4 transition-all">
                <div className="text-xs tracking-widest uppercase text-burgundy mb-2">{n.cat} · {n.date}</div>
                <h3 className="font-serif text-4xl mb-4 group-hover:text-muted-brown transition-colors">{n.title}</h3>
                <p className="font-sans text-charcoal/70">{n.excerpt}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="read" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-warm-ivory p-8">
            <button onClick={() => setActive(false)} className="text-xs uppercase tracking-widest mb-12 hover:text-burgundy">← Back to Notes</button>
            <h1 className="font-serif text-5xl mb-8">What makes a luxury brand feel timeless?</h1>
            <div className="prose prose-lg font-sans">
              <p>Timelessness is not the absence of change, but the mastery of evolution...</p>
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" className="w-full grayscale my-8" alt="Editorial" />
              <p>In conclusion, the brands that endure are the ones that remember their core proposition.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
