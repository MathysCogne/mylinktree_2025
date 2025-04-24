'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { texts } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-slate-300 mb-4">{texts.en.notFound.title}</h1>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">
              {texts.en.notFound.heading}
            </h2>
            <p className="text-slate-400 mb-8">
              {texts.en.notFound.description}
            </p>
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              {texts.en.notFound.buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
