import {
  RiPieChartLine,
  RiWallet3Line,
  RiLineChartLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiPieChartLine,
    title: 'Own a Share',
    description:
      "You don't need millions to own prime properties. Buy a fraction and start building wealth.",
  },
  {
    icon: RiWallet3Line,
    title: 'Earn Rental Income',
    description: 'Receive rental income periodically after the holding period begins.',
  },
  {
    icon: RiLineChartLine,
    title: 'Grow with Appreciation',
    description:
      'Benefit from capital appreciation paid at the end of the investment period.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Secure & Transparent',
    description:
      'Your investment is protected with clear terms, verified properties, and full transparency.',
  },
] as const;

export function FractionalAbout() {
  return (
    <section className="bg-[#F7F5F3] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            About Fractional Ownership
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Smart Investing. Shared Ownership. Real Returns.
          </h2>
          <p className="text-base leading-relaxed text-[#555555] md:text-lg">
            Fractional Ownership allows you to own a share of premium real estate
            properties.
            <br className="hidden sm:block" />
            You earn rental income periodically or benefit from capital
            appreciation when the investment matures.
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
