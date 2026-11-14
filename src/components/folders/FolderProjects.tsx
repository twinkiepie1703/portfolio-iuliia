"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Botanical Revival",
    client: "Heritage Skincare",
    year: "2023",
    category: "Campaign Strategy",
    image: "https://images.unsplash.com/photo-1615397323174-8840cd4371fa?q=80&w=1000&auto=format&fit=crop",
    desc: "A 360° campaign reintroducing a 50-year-old product to a Gen Z audience without alienating core consumers.",
    results: "40% increase in digital engagement, sold out within 48 hours."
  },
  {
    id: 2,
    title: "Tactile Digital",
    client: "Luxe Fragrance Co",
    year: "2022",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop",
    desc: "Bridging the gap between the physical sensation of perfume and digital discovery.",
    results: "Winner of 'Best Digital Campaign' Glossy Awards."
  }
];

export default function FolderProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    if (activeProject !== null) {
      document.querySelector('.custom-scrollbar')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeProject]);

  const selectedProject = projects.find(p => p.id === activeProject);

  return (
    <div className="max-w-6xl mx-auto relative min-h-full">
      <AnimatePresence mode="wait">
        {activeProject === null ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            <div className="flex justify-between items-end mb-16">
              <h2 className="font-serif text-4xl lg:text-6xl text-charcoal">Campaigns & Ideas</h2>
              <span className="font-script text-2xl text-muted-brown rotate-2">Selected Works</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {projects.map((proj, i) => (
                <div key={proj.id} className={`group ${i % 2 === 1 ? 'lg:mt-24' : ''}`}>
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-cream p-4 shadow-paper cursor-pointer" onClick={() => setActiveProject(proj.id)}>
                    {/* Tape effect */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 border border-black/5 rotate-2 z-20 mix-blend-screen" />
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" 
                    />
                    
                    {/* View Button Overlay */}
                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="px-6 py-3 bg-warm-ivory/90 backdrop-blur-sm rounded-xl text-xs tracking-widest uppercase shadow-lg border border-white/50 text-charcoal transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs tracking-widest uppercase text-muted-brown">
                      <span>{proj.client}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl text-charcoal">{proj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-warm-ivory min-h-full border border-black/5 shadow-2xl p-8 md:p-16 relative"
          >
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-8 left-8 text-xs tracking-widest uppercase flex items-center gap-2 hover:text-burgundy transition-colors z-20 bg-white/80 px-4 py-2 rounded-lg backdrop-blur-md"
            >
              ← Back to Projects
            </button>

            {selectedProject && (
              <div className="max-w-4xl mx-auto pt-16 space-y-16">
                <div className="text-center space-y-6">
                  <h2 className="font-serif text-4xl lg:text-7xl">{selectedProject.title}</h2>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs tracking-widest uppercase text-muted-brown">
                    <span>{selectedProject.client}</span>
                    <span>·</span>
                    <span>{selectedProject.category}</span>
                    <span>·</span>
                    <span>{selectedProject.year}</span>
                  </div>
                </div>

                <div className="w-full aspect-[21/9] bg-cream p-4 shadow-paper -rotate-1">
                  <img src={selectedProject.image} alt="Hero" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-12">
                  <div className="space-y-6">
                    <h3 className="font-serif text-3xl">The Brief</h3>
                    <p className="font-sans text-lg text-charcoal/80 leading-relaxed">
                      {selectedProject.desc}
                    </p>
                    <p className="font-sans text-lg text-charcoal/80 leading-relaxed">
                      By examining the intersection of historic brand codes and contemporary digital behavior, we devised a strategy that prioritized tactile digital experiences over traditional display advertising.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-paper p-8 border border-black/5 shadow-sm">
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-burgundy mb-2">Role</h4>
                      <p className="font-serif text-xl">Creative Strategy & Direction</p>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-burgundy mb-2">Results</h4>
                      <p className="font-serif text-xl">{selectedProject.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
