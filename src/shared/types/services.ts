import { StaticImageData } from 'next/image';

export interface Service {
  name: string;
  image: StaticImageData;
  url: string;
}

export interface ServicePriceList {
  name: string;
  price: string | MultiplePrices[];
  precondition?: string;
}

export interface MultiplePrices {
  title: string;
  cost: string;
}
