import {
  RiMapPinLine,
  RiTimeLine,
  RiLineChartLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiMapPinLine,
    title: 'Acquire Strategic Land',
    description:
      'Buy verified plots in high-growth corridors and emerging development zones.',
  },
  {
    icon: RiTimeLine,
    title: 'Hold Over Time',
    description:
      'Patient capital compounds — hold through the appreciation cycle with minimal upkeep.',
  },
  {
    icon: RiLineChartLine,
    title: 'Benefit from Appreciation',
    description:
      'As infrastructure and demand grow around your land, so does its market value.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Secure & Transparent',
    description:
      'Every parcel comes with verified titles, clear documentation, and full transparency.',
  },
] as const;

export function LandBankingAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            About Land Banking
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Buy Land. Hold Patiently. Grow Wealth.
          </h2>
          <p className="text-base leading-relaxed text-[#555555] md:text-lg">
            Land banking is investing in strategic land parcels and holding them
            over time for appreciation.
            <br className="hidden sm:block" />
            You acquire verified land today, wait as value compounds, and exit
            when the market rewards your patience.
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className={`flex flex-col items-center px-5 text-center sm:px-6 ${
                index % 2 === 1 ? 'sm:border-l sm:border-black/8' : ''
              } ${index > 0 ? 'lg:border-l lg:border-black/8' : ''}`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E55820]/12">
                <Icon className="h-6 w-6 text-[#E55820]" aria-hidden />
              </div>
              <h3 className="mb-2 text-base font-bold text-[#1A1A1A]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#555555]">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
