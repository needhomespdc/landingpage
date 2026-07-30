declare namespace JSX {
  interface IntrinsicElements {
    'l-ring': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      size?: string | number;
      stroke?: string | number;
      color?: string;
      speed?: string | number;
    }, HTMLElement>;
    'l-helix': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      size?: string | number;
      color?: string;
      speed?: string | number;
    }, HTMLElement>;
    'l-dot-pulse': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      size?: string | number;
      color?: string;
      speed?: string | number;
    }, HTMLElement>;
    'l-ripples': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      size?: string | number;
      color?: string;
      speed?: string | number;
    }, HTMLElement>;
  }
}
