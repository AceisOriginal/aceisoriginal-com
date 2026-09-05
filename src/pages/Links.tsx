import { Link } from 'react-router-dom'
import { CloudSVG, RainbowSVG, SparkleSVG } from '../components/CloudDecor'
import { accentClasses, links } from '../data/links'

export default function Links() {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6 relative">
        <RainbowSVG className="absolute -top-2 left-1/2 -translate-x-1/2 w-36 opacity-60 pointer-events-none" />
        <div className="relative z-10 pt-6">
          <CloudSVG className="w-20 h-10 mx-auto mb-2 animate-float" outlined />
          <h1 className="text-2xl font-extrabold text-cloud-900 inline-flex items-center gap-1.5">
            Links
            <SparkleSVG className="w-4 h-4 sparkle-pulse" color="#F7ADCF" />
          </h1>
          <p className="text-cloud-600 text-sm mt-1">@AceisOriginal · pick a door ☁️</p>
        </div>
      </div>

      <ul className="space-y-3">
        {links.map((item) => {
          const className = [
            'cloud-card flex items-center gap-3 px-4 py-3.5 border-2 bounce-tap hover:-translate-y-0.5 transition-transform',
            accentClasses[item.accent],
          ].join(' ')

          const inner = (
            <>
              <span className="text-2xl shrink-0" aria-hidden>
                {item.emoji}
              </span>
              <span className="flex-1 min-w-0 text-left">
                <span className="block font-extrabold text-cloud-900 text-sm">{item.label}</span>
                {item.hint && (
                  <span className="block text-xs text-cloud-600 truncate">{item.hint}</span>
                )}
              </span>
              <span className="text-cloud-500 text-sm shrink-0">→</span>
            </>
          )

          const isInternal = item.href.startsWith('/')

          return (
            <li key={item.id}>
              {isInternal ? (
                <Link to={item.href} className={className}>
                  {inner}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              )}
            </li>
          )
        })}
      </ul>

      <p className="text-center text-xs text-cloud-600 mt-6">
        OnlyFans lives on Linktree 💗 · soft & coy only
      </p>
    </div>
  )
}
