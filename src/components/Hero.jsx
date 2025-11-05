import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft vignette and gradient tint overlay that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-950/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Shield size={14} />
              PCI-ready fintech infrastructure
            </div>
            <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-white">
              Modern payments for digital brands
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80">
              Accept cards in 180+ countries, issue virtual wallets, and reconcile revenue in real‑time. Designed for SaaS, e‑commerce, and modern finance teams.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow hover:shadow-md transition w-full sm:w-auto"
              >
                Start for free
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 transition w-full sm:w-auto"
              >
                <Rocket className="mr-2" size={18} />
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
