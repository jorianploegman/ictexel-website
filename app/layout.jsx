import './globals.css'

export const metadata = {
  metadataBase: new URL('https://ictexel.nl'),
  title: {
    default: 'ICTexel - Betrouwbaar IT-beheer voor bedrijven op Texel',
    template: '%s | ICTexel'
  },
  description: 'Persoonlijke service, professionele oplossingen. Van netwerken tot cloud – ICTexel denkt met u mee en zorgt voor een stabiele, veilige IT-omgeving.',
  keywords: [
    'IT-beheer Texel',
    'Microsoft Azure Texel',
    'Microsoft 365 Texel',
    'VoIP telefonie Texel',
    'Acronis backup Texel',
    'netwerkbeheer Texel',
    'cloud computing Texel',
    'IT-support Texel',
    'cybersecurity Texel',
    'IT-diensten Texel'
  ],
  authors: [{ name: 'ICTexel' }],
  creator: 'ICTexel',
  publisher: 'ICTexel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://ictexel.nl',
    siteName: 'ICTexel',
    title: 'ICTexel - Betrouwbaar IT-beheer voor bedrijven op Texel',
    description: 'Persoonlijke service, professionele oplossingen. Van netwerken tot cloud – ICTexel denkt met u mee en zorgt voor een stabiele, veilige IT-omgeving.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ICTexel - IT-beheer voor bedrijven op Texel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICTexel - Betrouwbaar IT-beheer voor bedrijven op Texel',
    description: 'Persoonlijke service, professionele oplossingen. Van netwerken tot cloud – ICTexel denkt met u mee en zorgt voor een stabiele, veilige IT-omgeving.',
    images: ['/images/og-image.jpg'],
  },
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
    google: '', // Add Google Search Console verification code here
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#06b6d4" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
