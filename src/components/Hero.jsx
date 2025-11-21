import Spline from '@splinetool/react-spline'
import { ArrowRight, PlayCircle } from 'lucide-react'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 sm:pt-36">
        <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-blue-200/90 backdrop-blur">
          Vertical AI • Agentic Process Automation
        </span>
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Velocis
          <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">The Universal API for the Physical World</span>
        </h1>
        <p className="mt-5 max-w-2xl text-center text-blue-100/90 text-lg sm:text-xl">
          An Agentic Operating System that sees your screen, clicks the buttons, and turns any legacy system into a modern API — no integrations required.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button onClick={() => scrollTo('pricing')} className="group inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600">
            Get a Demo
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <button onClick={() => scrollTo('how-it-works')} className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20">
            <PlayCircle className="mr-2 h-5 w-5" />
            See how it works
          </button>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Healthcare RCM', value: 'Claims, denials, resubmits' },
            { label: 'Logistics', value: 'Reroutes, manifests' },
            { label: 'Finance', value: 'Invoices, ledgers' },
            { label: 'Gov & Legacy', value: 'Mainframes, portals' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm text-blue-100/90">
              <p className="font-semibold text-white/90">{item.label}</p>
              <p className="text-xs text-blue-200/80">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
