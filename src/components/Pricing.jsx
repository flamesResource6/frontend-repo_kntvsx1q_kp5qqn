function Pricing() {
  const tiers = [
    { name: 'Invoices', price: '$0.10', unit: 'per processed invoice', features: ['OCR + validation', 'Post to ERP', 'Audit trail'] },
    { name: 'Patient Intake', price: '$1.00', unit: 'per record', features: ['Eligibility check', 'Form fill', 'Payer portal sync'] },
    { name: 'Insurance Claim', price: '$5.00', unit: 'per resolved claim', features: ['Denial management', 'Resubmission', 'Appeal letters'] },
  ]

  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Outcome-based pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">Only pay when work is done. Software margins, services outcomes.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 text-blue-100/90">
            <h3 className="text-xl font-semibold text-white">{t.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-white">{t.price}<span className="ml-1 text-base font-normal text-blue-200/80">{t.unit}</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600">Start pilot</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
