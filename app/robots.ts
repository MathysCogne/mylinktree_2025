// Force le rendu statique de cette route
export const dynamic = 'force-static'
export const revalidate = false

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: `https://link.mathys-cognefoucault.fr/sitemap.xml`,
    host: `https://link.mathys-cognefoucault.fr`,
  }
}
