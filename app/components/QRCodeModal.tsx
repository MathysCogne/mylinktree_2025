'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type QRCodeModalProps = {
  isOpen: boolean
  onClose: () => void
  qrCodeUrl: string
  texts: any
}

// Variants d'animation pour la modal
const modalVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
}

export function QRCodeModal({ isOpen, onClose, qrCodeUrl, texts }: QRCodeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden shadow-xl max-w-sm w-full"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-conic from-cyan-500/20 via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-conic from-transparent via-transparent to-purple-500/20 opacity-70"></div>
            </div>
            
            <div className="pt-8 px-6 pb-6 relative z-10">
              {/* Mini Profile Section */}
              <div className="flex items-center mb-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-cyan-400/10 mr-4">
                  <Image 
                    src="/images/profile-picture.jpg" 
                    alt="Mathys Cogné Foucault"
                    fill
                    sizes="3.5rem"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-200">Mathys Cogné Foucault</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-slate-400 text-xs">Web3 Developer | 42Blockchain</p>
                  </div>
                </div>
                
                {/* Close Button - Absolute positioned */}
                <button 
                  onClick={onClose}
                  className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 bg-slate-800/80 rounded-full p-1.5"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              {/* Message */}
              <div className="text-center mb-5">
                <h4 className="text-base text-slate-300 font-medium mb-1">Scan to connect with me</h4>
                <p className="text-xs text-slate-400 mb-4">Find all my professional links in one place</p>
              </div>
              
              {/* QR Code Section */}
              <div className="bg-slate-900/40 p-3.5 rounded-lg mb-5 relative">
                {/* Corners for decoration */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 -translate-x-1 -translate-y-1 rounded-tl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500 translate-x-1 -translate-y-1 rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 -translate-x-1 translate-y-1 rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 translate-x-1 translate-y-1 rounded-br"></div>
                
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code to Mathys's links" 
                  width={200} 
                  height={200} 
                  className="mx-auto"
                />
              </div>
              
              {/* Mini Preview Links */}
              <div className="space-y-2 mb-4">
                {texts.items.slice(0, 2).map((link: any, index: number) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg border border-slate-800/60 bg-slate-900/40"
                  >
                    <div 
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                      style={{ 
                        backgroundColor: `${link.color}22`,
                        color: link.color
                      }}
                    >
                      {getIcon(link.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-slate-300 truncate">{link.title}</h3>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center py-1">
                  <span className="text-slate-500 text-xs">+{texts.items.length - 2} more links</span>
                </div>
              </div>
              
              {/* Small Print */}
              <div className="text-center text-slate-500 text-xs">
                <p>© 2025 Mathys Cogné Foucault</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Fonction helper pour les icônes
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'linkedin':
      return (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    case 'github':
      return (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    case 'twitter':
      return (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    default:
      return (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
  }
} 