import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/shared/LegalDocumentView';
import { privacyPolicyContent } from '@/data/privacy-policy';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentView
      title="Privacy Policy"
      effectiveDate={privacyPolicyContent.effectiveDate}
      introParagraphs={privacyPolicyContent.introParagraphs}
      sections={privacyPolicyContent.sections}
      closingTitle={privacyPolicyContent.consentTitle}
      closingBody={privacyPolicyContent.consentBody}
    />
  );
}
