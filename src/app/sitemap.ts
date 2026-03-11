import { MetadataRoute } from 'next'
import { industries } from '@/data/industries'
import { agentUseCases } from '@/data/agents'
import { dictionaryMetadata, dictionaries } from '@/data/dictionaries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hmu.ai'

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/use-cases`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/library`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/waitlist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/use-cases/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const rolePagesMap = new Set<string>()
  agentUseCases.forEach((agent) => {
    rolePagesMap.add(`${baseUrl}/use-cases/${agent.industrySlug}/roles/${agent.agentType.toLowerCase()}`)
  })
  
  const rolePages: MetadataRoute.Sitemap = Array.from(rolePagesMap).map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const agentPages: MetadataRoute.Sitemap = agentUseCases.map((agent) => ({
    url: `${baseUrl}/use-cases/${agent.industrySlug}/roles/${agent.agentType.toLowerCase()}/${agent.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const categoryPages: MetadataRoute.Sitemap = Object.keys(dictionaryMetadata).map((category) => ({
    url: `${baseUrl}/library/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const termPages: MetadataRoute.Sitemap = []
  Object.entries(dictionaries).forEach(([category, terms]) => {
    terms.forEach((term) => {
      const slug = term.slug || term.name.toLowerCase().replace(/\s+/g, '-')
      termPages.push({
        url: `${baseUrl}/library/${category}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    })
  })

  return [
    ...staticPages,
    ...industryPages,
    ...rolePages,
    ...agentPages,
    ...categoryPages,
    ...termPages,
  ]
}