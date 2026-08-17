import {
  RiHomeSmileLine,
  RiCalendarCheckLine,
  RiWallet3Line,
  RiKey2Line,
} from 'react-icons/ri';

const steps = [
  {
    icon: RiHomeSmileLine,
    title: 'Choose Property',
    description:
      'Browse verified homes and select the one you want to own.',
  },
  {
    icon: RiCalendarCheckLine,
    title: 'Select Your Plan',
    description:
      'Pick a flexible savings plan that fits your budget and timeline.',
  },
  {
    icon: RiWallet3Line,
    title: 'Start Saving',
    description:
      'Make regular contributions and track your progress toward ownership.',
  },
  {
    icon: RiKey2Line,
    title: 'Own Your Property',
    description:
      'Complete your plan and take full ownership of your home.',
  },
] as const;

export function SaveToOwnHowItWorks() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            How It Works
          </p>
          <h2 className="text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Simple Steps to Own Your Home
          </h2>
        </div>

        <ol className="relative grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
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
