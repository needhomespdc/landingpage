import type { Metadata } from 'next';
import { RiSearchLine, RiEmotionSadLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Discover insights, stories, and updates from the NeedHomes team on Nigerian real estate and property investment.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #E55820 0%, #FF9A6C 100%)' }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Blog</h1>
          <p className="text-white/80 text-base mb-8">Discover insights, stories, and updates from our team</p>
          <div className="flex items-center gap-0 max-w-md">
            <input
              type="search"
              placeholder="search here..."
              className="flex-1 px-4 py-3 bg-white text-gray-700 text-sm placeholder-gray-400 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-3 bg-white border-l border-gray-200 rounded-r-md text-gray-500 hover:text-[#E55820] transition-colors">
              <RiSearchLine className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Posts */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-bold text-[#1A1A1A]">Latest News</h2>
              <h3 className="text-base font-semibold text-[#1A1A1A]">All News</h3>
              <div className="border border-gray-100 rounded-xl p-12 flex flex-col items-center text-center gap-3">
                <RiEmotionSadLine className="w-12 h-12 text-gray-300" />
                <p className="font-semibold text-gray-500">No Data Found</p>
                <p className="text-sm text-gray-400">It looks like there&apos;s nothing to display here.</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="bg-[#E55820] rounded-t-xl px-6 py-4">
                <h3 className="text-white font-bold">Categories</h3>
              </div>
              <div className="border border-gray-100 rounded-b-xl p-4">
                <button className="text-sm text-gray-600 hover:text-[#E55820] transition-colors">All</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
