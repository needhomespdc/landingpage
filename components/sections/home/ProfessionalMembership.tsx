export function ProfessionalMembership() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h3 className="text-center text-base font-semibold text-gray-500 mb-8">Professional Membership</h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* Membership badge placeholders — replaced with real logos when available */}
          <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-400 text-center px-2 leading-tight">Member Badge</span>
          </div>
          <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-400 text-center px-2 leading-tight">Member Badge</span>
          </div>
        </div>
      </div>
    </section>
  );
}
