import { StaticImageData } from 'next/image';

export interface Service {
  name: string;
  image: StaticImageData;
  url: string;
  icon?: StaticImageData;
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

export interface PriceList {
  priem: ServicePriceList[];
  terapiya: ServicePriceList[];
  laboratornaya_diagnostika: ServicePriceList[];
  vizualnaya_diagnostika: ServicePriceList[];
  vaktcinatciya: ServicePriceList[];
  kastratciya_i_sterilizatciya: ServicePriceList[];
  hiryrgia: ServicePriceList[];
  ginekologiya_i_rodovspomozhehie: ServicePriceList[];
  stomatologiya: ServicePriceList[];
  intensivnaya_terapiya_statcionar: ServicePriceList[];
  ukhod_i_gigiena: ServicePriceList[];
  prothie_uslugi: ServicePriceList[];
}

export interface PropsValues {
  category?: keyof PriceList;
  service?: string;
  price?: string | MultiplePrices[];
  title?: string;
  cost?: string;
  position?: string;
}

export interface PropsPriceAdminForm {
  priceList: PriceList;
  TOKEN: string | undefined;
  X_MASTER_KEY: string | undefined;
}
