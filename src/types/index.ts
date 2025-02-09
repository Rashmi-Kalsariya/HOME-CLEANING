export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price: string;
  features: string[];
  specs: {
    material: string;
    handleLength: string;
    weight: string;
    warranty: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}