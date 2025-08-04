import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Mahalli.tn - Location Saisonnière et Vente Immobilière en Tunisie',
  description: 'Votre nouvelle référence pour la location saisonnière et la vente immobilière en Tunisie. Trouvez votre coin chaleureux pour les vacances ou investissez dans votre futur chez-vous.',
  keywords: 'location saisonnière tunisie, vente immobilière tunisie, ben arous, appartement tunisie, villa tunisie',
  authors: [{ name: 'Mahalli.tn' }],
  openGraph: {
    title: 'Mahalli.tn - Location Saisonnière et Vente Immobilière en Tunisie',
    description: 'Votre nouvelle référence pour la location saisonnière et la vente immobilière en Tunisie.',
    url: 'https://mahalli.tn',
    siteName: 'Mahalli.tn',
    locale: 'fr_TN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fr" 
      className={`${inter.variable} ${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}