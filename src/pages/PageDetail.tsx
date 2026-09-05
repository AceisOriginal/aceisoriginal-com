import { Link, Navigate, useParams } from 'react-router-dom'
import { CloudSVG, SparkleSVG } from '../components/CloudDecor'
import { getPage } from '../data/pages'

export default function PageDetail() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? getPage(slug) : undefined

  if (!page) return <Navigate to="/pages" replace />

  return (
    <article className="max-w-2xl mx-auto">
      <Link
        to="/pages"
        className="pill-btn inline-flex px-3 py-1.5 text-xs bg-white/90 text-cloud-800 border border-cloud-300 mb-4"
      >
        ← all pages
      </Link>

      <div className="cloud-card px-6 py-8 sm:px-8 relative overflow-hidden">
        <SparkleSVG
          className="absolute top-4 right-5 w-4 h-4 sparkle-pulse"
          color="#F7ADCF"
        />
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl" aria-hidden>
            {page.emoji}
          </span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-cloud-900">{page.title}</h1>
            <p className="text-cloud-600 text-sm">{page.blurb}</p>
          </div>
        </div>

        <div className="space-y-4 text-cloud-800 leading-relaxed">
          {page.body.map((para, i) => (
            <p key={i} className="text-sm sm:text-[15px]">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CloudSVG className="w-20 h-10 opacity-80" outlined />
        </div>
      </div>
    </article>
  )
}
