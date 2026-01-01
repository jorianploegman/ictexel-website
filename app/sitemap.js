export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: 'https://ictexel.nl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
