import Home from '@/components/Home'

export default function Page() {
  // LocalBusiness structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ictexel.nl',
    name: 'ICTexel',
    image: 'https://ictexel.nl/images/og-image.jpg',
    description: 'Betrouwbaar IT-beheer voor bedrijven op Texel. Persoonlijke service, professionele oplossingen. Van netwerken tot cloud – ICTexel denkt met u mee en zorgt voor een stabiele, veilige IT-omgeving.',
    url: 'https://ictexel.nl',
    telephone: '+31222726060',
    email: 'info@ictexel.nl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Texel',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.0604,
      longitude: 4.7606,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Texel',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    sameAs: [],
    serviceType: [
      'IT-beheer',
      'Microsoft Azure',
      'Microsoft 365',
      'VoIP & Telefonie',
      'Acronis Security',
      'Netwerkbeheer',
      'Cloud Computing',
      'Cybersecurity',
    ],
    knowsAbout: [
      'Microsoft Azure',
      'Microsoft 365',
      'Cloud Computing',
      'Netwerkbeheer',
      'VoIP Telefonie',
      'Cybersecurity',
      'Backup Solutions',
      'IT Support',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Home />
    </>
  )
}
