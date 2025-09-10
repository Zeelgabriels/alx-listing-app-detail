// interfaces/index.ts

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

// Interface for filter pills
export interface FilterPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

// Interface for layout component children
export interface LayoutProps {
  children: React.ReactNode;
}