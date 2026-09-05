export type SitePage = {
  slug: string
  title: string
  emoji: string
  blurb: string
  body: string[]
}

export const sitePages: SitePage[] = [
  {
    slug: 'about',
    title: 'About',
    emoji: '💕',
    blurb: 'Who is AceisOriginal?',
    body: [
      'Hey, I’m Ace — aka AceisOriginal. Cute. Coy. Gamer girl energy.',
      'I make soft, playful content with a little sparkle and a lot of personality. Think pastel vibes, late-night queues, and captions that leave you wondering…',
      'Find me on X @AceisOriginal, or hop through my Linktree for everything else.',
    ],
  },
  {
    slug: 'links-hub',
    title: 'Links Hub',
    emoji: '🔗',
    blurb: 'All the places to find Ace',
    body: [
      'One soft sky, many little doors. Use the Links page for the full Linktree-style list — X, Linktree, and more.',
      'Prefer a quick jump? Hit the CTAs on Home, or peek at Media Kit if you’re collab-curious.',
    ],
  },
  {
    slug: 'media-kit',
    title: 'Media Kit',
    emoji: '📸',
    blurb: 'Collabs & press (placeholder)',
    body: [
      'Media kit coming soon — soft rates, pastel aesthetics, and gamer-girl brand fits.',
      'For now: DM @AceisOriginal on X, or reach out via Linktree. Brand name: AceisOriginal. Vibe: cute, coy, dopamine-soft.',
      'Placeholder stats & assets will live here. Stay sparkly ✨',
    ],
  },
]

export function getPage(slug: string): SitePage | undefined {
  return sitePages.find((p) => p.slug === slug)
}
