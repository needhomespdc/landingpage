import Image from 'next/image';
import { RiShieldCheckLine, RiLineChartLine, RiGroupLine } from 'react-icons/ri';

const features = [
  {
    icon: RiShieldCheckLine,
    title: 'Secure & Regulated',
    description: 'Your investments are protected',
  },
  {
    icon: RiLineChartLine,
    title: 'High Returns',
    description: 'Properties with strong growth potential',
  },
  {
    icon: RiGroupLine,
    title: 'Trusted by Thousands',
    description: 'Join 12,500+ investors across Nigeria',
  },
] as const;

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-12 lg:min-h-[420px]">
          <div className="about-hero-fade max-w-xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
              About NeedHomes
            </p>
            <h1 className="mb-5 text-4xl leading-[1.15] font-bold md:text-5xl">
              Building Homes,
              <br />
              Creating Wealth,
              <br />
              Changing Lives.
            </h1>
            <p className="mb-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              NeedHomes is Nigeria&apos;s leading proptech platform that makes real
              estate investing simple, transparent, and accessible for everyone.
            </p>
            <div className="h-0.5 w-14 bg-[#E55820]" aria-hidden />
          </div>

          <ul className="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-3 sm:gap-5">
            {features.map(({ icon: Icon, title, description }, index) => (
              <li
                key={title}
                className="about-hero-fade"
                style={{ animationDelay: `${180 + index * 100}ms` }}
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-[#E55820]" aria-hidden />
                </div>
                <h2 className="mb-1 text-sm font-semibold text-white">{title}</h2>
                <p className="text-xs leading-relaxed text-white/65">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-hero-fade relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]" style={{ animationDelay: '150ms' }}>
          <Image
            src="/images/hero/about-hero.png"
            alt="NeedHomes property investment team"
            fill
            priority
            className="object-contain object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
