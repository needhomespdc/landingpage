import {
  RiGroupLine,
  RiHammerLine,
  RiHome4Line,
  RiShieldCheckLine,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiGroupLine,
    title: 'Co-Own Real Estate',
    description:
      'Become a co-owner of premium properties with like-minded investors.',
  },
  {
    icon: RiHammerLine,
    title: 'Quality Development',
    description:
      'We manage the development with trusted partners and industry professionals.',
  },
  {
    icon: RiHome4Line,
    title: 'Own a Share',
    description:
      'At completion, you receive your share or allocated unit based on your investment.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Safe & Transparent',
    description:
      'Every step is tracked, verified, and communicated for your peace of mind.',
  },
] as const;

export function CoDevelopmentAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            About Co-Development
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            You Invest. We Build. You Own.
          </h2>
          <p className="text-base leading-relaxed text-[#555555] md:text-lg">
            Co-development allows you to invest in real estate projects from the
            ground up.
            <br className="hidden sm:block" />
            When the project is completed, you receive your share of the property
            — not just returns.
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
