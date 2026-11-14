"use client";
import { motion } from "framer-motion";

export default function FolderAbout() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
      
      {/* Editorial Portrait Collage */}
      <div className="w-full lg:w-5/12 relative">
        <div className="aspect-[3/4] bg-warm-ivory shadow-paper p-4 rotate-2 relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
            alt="Portrait" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
          {/* Handwritten note */}
          <div className="absolute -bottom-6 -right-6 font-script text-3xl text-burgundy -rotate-6 z-20">
            Me, Paris '23
          </div>
        </div>

        <div className="absolute -top-12 -left-8 w-48 h-64 bg-cream shadow-md -rotate-6 z-0 border border-black/5 flex items-center justify-center p-4">
           <img 
            src="https://images.unsplash.com/photo-1615397323174-8840cd4371fa?q=80&w=800&auto=format&fit=crop" 
            alt="Texture" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-7/12 space-y-12">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-7xl text-charcoal">The Identity.</h2>
          <p className="font-sans text-xl leading-relaxed text-charcoal/80">
            Marketing in the luxury space is not about volume; it is about resonance. My approach focuses on translating heritage, craftsmanship, and aesthetic integrity into digital and physical experiences that endure.
          </p>
        </div>

        <div className="w-16 h-[1px] bg-burgundy/30" />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs tracking-widest uppercase text-muted-brown mb-4">Core</h3>
            <ul className="space-y-2 font-serif text-xl">
              <li>Brand Strategy</li>
              <li>Consumer Culture</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-muted-brown mb-4">Focus</h3>
            <ul className="space-y-2 font-serif text-xl">
              <li>Luxury</li>
              <li>Beauty</li>
              <li>Creative Strategy</li>
            </ul>
          </div>
        </div>

        <div className="relative p-8 bg-warm-ivory shadow-sm border border-black/5 mt-8">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 shadow-sm border border-black/5 rotate-2" style={{ clipPath: 'polygon(5% 0, 95% 2%, 98% 98%, 2% 95%)' }} /> {/* Fake tape */}
          <p className="font-serif italic text-2xl text-center leading-relaxed text-charcoal/80">
            "I believe that true luxury marketing requires a deep understanding of human desire and the nuanced language of exclusivity."
          </p>
        </div>
      </div>
    </div>
  );
}
