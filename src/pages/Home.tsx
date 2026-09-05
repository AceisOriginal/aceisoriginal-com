import { Link } from 'react-router-dom'
import { CloudSVG, RainbowSVG, SparkleSVG, StarSVG } from '../components/CloudDecor'
import PostCard from '../components/PostCard'
import { featuredPosts } from '../data/posts'

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="cloud-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 text-center">
        <RainbowSVG
          className="absolute -top-2 left-[-8%] w-40 sm:w-56 opacity-70 pointer-events-none"
          withLavender
        />
        <RainbowSVG
          className="absolute -bottom-4 right-[-6%] w-36 sm:w-48 opacity-55 pointer-events-none"
          style={{ transform: 'scaleX(-1)' }}
        />
        <StarSVG
          className="absolute top-6 right-10 w-4 h-4 sparkle-pulse"
          color="#AEB9D8"
        />
        <SparkleSVG
          className="absolute top-12 left-8 w-3 h-3 sparkle-pulse"
          color="#FFFAB1"
        />
        <StarSVG
          className="absolute bottom-8 left-1/4 w-3.5 h-3.5 sparkle-pulse"
          color="#F7ADCF"
          style={{ animationDelay: '1s' }}
        />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <CloudSVG className="w-28 sm:w-36 h-14 sm:h-16 animate-float" outlined />
          </div>
          <p className="sticker-badge fresh inline-flex mb-3">gamer girl</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-cloud-900 tracking-tight">
            AceisOriginal
          </h1>
          <p className="mt-3 text-cloud-700 font-semibold text-base sm:text-lg max-w-md mx-auto">
            cute · coy · soft sparkles ✨
          </p>
          <p className="mt-2 text-cloud-600 text-sm max-w-sm mx-auto">
            pastel nights, cozy queues, little captions that leave you blushing 🥺💕
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://x.com/AceisOriginal"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn px-5 py-2.5 bg-cloud-400 text-cloud-900 text-sm"
            >
              Follow on X 🐦
            </a>
            <a
              href="https://tr.ee/bslA9iPewg"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn px-5 py-2.5 bg-blush text-white text-sm"
            >
              Linktree 💗
            </a>
            <Link
              to="/links"
              className="pill-btn px-5 py-2.5 bg-white/90 text-cloud-800 border border-cloud-300 text-sm"
            >
              All links ✨
            </Link>
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section>
        <div className="flex items-end justify-between gap-3 mb-4 px-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-cloud-900 flex items-center gap-2">
              Featured posts
              <SparkleSVG className="w-4 h-4" color="#F7ADCF" />
            </h2>
            <p className="text-cloud-600 text-sm mt-0.5">soft little peeks…</p>
          </div>
          <Link
            to="/posts"
            className="pill-btn px-3.5 py-1.5 text-xs bg-white/90 text-cloud-800 border border-cloud-300 shrink-0"
          >
            see all →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {featuredPosts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      {/* Mini CTA strip */}
      <section className="cloud-card px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-extrabold text-cloud-900">wanna hang? ☁️</p>
          <p className="text-sm text-cloud-600 mt-1">pages · links · media kit coming soft</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Link to="/pages/about" className="pill-btn px-4 py-2 text-sm bg-lavender/40 text-cloud-900 border border-lavender">
            About
          </Link>
          <Link to="/pages/media-kit" className="pill-btn px-4 py-2 text-sm bg-mint/30 text-cloud-900 border border-mint">
            Media kit
          </Link>
        </div>
      </section>
    </div>
  )
}
