import type { Metadata } from 'next';
import { DataDeletionView } from '@/components/sections/data-deletion/DataDeletionView';

export const metadata: Metadata = {
  title: 'Request data deletion',
  description:
    'Request deletion of your NeedHomes account and associated personal data. Learn what is deleted, what may be retained, and how long requests take.',
};

export default function DataDeletionPage() {
  return <DataDeletionView />;
}
