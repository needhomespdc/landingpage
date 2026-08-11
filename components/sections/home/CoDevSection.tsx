import Image from 'next/image';
import { RiMoneyDollarCircleLine, RiBuilding2Line, RiKey2Line } from 'react-icons/ri';

const steps = [
  {
    icon: RiMoneyDollarCircleLine,
    title: 'Funding',
    description: 'Pool of investors comes together to contribute agreed portion into the project paying either outright or instalment before and during construction.',
  },
  {
    icon: RiBuilding2Line,
    title: 'Construction',
    description: 'Projects are professionally designed, managed, and maintained by Needhomes and its construction partners until completion.',
  },
  {
    icon: RiKey2Line,
    title: 'Ownership',
    description: 'When completed, investors receive full ownership of the property.',
  },
];

export function CoDevSection() {
  return (
    <section className="relative py-16 md:py-20 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/housing-bg.jpg"
          alt="Housing development"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2A2C2E]/85" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            What is Co-Development?
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            We bring multiple qualified home buyers or investors together to fund, build & own housing
            units collectively. Each subscriber contributes an agreed portion into the project during
            construction and receives full legal ownership upon completion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#E55820]/20 border border-[#E55820]/40 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#E55820]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {i < 2 && (
                  <span className="hidden md:block absolute top-7 -right-4 text-[#E55820] text-2xl font-light">→</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
