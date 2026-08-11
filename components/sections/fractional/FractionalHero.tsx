'use client';

import { InvestmentDarkHero } from '@/components/sections/investment/InvestmentDarkHero';

export function FractionalHero() {
  return (
    <InvestmentDarkHero
      badge="Fractional Ownership"
      titleLine1="Own a share of real estate"
      titleBeforeRotate="and earn"
      rotatingWords={['Rental income', 'capital appreciation']}
      subtitle="Explore the fractional ownership marketplace with verified properties, invest and start earning passive income."
    />
  );
}
