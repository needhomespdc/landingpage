import Link from 'next/link';
import {
  RiUserAddLine,
  RiSearchLine,
  RiSecurePaymentLine,
  RiLineChartLine,
  RiArrowRightLine,
} from 'react-icons/ri';

const steps = [
  {
    icon: RiUserAddLine,
    title: 'Create Your Account',
    description: 'Sign up free and complete a quick verification.',
  },
  {
    icon: RiSearchLine,
    title: 'Browse & Choose',
    description: 'Explore verified properties and pick your model.',
  },
  {
    icon: RiSecurePaymentLine,
    title: 'Invest Securely',
    description: 'Fund through your wallet and confirm in a few taps.',
  },
  {
    icon: RiLineChartLine,
    title: 'Track & Earn',
    description: 'Monitor progress and returns in real time.',
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#E55820]">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            From signup to property ownership
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
            A clear path to owning a property through Nigerian real estate, no
            guesswork, just guided steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E55820]/50 hover:bg-white/[0.06]"
              >
                <span className="mb-4 text-xs font-semibold tracking-wide text-white/35">
                  Step {String(index + 1).padStart(2, '0')}
                </span>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E55820]/15 text-[#E55820] transition-colors duration-300 group-hover:bg-[#E55820] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>

                <h3 className="text-base font-bold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-md bg-[#E55820] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
          >
            See full process
            <RiArrowRightLine className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
