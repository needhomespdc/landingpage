import type { Stat } from '@/types';

export const homeStats: Stat[] = [
  { id: 'houses-investment', value: '5000',  label: 'Houses for Investment' },
  { id: 'houses-purchase',   value: '10000', label: 'Houses for Purchase' },
  { id: 'customers',         value: '8000',  label: 'Satisfied Customers' },
  { id: 'agents',            value: '500',   label: 'Agents' },
];

export const aboutStats = {
  trackRecord: 'Over 1Billion',
  currentRound: '$1.33m (₦2 Billion)',
};

export const partnerStats = [
  { id: 'partnerships',  value: '50+',          label: 'Active Partnerships',       description: 'Trusted partners across Africa contributing to our shared vision of accessible real estate wealth.' },
  { id: 'total-value',   value: '₦2.5 Billion', label: 'Total Partnership Value',   description: 'Combined value of all partnership agreements, demonstrating our scale and impact in the market.' },
  { id: 'avg-roi',       value: '28%',          label: 'Average Partner ROI',       description: 'Our partners consistently achieve above-market returns through strategic collaboration and expert execution.' },
];
