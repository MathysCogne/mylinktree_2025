'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { QRCodeModal } from '@/components/QRCodeModal'
import { ContactModal } from '@/components/ContactModal'

// const currentLang = 'en'

export function Links() {
  
  const { currentLang } = useLanguage()
  const texts = getTexts(currentLang).links
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [showContact, setShowContact] = useState(false)

  // Pour éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fonction pour copier l'URL dans le presse-papier
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Génération du QR code via une API externe
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : ''
  )}`

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
      case 'telegram':
        return (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        )
      case 'phone':
        return (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        )
      case 'globe':
        return (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        )
      case 'calendar':
        return (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
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

  const linkVariants = {
    initial: { scale: 1, y: 20, opacity: 0 },
    animate: (i: number) => ({ 
      scale: 1, 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.4 + (i * 0.08) 
      }
    }),
    hover: { 
      scale: 1.02, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { scale: 0.98 },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const profileVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.1,
        type: "spring",
        stiffness: 150
      }
    }
  }

  const iconVariants = {
    hover: { 
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  }

  // Ne rendre le contenu que côté client pour éviter les problèmes d'hydratation
  if (!mounted) return null;

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="container px-4 md:px-6 mx-auto max-w-md sm:max-w-lg md:max-w-xl">
        
        {/* Profile Section */}
        <motion.div 
          className="flex flex-col items-center mb-10 sm:mb-12"
          initial="initial"
          animate="animate"
          variants={profileVariants}
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition-shadow duration-300">
            <Image 
              src="/images/profile-picture.jpg" 
              alt="Mathys Cogné Foucault"
              fill
              sizes="(max-width: 640px) 6rem, (max-width: 768px) 7rem, 8rem"
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-200 text-center bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300">
            Mathys Cogné Foucault
          </h1>
          <div className="flex items-center gap-1.5 mt-1">
            {/* <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> */}
            <p className="text-slate-400 text-sm sm:text-base">Founder KoVault | 42Blockchain | 42 Paris</p>
          </div>
        </motion.div>
        
        {/* Links Section */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {texts.items.map((link, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              whileTap="tap"
              variants={linkVariants}
              custom={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-xl"
                aria-label={`${link.title}: ${link.description}`}
              >
                <motion.div 
                  className={cn(
                    "flex items-center gap-3 p-4 sm:p-5 rounded-xl border backdrop-blur-sm relative overflow-hidden shadow-lg",
                    "border-slate-800/60 bg-slate-900/40 hover:bg-slate-900/60 transition-colors duration-300"
                  )}
                  style={{
                    boxShadow: hoveredIndex === index ? `0 8px 30px ${link.color}20` : undefined,
                    borderColor: hoveredIndex === index ? link.color : undefined,
                  }}
                >
                  {/* Background gradient on hover */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div 
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.12 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          background: `radial-gradient(circle at center, ${link.color}40, transparent 70%)`,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Icon */}
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ 
                      backgroundColor: `${link.color}22`,
                      color: link.color,
                      boxShadow: hoveredIndex === index ? `0 0 10px ${link.color}30` : undefined 
                    }}
                    variants={iconVariants}
                  >
                    {getIcon(link.icon)}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base sm:text-lg text-slate-200 truncate">{link.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm truncate">{link.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  <motion.div 
                    className="w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-slate-300 transition-colors"
                    animate={{ 
                      x: hoveredIndex === index ? 3 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          {/* Share Button */}
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Mathys Cogné Foucault - Links',
                  url: window.location.href
                }).catch(err => console.error('Error sharing:', err));
              } else {
                copyToClipboard(window.location.href);
              }
            }}
            className="group py-2 px-4 bg-slate-800/60 hover:bg-slate-800/90 text-slate-300 text-sm rounded-full flex items-center gap-2 transition-colors duration-300 border border-slate-700/50 hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            {copied ? (
              <>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-green-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </motion.svg>
                Copied !
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share this page
              </>
            )}
          </button>
          
          {/* QR Code Button */}
          <button 
            onClick={() => setShowQR(true)}
            className="group py-2 px-4 bg-slate-800/60 hover:bg-slate-800/90 text-slate-300 text-sm rounded-full flex items-center gap-2 transition-colors duration-300 border border-slate-700/50 hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            QR Code
          </button>
          
          {/* Contact Button */}
          <button 
            onClick={() => setShowContact(true)}
            className="group py-2 px-4 bg-slate-800/60 hover:bg-slate-800/90 text-slate-300 text-sm rounded-full flex items-center gap-2 transition-colors duration-300 border border-slate-700/50 hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
              <path d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2h12v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-4-2-6-6-6Z"></path>
              <path d="M15.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M12 14c-2.33 0-4.29.46-5.97 1.33A2 2 0 0 0 5 17.22V18h14v-.78a2 2 0 0 0-1.03-1.89C16.29 14.46 14.33 14 12 14Z"></path>
            </svg>
            Contact
          </button>
        </motion.div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)} 
        qrCodeUrl={qrCodeUrl} 
        texts={texts}
      />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
        copyToClipboard={copyToClipboard}
        copied={copied}
        setCopied={setCopied}
      />
    </section>
  )
} 