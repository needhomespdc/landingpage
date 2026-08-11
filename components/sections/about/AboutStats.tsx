import {
  RiShieldCheckLine,
  RiPulseLine,
  RiBuilding2Line,
} from 'react-icons/ri';

const stats = [
  {
    icon: RiShieldCheckLine,
    value: '100%',
    label: 'Secured & Regulated',
  },
  {
    icon: RiPulseLine,
    value: '99.9%',
    label: 'Uptime',
  },
  {
    icon: RiBuilding2Line,
    value: '50+',
    label: 'Active Properties',
  },
] as const;

function DecorCorner({ position }: { position: 'top-right' | 'bottom-left' }) {
  const isTopRight = position === 'top-right';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${
        isTopRight ? 'top-0 right-0' : 'bottom-0 left-0'
      } h-36 w-36 md:h-44 md:w-44`}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.55) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
          maskImage: isTopRight
            ? 'radial-gradient(ellipse at top right, black 20%, transparent 70%)'
            : 'radial-gradient(ellipse at bottom left, black 20%, transparent 70%)',
          WebkitMaskImage: isTopRight
            ? 'radial-gradient(ellipse at top right, black 20%, transparent 70%)'
            : 'radial-gradient(ellipse at bottom left, black 20%, transparent 70%)',
        }}
      />
      <div
        className={`absolute h-20 w-20 rounded-full border border-[#E55820]/25 ${
          isTopRight ? '-top-6 -right-6' : '-bottom-6 -left-6'
        }`}
      />
      <div
        className={`absolute h-10 w-10 rounded-full bg-[#E55820]/10 ${
          isTopRight ? 'top-4 right-8' : 'bottom-4 left-8'
        }`}
      />
      <div
        className={`absolute h-3 w-3 rounded-full bg-[#E55820]/35 ${
          isTopRight ? 'top-14 right-4' : 'bottom-14 left-4'
        }`}
      />
    </div>
  );
}

export function AboutStats() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <DecorCorner position="top-right" />
          <DecorCorner position="bottom-left" />

          <ul className="relative z-10 grid list-none grid-cols-1 divide-y divide-white/10 p-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map(({ icon: Icon, value, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 px-6 py-8 md:px-8 md:py-10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E55820]/15">
                  <Icon className="h-5 w-5 text-[#E55820]" aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-0.5 text-sm text-white/70">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
