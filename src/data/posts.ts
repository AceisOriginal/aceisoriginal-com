export type Post = {
  id: string
  caption: string
  emoji: string
  gradient: string
  badge?: 'fresh' | 'posted' | 'saved'
  date: string
}

export const posts: Post[] = [
  {
    id: '1',
    caption: 'just a little soft… 🥺💕',
    emoji: '🌸',
    gradient: 'from-blush-soft via-white to-cloud-100',
    badge: 'fresh',
    date: 'Sep 2',
  },
  {
    id: '2',
    caption: 'controller in one hand… 🎮',
    emoji: '🎮',
    gradient: 'from-lavender/40 via-white to-mint/30',
    badge: 'posted',
    date: 'Aug 28',
  },
  {
    id: '3',
    caption: 'cloud girl hours ☁️✨',
    emoji: '☁️',
    gradient: 'from-cloud-100 via-white to-blush-soft',
    badge: 'posted',
    date: 'Aug 21',
  },
  {
    id: '4',
    caption: 'shh… look closer 👀',
    emoji: '💗',
    gradient: 'from-butter/50 via-white to-blush-soft',
    badge: 'saved',
    date: 'Aug 14',
  },
  {
    id: '5',
    caption: 'gamer girl reset 💅',
    emoji: '✨',
    gradient: 'from-mint/40 via-white to-cloud-200',
    badge: 'posted',
    date: 'Aug 7',
  },
  {
    id: '6',
    caption: 'pastel nights only 🌙',
    emoji: '🌙',
    gradient: 'from-lavender/50 via-white to-cloud-100',
    badge: 'posted',
    date: 'Jul 30',
  },
  {
    id: '7',
    caption: 'oops… dropped my headset 🤭',
    emoji: '🎧',
    gradient: 'from-blush-soft via-white to-butter/40',
    badge: 'fresh',
    date: 'Jul 22',
  },
  {
    id: '8',
    caption: 'cozy setup check ♡',
    emoji: '🛋️',
    gradient: 'from-cloud-200 via-white to-mint/30',
    badge: 'posted',
    date: 'Jul 15',
  },
]

export const featuredPosts = posts.slice(0, 4)
