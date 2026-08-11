import type { LegalDocumentSection } from '@/data/privacy-policy';

type LegalDocumentViewProps = {
  title: string;
  effectiveDate: string;
  introParagraphs: readonly string[];
  sections: readonly LegalDocumentSection[];
  closingTitle: string;
  closingBody: string;
};

export function LegalDocumentView({
  title,
  effectiveDate,
  introParagraphs,
  sections,
  closingTitle,
  closingBody,
}: LegalDocumentViewProps) {
  return (
    <>
      <section className="bg-[#333D42] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">
            {title}
            <span className="text-[#E55820]">.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-4 md:px-6 lg:px-8">
          <p className="mb-6 text-sm text-gray-500">
            Effective Date: {effectiveDate}
          </p>

          <div className="space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-3 leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    {section.bulletPoints.map((point) => (
                      <li key={point} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#E8E8E8] bg-gray-50 p-6">
            <h2 className="mb-3 text-lg font-bold text-[#1A1A1A]">
              {closingTitle}
            </h2>
            <p className="leading-relaxed text-gray-700">{closingBody}</p>
          </div>
        </div>
      </section>
    </>
  );
}
