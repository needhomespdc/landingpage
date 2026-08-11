import { RiEyeLine, RiFocus3Line } from 'react-icons/ri';

const cards = [
  {
    icon: RiEyeLine,
    label: 'Our Vision',
    text: 'A world where everyone can own a piece of tomorrow.',
  },
  {
    icon: RiFocus3Line,
    label: 'Our Mission',
    text: 'Empowering everyday people to build lasting wealth through real estate.',
  },
] as const;

export function AboutMission() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-8 px-4 md:px-6 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-6 lg:px-8">
        <div className="flex flex-col justify-center py-2 lg:pr-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            Our Mission
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            To make real estate wealth creation possible for everyone.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-600">
            We leverage technology to break barriers, remove complexities, and
            connect you to premium properties that grow your wealth over time.
          </p>
        </div>

        {cards.map(({ icon: Icon, label, text }) => (
          <article
            key={label}
            className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/4"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#E55820]/12">
              <Icon className="h-6 w-6 text-[#E55820]" aria-hidden />
            </div>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
              {label}
            </p>
            <p className="text-base leading-relaxed font-medium text-[#1A1A1A]">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
