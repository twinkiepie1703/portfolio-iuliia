"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FolderAbout from "./folders/FolderAbout";
import FolderExperience from "./folders/FolderExperience";
import FolderProjects from "./folders/FolderProjects";
import FolderAwards from "./folders/FolderAwards";
import FolderCertifications from "./folders/FolderCertifications";
import FolderVolunteering from "./folders/FolderVolunteering";
import FolderResearch from "./folders/FolderResearch";
import FolderEducation from "./folders/FolderEducation";
import FolderJournal from "./folders/FolderJournal";
import FolderContact from "./folders/FolderContact";

const folders = [
  { id: "about", title: "ABOUT", color: "bg-dusty-pink", label: "01", Content: FolderAbout },
  { id: "experience", title: "EXPERIENCE", color: "bg-soft-rose", label: "02", Content: FolderExperience },
  { id: "projects", title: "PROJECTS", color: "bg-blush", label: "03", Content: FolderProjects },
  { id: "awards", title: "AWARDS", color: "bg-cream", label: "04", Content: FolderAwards },
  { id: "certifications", title: "CERTIFICATIONS", color: "bg-dusty-pink", label: "05", Content: FolderCertifications },
  { id: "volunteering", title: "VOLUNTEERING", color: "bg-soft-rose", label: "06", Content: FolderVolunteering },
  { id: "research", title: "RESEARCH", color: "bg-blush", label: "07", Content: FolderResearch },
  { id: "education", title: "EDUCATION", color: "bg-cream", label: "08", Content: FolderEducation },
  { id: "journal", title: "JOURNAL", color: "bg-dusty-pink", label: "09", Content: FolderJournal },
  { id: "contact", title: "CONTACT", color: "bg-burgundy text-warm-ivory", label: "10", Content: FolderContact },
];

export default function ArchiveClient() {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openFolder = (index: number) => setActiveFolder(index);
  const closeFolder = () => setActiveFolder(null);
  const nextFolder = () => activeFolder !== null && activeFolder < folders.length - 1 && setActiveFolder(activeFolder + 1);
  const prevFolder = () => activeFolder !== null && activeFolder > 0 && setActiveFolder(activeFolder - 1);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-warm-ivory font-sans">
      
      {/* Index Navigation (Bottom Right now) */}
      <div className="absolute bottom-8 right-8 z-50 text-charcoal">
        <div className="group relative">
          <button className="text-xs tracking-widest uppercase font-medium hover:text-burgundy transition-colors bg-warm-ivory/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-black/5">
            Index +
          </button>
          <div className="absolute bottom-full right-0 mb-4 bg-charcoal text-warm-ivory p-6 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-64 shadow-2xl">
            <ul className="space-y-3">
              {folders.map((f, i) => (
                <li key={f.id}>
                  <button 
                    onClick={() => openFolder(i)}
                    className="text-xs tracking-widest uppercase hover:text-dusty-pink transition-colors w-full text-left"
                  >
                    {f.label} — {f.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Centered Header */}
      <AnimatePresence>
        {activeFolder === null && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 left-0 w-full z-0 flex justify-center pointer-events-none"
          >
            <h1 className="font-script text-4xl lg:text-6xl text-charcoal/80">
              Hello, I am Iuliia
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Folders Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-32 md:pt-0">
        {folders.map((folder, index) => {
          const isActive = activeFolder === index;
          
          // Calculate desktop overlapping positions when closed
          const totalWidth = 85; // vw
          const step = totalWidth / folders.length;
          const leftPosVal = 5 + index * step;
          const leftPos = `${leftPosVal}vw`;
          
          // When active, ensure it doesn't overflow to the right
          const activeLeftVal = Math.min(leftPosVal, 40);
          const activeLeft = `${activeLeftVal}vw`;
          
          // Calculate mobile overlapping positions when closed
          const topStep = 60 / folders.length;
          const topPos = `calc(${20 + index * topStep}vh)`;

          return (
            <motion.div
              key={folder.id}
              className={`absolute flex flex-col ${isActive ? 'z-40 cursor-auto' : 'z-20 cursor-pointer'}`}
              layout
              initial={false}
              animate={{
                left: isActive ? (isMobile ? '5%' : activeLeft) : (isMobile ? '5%' : leftPos),
                top: isActive ? (isMobile ? '5%' : '5%') : (isMobile ? topPos : '15%'),
                width: isActive ? (isMobile ? '90%' : '55vw') : (isMobile ? '90%' : '35vw'),
                height: isActive ? (isMobile ? '90%' : '90%') : (isMobile ? '70%' : '85%'),
                rotate: isActive ? 0 : isMobile ? 0 : (index % 2 === 0 ? -0.5 : 0.5),
              }}
              whileHover={!isActive ? { y: -20, transition: { duration: 0.2 } } : {}}
              transition={{ 
                type: "spring", 
                stiffness: 250, 
                damping: 30,
                mass: 0.8
              }}
              onClick={() => {
                if (!isActive) openFolder(index);
              }}
            >
              {/* Folder Tab */}
              <motion.div 
                className={`h-10 md:h-12 w-32 md:w-48 rounded-t-xl md:rounded-t-2xl flex items-center px-4 ${folder.color} shadow-sm border-t border-l border-r border-black/10 relative z-10`}
              >
                <span className="text-[10px] md:text-xs tracking-widest uppercase font-medium truncate">
                  {folder.label}. {folder.title}
                </span>
              </motion.div>

              {/* Folder Body */}
              <div className={`flex-grow rounded-2xl rounded-tl-none ${folder.color} shadow-folder border border-black/10 relative overflow-hidden flex flex-col`}>
                
                {/* Folder Content (Active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="absolute inset-0 bg-paper m-2 md:m-4 rounded-xl shadow-inner overflow-hidden flex flex-col"
                    >
                      {/* Fixed Close button */}
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
                        <button 
                          onClick={(e) => { e.stopPropagation(); closeFolder(); }}
                          className="w-8 h-8 md:w-10 md:h-10 bg-warm-ivory rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform text-charcoal border border-black/5"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar">
                        <div className="min-h-full flex flex-col relative text-charcoal">
                          <div className="flex-grow p-5 md:p-10 lg:p-16 relative">
                             <folder.Content />
                          </div>

                          {/* Navigation Footer */}
                          <div className="mt-auto border-t border-black/10 p-4 md:p-6 flex justify-between items-center bg-warm-ivory/80 backdrop-blur-md sticky bottom-0 z-40">
                            <button 
                              onClick={(e) => { e.stopPropagation(); prevFolder(); }}
                              className={`text-[10px] md:text-xs tracking-widest uppercase font-medium hover:text-burgundy transition-colors ${index === 0 ? 'opacity-30 pointer-events-none' : ''}`}
                            >
                              ← Prev
                            </button>
                            
                            <span className="font-serif italic text-charcoal/50 text-[10px] md:text-sm">
                              {index + 1} / {folders.length}
                            </span>

                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                index === folders.length - 1 ? closeFolder() : nextFolder(); 
                              }}
                              className="text-[10px] md:text-xs tracking-widest uppercase font-medium hover:text-burgundy transition-colors"
                            >
                              {index === folders.length - 1 ? "Close" : "Next →"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
