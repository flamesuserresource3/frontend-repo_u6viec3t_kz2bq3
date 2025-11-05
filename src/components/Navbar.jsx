import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="font-semibold text-white">FlarePay</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-md transition"
              >
                Get started
              </a>
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-md transition"
                  onClick={() => setOpen(false)}
                >
                  Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
