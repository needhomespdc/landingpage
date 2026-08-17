import type { Metadata } from 'next';
import { DataDeletionView } from '@/components/sections/data-deletion/DataDeletionView';

export const metadata: Metadata = {
  title: 'Delete account',
  description:
    'Request deletion of your NeedHomes account and associated personal data. You can submit this request without signing in to the app.',
  alternates: { canonical: '/data-deletion' },
};

export default function DeleteAccountPage() {
  return <DataDeletionView />;
}
