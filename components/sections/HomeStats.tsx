import { RiHome4Line, RiKey2Line, RiHandCoinLine } from 'react-icons/ri';
import { homeStats } from '@/data/stats';

const icons = [RiHome4Line, RiKey2Line, RiHandCoinLine];
const accentColors = ['#E55820', '#374151', '#7C3AED'];

export function HomeStats() {
  const stats = homeStats.slice(0, 3);

  return (
    <section className="py-14 md:py-20 bg-[#F3F5F7]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12">Our Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            const color = accentColors[i];
            return (
              <div key={stat.id} className="relative w-full max-w-[260px] mx-auto sm:mx-0">
                {/* Colored backing flag */}
                <div className="absolute inset-0" style={{ backgroundColor: color }} />
                {/* White foreground, clipped to a flag shape */}
                <div
                  className="relative bg-white flex flex-col items-center text-center gap-4 px-8 py-10"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0% 100%)' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#52555A] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-[#1A1A1A]">{stat.value}</p>
                    <p className="text-base text-gray-700 mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
