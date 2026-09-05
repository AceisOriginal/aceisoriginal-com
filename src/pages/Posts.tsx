import { SparkleSVG } from '../components/CloudDecor'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <div>
      <header className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cloud-900 inline-flex items-center gap-2">
          Posts
          <SparkleSVG className="w-5 h-5 sparkle-pulse" color="#F7ADCF" />
        </h1>
        <p className="text-cloud-600 text-sm mt-1">coy captions · pastel placeholders · no spicy pics here 🙈</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
