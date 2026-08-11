import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/shared/LegalDocumentView';
import { termsAndConditionsContent } from '@/data/terms-and-conditions';

export const metadata: Metadata = { title: 'Terms and Conditions' };

export default function TermsPage() {
  return (
    <LegalDocumentView
      title="Terms and Conditions"
      effectiveDate={termsAndConditionsContent.effectiveDate}
      introParagraphs={termsAndConditionsContent.introParagraphs}
      sections={termsAndConditionsContent.sections}
      closingTitle={termsAndConditionsContent.declarationTitle}
      closingBody={termsAndConditionsContent.declarationBody}
    />
  );
}
