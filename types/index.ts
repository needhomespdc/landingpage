export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon?: string;
}

export interface InvestmentFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}
