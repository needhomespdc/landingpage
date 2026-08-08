import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const MODELS = [
  {
    title: 'Fractional Ownership',
    description: 'Own a share of premium properties and earn rental income.',
    href: '/investment/fractional-ownership',
    image: '/images/investment-models/fractional.png',
  },
  {
    title: 'Land Banking',
    description: 'Invest in verified lands in high-growth locations.',
    href: '/investment/land-banking',
    image: '/images/investment-models/landbankin.png',
  },
  {
    title: 'Save to Own',
    description: 'Save gradually and own your dream property hassle-free.',
    href: '/investment/save-to-own',
    image: '/images/investment-models/savetoown.png',
  },
  {
    title: 'Co-development',
    description: 'Partner with us on profitable real estate development projects.',
    href: '/investment/co-development',
    image: '/images/investment-models/codevelop.png',
  },
  {
    title: 'Outright Purchase',
    description: 'Buy ready-to-own properties outright with ease.',
    href: '/investment/outright-purchase',
    image: '/images/investment-models/outright.png',
  },
] as const;

export function InvestmentModels() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Invest Your Way
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666666] md:text-base">
            Multiple investment options designed to help you grow wealth and
            achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MODELS.map((model) => (
            <article
              key={model.href}
              className="group flex flex-col rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E55820]/55 md:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#F0F0F0] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={model.image}
                  alt=""
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <h3 className="text-lg font-bold leading-snug text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#E55820]">
                {model.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666666] md:text-[15px]">
                {model.description}
              </p>
              <Link
                href={model.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E55820] transition-all duration-300 group-hover:gap-2.5"
              >
                Learn More
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
