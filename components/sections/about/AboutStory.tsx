import Image from 'next/image';

export function AboutStory() {
  return (
    <section id="our-story" className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            Our Story
          </p>
          <h2 className="mb-6 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Property Ownership Shouldn&apos;t Feel Out of Reach
          </h2>
          <div className="mb-8 space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              For many people, the desire to own property or build wealth through
              real estate is real, but high entry costs, rigid payment structures,
              limited access to trusted opportunities, and complicated processes
              often make getting started difficult.
            </p>
            <p>That&apos;s the problem NeedHomes was created to solve.</p>
            <p>
              NeedHomes is a PropTech platform making real estate investment and
              property ownership more accessible, flexible, and transparent. We
              use technology to simplify how people discover opportunities,
              invest, make payments, manage their properties, and track their
              investments.
            </p>
            <p>
              Through Fractional Ownership, Land Banking, Save-to-Own,
              Co-Development, and Outright Purchase, we provide different
              pathways into real estate, allowing people to choose an option that
              fits their goals and financial capacity.
            </p>
            <p>
              At NeedHomes, we&apos;re creating a simpler way for more people to
              start, invest, and move closer to property ownership.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hero/housing-bg.jpg"
            alt="NeedHomes team collaborating on property investment solutions"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
