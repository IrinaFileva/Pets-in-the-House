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
import IconAppointment from 'shared/assets/svg/services/icon_Appointment.svg';
import IconTherapy from 'shared/assets/svg/services/icon_Therapy.svg';
import IconLaboratory from 'shared/assets/svg/services/icon_Laboratory.svg';
import IconUltrasound from 'shared/assets/svg/services/icon_ultrasound.svg';
import IconVaccination from 'shared/assets/svg/services/icon_Vaccination.svg';
import IconCastration from 'shared/assets/svg/services/icon_castration.svg';
import IconSurgery from 'shared/assets/svg/services/icon_surgery.svg';
import IconObstetrics from 'shared/assets/svg/services/icon_Obstetrics.svg';
import IconDentistry from 'shared/assets/svg/services/icon_Dentistry.svg';
import IconHygieneCare from 'shared/assets/svg/services/icon_HygieneCare.svg';
import IconIntensiveCare from 'shared/assets/svg/services/icon_IntensiveCare.svg';
import IconOtherServices from 'shared/assets/svg/services/icon_OtherServices.svg';

export const SERVICES_CATEGORIES: Service[] = [
  {
    name: 'Приём',
    image: Appointment,
    url: 'priem',
    icon: IconAppointment,
  },
  {
    name: 'Терапия',
    image: Therapy,
    url: 'terapiya',
    icon: IconTherapy,
  },
  {
    name: 'Лабораторная диагностика',
    image: Laboratory,
    url: 'laboratornaya_diagnostika',
    icon: IconLaboratory,
  },
  {
    name: 'Визуальная диагностика (УЗИ)',
    image: Ultrasound,
    url: 'vizualnaya_diagnostika',
    icon: IconUltrasound,
  },
  {
    name: 'Вакцинация',
    image: Vaccination,
    url: 'vaktcinatciya',
    icon: IconVaccination,
  },
  {
    name: 'Кастрация и стерилизация',
    image: Castration,
    url: 'kastratciya_i_sterilizatciya',
    icon: IconCastration,
  },
  {
    name: 'Хирургия',
    image: Surgery,
    url: 'hiryrgia',
    icon: IconSurgery,
  },
  {
    name: 'Гинекология и родовспоможение',
    image: Obstetrics,
    url: 'ginekologiya_i_rodovspomozhehie',
    icon: IconObstetrics,
  },
  {
    name: 'Стоматология',
    image: Dentistry,
    url: 'stomatologiya',
    icon: IconDentistry,
  },
  {
    name: 'Интенсивная терапия, стационар',
    image: IntensiveCare,
    url: 'intensivnaya_terapiya_statcionar',
    icon: IconIntensiveCare,
  },
  {
    name: 'Уход и гигиена',
    image: HygieneCare,
    url: 'ukhod_i_gigiena',
    icon: IconHygieneCare,
  },
  {
    name: 'Прочие услуги',
    image: OtherServices,
    url: 'prothie_uslugi',
    icon: IconOtherServices,
  },
];
