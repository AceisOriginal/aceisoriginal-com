import { Link } from 'react-router-dom'
import { SparkleSVG } from '../components/CloudDecor'
import { sitePages } from '../data/pages'

export default function PagesIndex() {
  return (
    <div>
      <header className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cloud-900 inline-flex items-center gap-2">
          Pages
          <SparkleSVG className="w-5 h-5 sparkle-pulse" color="#AEB9D8" />
        </h1>
        <p className="text-cloud-600 text-sm mt-1">little static skies to peek into</p>
      </header>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sitePages.map((page) => (
          <li key={page.slug}>
            <Link
              to={`/pages/${page.slug}`}
              className="cloud-card block p-5 h-full bounce-tap hover:-translate-y-1 transition-transform"
            >
              <span className="text-3xl" aria-hidden>
                {page.emoji}
              </span>
              <h2 className="mt-3 font-extrabold text-cloud-900 text-lg">{page.title}</h2>
              <p className="text-cloud-600 text-sm mt-1">{page.blurb}</p>
              <span className="inline-block mt-3 text-xs font-bold text-cloud-500">open →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
