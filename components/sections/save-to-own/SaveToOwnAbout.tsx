import {
  RiHomeSmileLine,
  RiCalendarCheckLine,
  RiSaveLine,
  RiKey2Line,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiHomeSmileLine,
    title: 'Choose Your Home',
    description:
      'Pick a verified property you want to own and lock in a clear savings path.',
  },
  {
    icon: RiCalendarCheckLine,
    title: 'Save at Your Pace',
    description:
      'Pay gradually on a flexible plan that fits your budget and timeline.',
  },
  {
    icon: RiSaveLine,
    title: 'Build Toward Ownership',
    description:
      'Every contribution moves you closer to full ownership without a heavy upfront cost.',
  },
  {
    icon: RiKey2Line,
    title: 'Become the Full Owner',
    description:
      'Complete your plan and take ownership of the property on your terms.',
  },
] as const;

export function SaveToOwnAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            About Save to Own
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Save Gradually. Own Fully.
          </h2>
          <p className="text-base leading-relaxed text-[#555555] md:text-lg">
            Save to Own lets you pay gradually toward a property and become the
            full owner over time.
            <br className="hidden sm:block" />
            You choose a verified home, follow a flexible plan, and take
            ownership when your payments are complete.
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
