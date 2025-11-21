import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-400 to-cyan-300 shadow-lg" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Velocis</span>
          </div>
          <nav className="hidden gap-6 text-sm text-blue-200/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="hover:text-white">Backend Test</a>
          </nav>
          <a href="#pricing" className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600">Get a demo</a>
        </div>
      </header>

      <main className="mt-14">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-blue-200/70">© {new Date().getFullYear()} Velocis. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-blue-200/70">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
