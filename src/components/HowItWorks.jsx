import { Layers, Eye, MousePointer2, Link2, FileSearch, CheckCircle2 } from 'lucide-react'

function HowItWorks() {
  const steps = [
    { icon: <Eye className="h-5 w-5" />, title: 'See', desc: 'Vision models understand screens, documents, and terminals.' },
    { icon: <MousePointer2 className="h-5 w-5" />, title: 'Act', desc: 'Simulates mouse and keyboard to drive any UI.' },
    { icon: <Link2 className="h-5 w-5" />, title: 'Synthesize', desc: 'Wraps workflows as REST endpoints: POST /reroute, POST /submit-claim.' },
    { icon: <FileSearch className="h-5 w-5" />, title: 'Record', desc: 'Cryptographic logs for each click and field — compliant by default.' },
    { icon: <Layers className="h-5 w-5" />, title: 'Scale', desc: 'Parallel agents execute thousands of tasks per minute.' },
    { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Assure', desc: 'Self-heal on UI drifts; alerts for true edge cases.' },
  ]

  return (
    <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">An agentic operating system that turns pixels into APIs.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-200">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-sm text-blue-200/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
