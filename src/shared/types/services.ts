import { StaticImageData } from 'next/image';

export interface Service {
  name: string;
  image: StaticImageData;
  url: string;
}
