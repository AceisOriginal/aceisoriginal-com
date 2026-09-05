import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CloudBackground, CloudSVG, SparkleSVG } from './CloudDecor'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/posts', label: 'Posts' },
  { to: '/pages', label: 'Pages' },
  { to: '/links', label: 'Links' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col">
      <CloudBackground />

      <header className="sticky top-0 z-40 px-4 pt-4 pb-2">
        <div className="mx-auto max-w-5xl cloud-card px-4 py-3 flex items-center justify-between gap-3">
          <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <span className="relative inline-flex">
              <CloudSVG className="w-10 h-6" outlined />
              <SparkleSVG
                className="absolute -top-1 -right-1 w-3 h-3 sparkle-pulse"
                color="#F7ADCF"
              />
            </span>
            <span className="font-extrabold text-cloud-900 text-lg tracking-tight group-hover:text-cloud-700 transition-colors">
              AceisOriginal
            </span>
          </NavLink>

          <nav className="hidden sm:flex items-center gap-1.5">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'pill-btn px-4 py-1.5 text-sm',
                    isActive
                      ? 'bg-cloud-400 text-cloud-900'
                      : 'bg-white/80 text-cloud-800 hover:bg-cloud-100 border border-cloud-300/60',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="sm:hidden pill-btn p-2 bg-white/90 text-cloud-800 border border-cloud-300/60"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden mx-auto max-w-5xl mt-2 cloud-card p-3 bounce-in flex flex-col gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'pill-btn px-4 py-2.5 text-center text-sm',
                    isActive
                      ? 'bg-cloud-400 text-cloud-900'
                      : 'bg-white/80 text-cloud-800 border border-cloud-300/60',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 flex-1 px-4 py-6 sm:py-10">
        <div className="mx-auto max-w-5xl page-enter">
          <Outlet />
        </div>
      </main>

      <footer className="relative z-10 px-4 pb-8 pt-2">
        <div className="mx-auto max-w-5xl cloud-card px-5 py-5 text-center">
          <div className="flex justify-center mb-2">
            <CloudSVG className="w-16 h-8 opacity-90" outlined />
          </div>
          <p className="font-extrabold text-cloud-900 text-sm">AceisOriginal ✨</p>
          <p className="text-cloud-700 text-xs mt-1">cute · coy · gamer girl</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a
              href="https://x.com/AceisOriginal"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn px-3 py-1 text-xs bg-cloud-400 text-cloud-900"
            >
              @AceisOriginal
            </a>
            <a
              href="https://tr.ee/bslA9iPewg"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn px-3 py-1 text-xs bg-blush-soft text-cloud-900 border border-blush"
            >
              Linktree
            </a>
          </div>
          <p className="mt-3 text-[10px] text-cloud-600/80">
            soft sky vibes · original clouds only · no trademarked characters
          </p>
        </div>
      </footer>
    </div>
  )
}
