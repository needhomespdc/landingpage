import {
  RiSearchLine,
  RiFileList3Line,
  RiWallet3Line,
  RiTimeLine,
  RiLineChartLine,
} from 'react-icons/ri';

const steps = [
  {
    icon: RiSearchLine,
    title: 'Browse Lands',
    description:
      'Explore verified land opportunities in high growth corridors and emerging zones.',
  },
  {
    icon: RiFileList3Line,
    title: 'Verify and Inspect',
    description:
      'Review documentation and complete a site inspection with our team.',
  },
  {
    icon: RiWallet3Line,
    title: 'Secure Your Plot',
    description:
      'Complete payment and legal documentation to lock in your land purchase.',
  },
  {
    icon: RiTimeLine,
    title: 'Hold Over Time',
    description:
      'Keep your land through the appreciation cycle with little to no upkeep.',
  },
  {
    icon: RiLineChartLine,
    title: 'Exit at a Premium',
    description:
      'Sell when the value has grown and realize returns from land appreciation.',
  },
] as const;

export function LandBankingHowItWorks() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            How It Works
          </p>
          <h2 className="text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Simple Steps to Grow With Land
          </h2>
        </div>

        <ol className="relative grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          <div
            aria-hidden
            className="pointer-events-none absolute top-7 right-[10%] left-[10%] hidden border-t border-dashed border-black/15 lg:block"
          />

          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative z-10 flex flex-col items-center text-center">
              <div className="group relative mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E55820]/12 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-[#E55820]" aria-hidden />
                </div>
                <span className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#E55820] text-xs font-bold text-white shadow-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-[#1A1A1A]">{title}</h3>
              <p className="max-w-[200px] text-sm leading-relaxed text-[#555555]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
