import type { CSSProperties } from 'react'

/** Decorative fluffy clouds, pastel rainbows & twinkly stars — original SVG only, no Sanrio/Razer IP */

type SvgProps = { className?: string; style?: CSSProperties }

/** Fluffy layered cloud with optional soft sky-blue outline (banner-style) */
export function CloudSVG({
  className = '',
  style,
  outlined = false,
  opacity = 1,
}: SvgProps & { outlined?: boolean; opacity?: number }) {
  const fill = `rgba(255,255,255,${opacity})`
  const stroke = outlined ? '#7CC7F4' : 'none'
  const sw = outlined ? 2.2 : 0
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 220 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Soft under-glow puff */}
      <ellipse cx="110" cy="78" rx="78" ry="22" fill="white" fillOpacity={0.35 * opacity} />
      {/* Bubbly body — overlapping ellipses */}
      <ellipse cx="58" cy="62" rx="42" ry="30" fill={fill} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="100" cy="48" rx="52" ry="38" fill={fill} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="148" cy="56" rx="40" ry="32" fill={fill} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="175" cy="68" rx="32" ry="24" fill={fill} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="40" cy="72" rx="28" ry="20" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Base pillow */}
      <ellipse cx="110" cy="78" rx="72" ry="26" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Tiny cheek puff */}
      <ellipse cx="125" cy="70" rx="18" ry="14" fill="white" fillOpacity={0.9 * opacity} />
    </svg>
  )
}

/** Soft pastel rainbow arc: pink → butter → mint → sky (optionally + lavender inner) */
export function RainbowSVG({
  className = '',
  style,
  withLavender = false,
}: SvgProps & { withLavender?: boolean }) {
  // Concentric arcs via thick strokes on semicircle paths
  const bands = withLavender
    ? [
        { color: '#F7ADCF', r: 78, w: 10 },
        { color: '#FFFAB1', r: 68, w: 10 },
        { color: '#96D6D3', r: 58, w: 10 },
        { color: '#7CC7F4', r: 48, w: 10 },
        { color: '#AEB9D8', r: 38, w: 8 },
      ]
    : [
        { color: '#F7ADCF', r: 74, w: 11 },
        { color: '#FFFAB1', r: 63, w: 11 },
        { color: '#96D6D3', r: 52, w: 11 },
        { color: '#7CC7F4', r: 41, w: 11 },
      ]
  const cx = 100
  const cy = 95
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {bands.map((b) => (
        <path
          key={b.color + b.r}
          d={`M ${cx - b.r} ${cy} A ${b.r} ${b.r} 0 0 1 ${cx + b.r} ${cy}`}
          stroke={b.color}
          strokeWidth={b.w}
          strokeLinecap="round"
          fill="none"
          opacity={0.78}
        />
      ))}
    </svg>
  )
}

/** 4-point sparkle diamond */
export function SparkleSVG({
  className = '',
  style,
  color = '#F7ADCF',
}: SvgProps & { color?: string }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 1.5 L13.8 10.2 L22.5 12 L13.8 13.8 L12 22.5 L10.2 13.8 L1.5 12 L10.2 10.2 Z"
        fill={color}
        opacity={0.95}
      />
    </svg>
  )
}

/** Simple 5-point star (flat banner-style) */
export function StarSVG({
  className = '',
  style,
  color = '#F7ADCF',
}: SvgProps & { color?: string }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2.2 L14.4 9.1 L21.8 9.3 L15.9 13.7 L18.1 21 L12 16.8 L5.9 21 L8.1 13.7 L2.2 9.3 L9.6 9.1 Z"
        fill={color}
      />
    </svg>
  )
}

