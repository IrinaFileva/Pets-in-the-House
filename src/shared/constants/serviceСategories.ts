import { Service } from 'shared/types';
import Appointment from 'shared/assets/img/services/appointment.jpg';
import OtherServices from 'shared/assets/img/services/otherServices.jpg';
import Laboratory from 'shared/assets/img/services/laboratory.jpg';
import Ultrasound from 'shared/assets/img/services/ultrasound.jpg';
import Surgery from 'shared/assets/img/services/surgery.jpg';
import Obstetrics from 'shared/assets/img/services/obstetrics.jpg';
import Dentistry from 'shared/assets/img/services/dentistry.webp';
import HygieneCare from 'shared/assets/img/services/hygieneCare.jpg';
import Vaccination from 'shared/assets/img/services/vaccination.jpg';
import Therapy from 'shared/assets/img/services/therapy.webp';
import Castration from 'shared/assets/img/services/sterilization.jpg';
import IntensiveCare from 'shared/assets/img/services/intensiveCare.jpg';

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
    url: 'laboratornaya_diagnostika',
  },
  {
    name: 'Визуальная диагностика (УЗИ)',
    image: Ultrasound,
    url: 'vizualnaya_diagnostika',
  },
  {
    name: 'Вакцинация',
    image: Vaccination,
    url: 'vaktcinatciya',
  },
  {
    name: 'Кастрация и стерилизация',
    image: Castration,
    url: 'kastratciya_i_sterilizatciya',
  },
  {
    name: 'Хирургия',
    image: Surgery,
    url: 'hiryrgia',
  },
  {
    name: 'Гинекология и родовспоможение',
    image: Obstetrics,
    url: 'ginekologiya_i_rodovspomozhehie',
  },
  {
    name: 'Стоматология',
    image: Dentistry,
    url: 'stomatologiya',
  },
  {
    name: 'Интенсивная терапия, стационар',
    image: IntensiveCare,
    url: 'intensivnaya_terapiya_statcionar',
  },
  {
    name: 'Уход и гигиена',
    image: HygieneCare,
    url: 'ukhod_i_gigiena',
  },
  {
    name: 'Прочие услуги',
    image: OtherServices,
    url: 'prothie_uslugi',
  },
];
