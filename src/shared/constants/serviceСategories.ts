import { Service } from 'shared/types';
import Appointment from 'shared/assets/img/appointment.jpg';
import OtherServices from 'shared/assets/img/otherServices.jpg';
import Laboratory from 'shared/assets/img/laboratory.jpg';
import Ultrasound from 'shared/assets/img/ultrasound.jpg';
import Surgery from 'shared/assets/img/surgery.jpg';
import Obstetrics from 'shared/assets/img/obstetrics.jpg';
import Dentistry from 'shared/assets/img/dentistry.webp';
import HygieneCare from 'shared/assets/img/hygieneCare.jpg';
import Vaccination from 'shared/assets/img/vaccination.jpg';
import Therapy from 'shared/assets/img/therapy.webp';
import Castration from 'shared/assets/img/sterilization.jpg';
import IntensiveCare from 'shared/assets/img/intensiveCare.jpg';

export const SERVICES_CATEGORIES: Service[] = [
  {
    name: 'Приём',
    image: Appointment,
    url: 'priem',
  },
  {
    name: 'Терапия',
    image: Therapy,
    url: 'terapiya',
  },
  {
    name: 'Лабораторная диагностика',
    image: Laboratory,
    url: 'laboratornaya-diagnostika',
  },
  {
    name: 'Визуальная диагностика (УЗИ)',
    image: Ultrasound,
    url: 'vizualnaya-diagnostika',
  },
  {
    name: 'Вакцинация',
    image: Vaccination,
    url: 'vaktcinatciya',
  },
  {
    name: 'Кастрация и стерилизация',
    image: Castration,
    url: 'kastratciya-i-sterilizatciya',
  },
  {
    name: 'Хирургия',
    image: Surgery,
    url: 'hiryrgia',
  },
  {
    name: 'Гинекология и родовспоможение',
    image: Obstetrics,
    url: 'ginekologiya-i-rodovspomozhehie',
  },
  {
    name: 'Стоматология',
    image: Dentistry,
    url: 'stomatologiya',
  },
  {
    name: 'Интенсивная терапия, стационар',
    image: IntensiveCare,
    url: 'intensivnaya-terapiya-i-reanimatciya',
  },
  {
    name: 'Уход и гигиена',
    image: HygieneCare,
    url: 'ukhod-i-gigiena',
  },
  {
    name: 'Прочие услуги',
    image: OtherServices,
    url: 'prothie-uslugi',
  },
];
