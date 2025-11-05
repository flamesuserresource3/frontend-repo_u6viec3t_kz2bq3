export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage‑based pricing</h2>
          <p className="mt-4 text-white/70">No setup fees. Cancel anytime. Volume discounts available.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-2 text-sm text-white/70">For new products validating PMF</p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-white">0.9%</div>
              <div className="text-sm text-white/60">+ 20¢ per successful card charge</div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Hosted checkout</li>
              <li>• Basic analytics</li>
              <li>• Email support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-md transition">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur ring-2 ring-white/20">
            <div className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-900 shadow">Popular</div>
            <h3 className="text-white font-semibold">Growth</h3>
            <p className="mt-2 text-sm text-white/70">For growing teams and markets</p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-white">0.6%</div>
              <div className="text-sm text-white/60">+ 15¢ per successful card charge</div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Everything in Starter</li>
              <li>• Advanced analytics</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-md transition">Choose Growth</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-white font-semibold">Scale</h3>
            <p className="mt-2 text-sm text-white/70">For high‑volume businesses</p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-white">Custom</div>
              <div className="text-sm text-white/60">Tailored rates & SLAs</div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Dedicated manager</li>
              <li>• Custom risk rules</li>
              <li>• 24/7 support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
