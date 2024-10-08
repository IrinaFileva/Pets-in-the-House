import { StaticImageData } from 'next/image';

export interface Doctor {
  image: StaticImageData;
  name: string;
  about: string;
  dialog: string;
}
