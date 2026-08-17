import type { Metadata } from 'next';
import { AccountDeactivationView } from '@/components/sections/account-deactivation/AccountDeactivationView';

export const metadata: Metadata = {
  title: 'Deactivate account',
  description:
    'Request temporary deactivation of your NeedHomes account without signing in to the app.',
  alternates: { canonical: '/account-deactivation' },
};

export default function DeactivateAccountPage() {
  return <AccountDeactivationView />;
}
