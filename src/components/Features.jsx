import { ShieldCheck, Bot, LineChart, Camera, Clock, PlugZap } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />, 
      title: 'Visual API Synthesis',
      desc: 'Turns any on-screen workflow into a clean, secure API using vision-language models. No source code access required.'
    },
    {
      icon: <Bot className="h-6 w-6" />, 
      title: 'Autonomous Agents',
      desc: 'Agents that log in, click, type, and complete work across portals and mainframes — like a digital workforce.'
    },
    {
      icon: <Clock className="h-6 w-6" />, 
      title: 'Self-Healing Workflows',
      desc: 'Robust against UI changes. If a button moves or a page shifts, agents adapt in real-time.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />, 
      title: 'Compliance Guardrails',
      desc: 'Every action is recorded with cryptographic audit trails — built for healthcare, banking, and critical ops.'
    },
    {
      icon: <LineChart className="h-6 w-6" />, 
      title: 'Outcome-Based Pricing',
      desc: 'Pay only when work is done. From $0.10 per invoice to $5 per resolved claim.'
    },
    {
      icon: <PlugZap className="h-6 w-6" />, 
      title: 'Drop-in SDK',
      desc: 'Velocis Studio lets partners build domain agents. You earn as they automate.'
    },
  ]

  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Velocis</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">
          The integration layer for agentic AI — bridge legacy systems without brittle RPA.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 text-blue-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-200">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-blue-200/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
