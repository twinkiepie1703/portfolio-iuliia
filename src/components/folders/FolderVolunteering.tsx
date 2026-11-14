"use client";
export default function FolderVolunteering() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-5xl text-charcoal">Community</h2>
        <p className="font-script text-2xl text-burgundy">Impact Beyond Work</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-paper p-8 shadow-paper -rotate-1">
        <div className="w-full lg:w-1/2 relative">
          <img src="https://images.unsplash.com/photo-1596462502278-27bf84033001?q=80&w=600&auto=format&fit=crop" className="w-full grayscale opacity-80" alt="Mentorship" />
          <div className="absolute -bottom-4 -right-4 bg-cream p-3 text-xs tracking-widest uppercase shadow-md rotate-3">Mentorship</div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="font-serif text-3xl">Women in Luxury</h3>
          <p className="text-sm tracking-widest uppercase text-muted-brown">Mentorship Program Lead · 2020—Present</p>
          <p className="font-sans text-lg text-charcoal/80">Guided young female professionals entering the luxury marketing sector through one-on-one mentorship and quarterly workshops.</p>
        </div>
      </div>
    </div>
  );
}
