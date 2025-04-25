'use client'

import { motion, AnimatePresence } from 'framer-motion'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
  copyToClipboard: (text: string) => void
  copied: boolean
  setCopied: (value: boolean) => void
}

// Variants d'animation pour la modal
const modalVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
}

export function ContactModal({ isOpen, onClose, copyToClipboard, copied, setCopied }: ContactModalProps) {
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
            className="relative bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl overflow-hidden shadow-xl max-w-sm w-full border border-slate-800/50"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Background effects */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
            </div>
            
            <div className="pt-8 px-6 pb-6 relative z-10">
              {/* Header with improved styling */}
              <div className="flex items-center justify-between mb-8">
                <motion.h3 
                  className="font-bold text-2xl text-slate-200 bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Connect With Me
                </motion.h3>
                
                {/* Close Button - More stylish */}
                <motion.button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-full p-2 transition-colors duration-200"
                  aria-label="Close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>
              
              {/* Contact Cards - Improved design and animations */}
              <div className="space-y-3">
                {/* Telegram */}
                <motion.a 
                  href="https://t.me/Mathys_Cogne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-[#0088cc]/50 transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-[#0088cc]/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0088cc] group-hover:scale-110 transition-transform duration-200">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-lg">Telegram</h4>
                      <p className="text-slate-400">@Mathys_Cogne</p>
                    </div>
                    <motion.div 
                      className="ml-auto text-slate-400 group-hover:text-[#0088cc] transition-colors duration-300"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
                
                {/* Discord */}
                <motion.div 
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard("mattcgn");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="block p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-[#5865F2]/50 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-[#5865F2]/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 127.14 96.36" fill="currentColor" className="text-[#5865F2] group-hover:scale-110 transition-transform duration-200">
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-lg">Discord</h4>
                      <p className="text-slate-400">mattcgn</p>
                    </div>
                    <div className="ml-auto">
                      {copied ? (
                        <motion.span 
                          className="text-green-400 text-sm font-medium inline-flex items-center gap-1.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Copied!
                        </motion.span>
                      ) : (
                        <span className="text-[#5865F2] text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          Click to copy
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* Phone */}
                <motion.a 
                  href="tel:+33695508409" 
                  className="block p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 group-hover:scale-110 transition-transform duration-200">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-lg">Phone</h4>
                      <p className="text-slate-400">+33 6 95 50 84 09</p>
                    </div>
                    <motion.div 
                      className="ml-auto text-slate-400 group-hover:text-green-500 transition-colors duration-300"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
                
                {/* Email */}
                <motion.a 
                  href="mailto:mathys.cognef@gmail.com" 
                  className="block p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-[#EA4335]/50 transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EA4335]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-[#EA4335]/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#EA4335] group-hover:scale-110 transition-transform duration-200">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-lg">Email</h4>
                      <p className="text-slate-300 text-sm">mathys.cognef@gmail.com</p>
                    </div>
                    <motion.div 
                      className="ml-auto text-slate-400 group-hover:text-[#EA4335] transition-colors duration-300"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              </div>
              
              {/* Footer with improved styling */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-slate-500 text-xs">Select a contact method to reach me directly</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 