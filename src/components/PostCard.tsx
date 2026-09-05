import type { Post } from '../data/posts'
import { SparkleSVG } from './CloudDecor'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="cloud-card overflow-hidden bounce-tap hover:-translate-y-1 transition-transform duration-200">
      <div
        className={`relative aspect-[4/5] bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
      >
        <span className="text-6xl sm:text-7xl select-none drop-shadow-sm" aria-hidden>
          {post.emoji}
        </span>
        <SparkleSVG
          className="absolute top-3 right-3 w-4 h-4 sparkle-pulse"
          color="#F7ADCF"
        />
        <SparkleSVG
          className="absolute bottom-4 left-4 w-3 h-3 sparkle-pulse"
          color="#FFFAB1"
          style={{ animationDelay: '0.8s' }}
        />
        {post.badge && (
          <span className={`sticker-badge ${post.badge} absolute top-3 left-3`}>
            {post.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="font-bold text-cloud-900 text-sm leading-snug">{post.caption}</p>
        <p className="text-cloud-600 text-xs mt-1.5">{post.date}</p>
      </div>
    </article>
  )
}
