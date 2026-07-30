import { RiShoppingCart2Line, RiLineChartLine, RiRadarLine } from 'react-icons/ri';

const steps = [
  { icon: RiShoppingCart2Line, label: 'Buy',    color: '#7C4F9E' },
  { icon: RiLineChartLine,     label: 'Invest',  color: '#2A2C2E' },
  { icon: RiRadarLine,         label: 'Track',   color: '#E55820' },
];

export function HomeHowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-[#2A2C2E] text-white px-8 py-3 rounded-full mb-12">
            <span className="font-semibold text-sm tracking-wide">How It Works</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="text-[#1A1A1A] font-semibold text-sm">{step.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex items-center mx-6">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#E55820]" />
                        <span className="w-2 h-2 rounded-full bg-[#E55820]/60" />
                        <span className="w-2 h-2 rounded-full bg-[#E55820]/30" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
