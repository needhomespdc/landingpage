import type { Metadata } from 'next';
import { AccountDeactivationView } from '@/components/sections/account-deactivation/AccountDeactivationView';

export const metadata: Metadata = {
  title: 'Request account deactivation',
  description:
    'Request temporary deactivation of your NeedHomes account. Your data is kept so support can restore access later.',
};

export default function AccountDeactivationPage() {
  return <AccountDeactivationView />;
}