const STAR_SCATTER: {
  top: string
  left?: string
  right?: string
  size: number
  color: string
  delay: string
  kind: 'star' | 'sparkle'
}[] = [
  { top: '6%', left: '12%', size: 14, color: '#F7ADCF', delay: '0s', kind: 'star' },
  { top: '10%', left: '38%', size: 10, color: '#FFFAB1', delay: '0.4s', kind: 'sparkle' },
  { top: '8%', right: '18%', size: 12, color: '#AEB9D8', delay: '0.8s', kind: 'star' },
  { top: '18%', left: '22%', size: 9, color: '#96D6D3', delay: '1.1s', kind: 'sparkle' },
  { top: '14%', right: '28%', size: 11, color: '#FBD6E7', delay: '0.2s', kind: 'star' },
  { top: '22%', left: '55%', size: 8, color: '#7CC7F4', delay: '1.5s', kind: 'sparkle' },
  { top: '28%', right: '12%', size: 13, color: '#F7ADCF', delay: '0.6s', kind: 'star' },
  { top: '32%', left: '8%', size: 9, color: '#FFFAB1', delay: '1.8s', kind: 'sparkle' },
  { top: '36%', left: '70%', size: 10, color: '#96D6D3', delay: '0.9s', kind: 'star' },
  { top: '42%', right: '22%', size: 8, color: '#AEB9D8', delay: '1.3s', kind: 'sparkle' },
  { top: '48%', left: '30%', size: 11, color: '#FBD6E7', delay: '0.3s', kind: 'star' },
  { top: '52%', right: '40%', size: 9, color: '#FFFAB1', delay: '2s', kind: 'sparkle' },
  { top: '58%', left: '15%', size: 10, color: '#7CC7F4', delay: '1.2s', kind: 'star' },
  { top: '16%', left: '48%', size: 7, color: '#F7ADCF', delay: '2.2s', kind: 'sparkle' },
  { top: '40%', left: '85%', size: 12, color: '#FBD6E7', delay: '0.7s', kind: 'star' },
  { top: '65%', right: '15%', size: 8, color: '#96D6D3', delay: '1.6s', kind: 'sparkle' },
]

/** Rich fixed sky scene: floating clouds, peeking rainbows, twinkly stars — pointer-events-none */
export function CloudBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden>
      {/* Soft atmospheric blurs */}
      <div className="absolute top-[-10%] left-[5%] w-[28rem] h-[28rem] rounded-full bg-[#D5F1FE]/70 blur-3xl" />
      <div className="absolute top-[20%] right-[-5%] w-[24rem] h-[24rem] rounded-full bg-[#FBD6E7]/35 blur-3xl" />
      <div className="absolute bottom-[-5%] left-[30%] w-[32rem] h-[20rem] rounded-full bg-[#AEB9D8]/25 blur-3xl" />
      <div className="absolute top-[40%] left-[-8%] w-[18rem] h-[18rem] rounded-full bg-[#96D6D3]/20 blur-3xl" />

      {/* Rainbows peeking behind / between clouds */}
      <RainbowSVG
        className="absolute top-[8%] left-[-2%] w-56 sm:w-72 opacity-70 animate-float-slow"
        style={{ animationDelay: '0.5s' }}
        withLavender
      />
      <RainbowSVG
        className="absolute bottom-[18%] right-[-4%] w-48 sm:w-64 opacity-55 animate-float"
        style={{ animationDelay: '2s', transform: 'scaleX(-1)' }}
      />

      {/* Scattered stars & sparkles */}
      {STAR_SCATTER.map((s, i) => {
        const pos: CSSProperties = {
          top: s.top,
          left: s.left,
          right: s.right,
          width: s.size,
          height: s.size,
          animationDelay: s.delay,
        }
        return s.kind === 'star' ? (
          <StarSVG
            key={`st-${i}`}
            className="absolute sparkle-pulse opacity-80"
            style={pos}
            color={s.color}
          />
        ) : (
          <SparkleSVG
            key={`sp-${i}`}
            className="absolute sparkle-pulse opacity-70"
            style={pos}
            color={s.color}
          />
        )
      })}

      {/* Floating fluffy clouds — mix of soft + outlined */}
      <CloudSVG
        className="absolute top-6 -left-10 w-52 sm:w-64 opacity-90 animate-float"
        outlined
      />
      <CloudSVG
        className="absolute top-20 right-2 w-40 sm:w-52 opacity-75 animate-float-slow"
        style={{ animationDelay: '1s' }}
        opacity={0.92}
      />
      <CloudSVG
        className="absolute top-[38%] -right-14 w-48 opacity-65 animate-float"
        style={{ animationDelay: '0.5s' }}
        outlined
      />
      <CloudSVG
        className="absolute bottom-28 left-[18%] w-56 sm:w-72 opacity-70 animate-float-slow"
        style={{ animationDelay: '2s' }}
      />
      <CloudSVG
        className="absolute bottom-6 right-[22%] w-44 opacity-80 animate-float"
        style={{ animationDelay: '3s' }}
        outlined
      />
      <CloudSVG
        className="absolute top-[55%] left-[-6%] w-36 opacity-55 animate-float-slow"
        style={{ animationDelay: '1.5s' }}
        opacity={0.85}
      />
      <CloudSVG
        className="absolute bottom-[12%] left-[55%] w-40 opacity-50 animate-float"
        style={{ animationDelay: '2.5s' }}
      />
    </div>
  )
}
