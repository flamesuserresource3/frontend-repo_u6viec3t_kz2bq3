import { CreditCard, BarChart, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Global card acceptance',
    desc: 'Process payments in 135+ currencies with automatic FX and smart retries.',
  },
  {
    icon: BarChart,
    title: 'Real-time analytics',
    desc: 'Track MRR, churn, cohorts, and payout timelines in a unified dashboard.',
  },
  {
    icon: Globe,
    title: 'Localized checkout',
    desc: 'Increase conversions with local payment methods and auto-translated UI.',
  },
  {
    icon: Shield,
    title: 'Advanced risk controls',
    desc: '3DS2, device fingerprinting, and adaptive risk scores out of the box.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to scale payments</h2>
          <p className="mt-4 text-white/70">
            A complete financial stack for SaaS and e‑commerce, built for developers and loved by finance teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07] transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
