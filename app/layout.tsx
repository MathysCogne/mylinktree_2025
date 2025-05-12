import './styles/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { texts } from '@/lib/constants'
import { LanguageProvider } from '@/components/LanguageProvider'


export const metadata: Metadata = {
  metadataBase: new URL('https://mathys-cognefoucault.fr'),
  title: {
    default: "Linktree Mathys Cogne Foucault",
    template: `Linktree of Mathys Cogne Foucault`,
  },
  description: "Linktree of Mathys Cogne Foucault, discover my projects and my social networks",
  keywords: "Mathys Cogne Foucault, Linktree, projects, social networks, 42Blockchain, 42Paris",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
  authors: [{ name: "Mathys Cogne Foucault" }],
  creator: "Mathys Cogne Foucault",
  category: "Linktree",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased selection:bg-cyan-500/70 selection:text-cyan-50">
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1 w-full">
              <div className="container mx-auto px-0 sm:px-6 lg:px-8">
                <main className="flex-auto pb-24 md:pb-0">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
