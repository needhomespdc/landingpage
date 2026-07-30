import type { Metadata } from 'next';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = { title: 'Leadership' };

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Leadership<span className="text-[#E55820]">.</span>
          </h1>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
              Meet the Team<span className="text-[#E55820]">.</span>
            </h2>
            <p className="text-gray-500 text-sm">
              The dedicated professionals driving innovation and excellence in property investment at NeedHomes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{member.name}</h3>
                <p className="text-xs text-[#E55820] mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
