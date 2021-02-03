export interface Story {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  imgMobile: string;
  imgDesktop: string;
}

export interface Feature {
  id: number;
  name: string;
  description: string;
  img: string;
}

export interface Plan {
  id: number;
  item: string;
  basic: string;
  pro: string;
  business: string;
}

export interface Img {
  desktop: string;
  mobile: string;
  tablet: string;
}

export interface Link {
  title: string;
  path: string;
}
