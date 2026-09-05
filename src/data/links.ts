export type LinkItem = {
  id: string
  label: string
  href: string
  emoji: string
  hint?: string
  accent: 'sky' | 'blush' | 'mint' | 'butter' | 'lavender'
}

export const links: LinkItem[] = [
  {
    id: 'x',
    label: 'X / Twitter',
    href: 'https://x.com/AceisOriginal',
    emoji: '🐦',
    hint: '@AceisOriginal',
    accent: 'sky',
  },
  {
    id: 'linktree',
    label: 'Linktree',
    href: 'https://tr.ee/bslA9iPewg',
    emoji: '🌳',
    hint: 'all my links',
    accent: 'mint',
  },
  {
    id: 'onlyfans',
    label: 'OnlyFans',
    href: 'https://tr.ee/bslA9iPewg',
    emoji: '💗',
    hint: 'via Linktree',
    accent: 'blush',
  },
  {
    id: 'posts',
    label: 'Featured Posts',
    href: '/posts',
    emoji: '✨',
    hint: 'soft previews',
    accent: 'butter',
  },
  {
    id: 'about',
    label: 'About Ace',
    href: '/pages/about',
    emoji: '☁️',
    hint: 'gamer girl bio',
    accent: 'lavender',
  },
]

export const accentClasses: Record<LinkItem['accent'], string> = {
  sky: 'border-cloud-400 bg-cloud-50 hover:bg-cloud-100',
  blush: 'border-blush bg-blush-soft/60 hover:bg-blush-soft',
  mint: 'border-mint bg-mint/20 hover:bg-mint/35',
  butter: 'border-butter bg-butter/40 hover:bg-butter/70',
  lavender: 'border-lavender bg-lavender/25 hover:bg-lavender/40',
}
