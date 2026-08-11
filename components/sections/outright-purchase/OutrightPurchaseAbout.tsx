import {
  RiKey2Line,
  RiHome4Line,
  RiLineChartLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiKey2Line,
    title: 'Full Ownership',
    description:
      'Buy a verified property and take complete ownership with no shared decisions.',
  },
  {
    icon: RiHome4Line,
    title: 'Live, Rent, or Hold',
    description:
      'Move in, earn rental income, or keep the property as a long term asset.',
  },
  {
    icon: RiLineChartLine,
    title: 'Your Property, Your Rules',
    description:
      'After purchase, take ownership immediately or rent it out on your own terms.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Clear and Secure',
    description:
      'Every home comes with verified titles, proper documentation, and a guided purchase process.',
  },
] as const;

export function OutrightPurchaseAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            About Outright Purchase
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Buy Once. Own Fully. Decide Freely.
          </h2>
          <p className="text-base leading-relaxed text-[#555555] md:text-lg">
            Outright purchase means you buy a ready property and become the sole
            owner from day one.
            <br className="hidden sm:block" />
            You get full control to live in it, rent it out, or hold it for
            appreciation, with clear titles and a straightforward process.
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
