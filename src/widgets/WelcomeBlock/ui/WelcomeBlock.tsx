'use client';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button, Image, Text, Title } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SERVICES_CATEGORIES } from 'shared/constants';
import NextImage from 'next/image';
import Present from 'shared/assets/img/present.webp';
import Logo from 'shared/assets/img/logo_title.png';
import Link from 'next/link';
import styles from './WelcomeBlock.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const WelcomeBlock = () => {
  return (
    <main className={styles.homeMain}>
      <Swiper
        spaceBetween={15}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.welcomeSection}>
          <Image component={NextImage} src={Logo} alt={'logo'} priority />
          <div className={styles.titleBlock}>
            <Text className={styles.pTitle} size="xl">
              {'Ветеринарная Клиника'}
            </Text>
            <Title order={1} textWrap="nowrap">
              {'« Любимцы в доме »'}
            </Title>
            <Text className={styles.tagline}>{'Забота Во Всем!'}</Text>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.promotionSection1}>
          <div className={styles.titleBlock}>
            <Title order={1} textWrap="nowrap">
              {'Подарок !!!'}
            </Title>
            <Text size="lg">{'при вакцинации Щенка или Котёнка*'}</Text>
            <Image component={NextImage} src={Present} alt={'logo'} />
          </div>
          <Link href={'/services/vaktcinatciya'} className={styles.linkService}>
            <Button
              visibleFrom="sm"
              size="xs"
              variant="gradient"
              gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            >
              {'Вакцинация'}
            </Button>
          </Link>
          <Text className={styles.limitation}>
            {'*количество подарков ограничено'}
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.promotionSection2}>
          <div className={styles.titleBlock}>
            <Title order={1} textWrap="nowrap">
              {'Подарок !!!'}
            </Title>
            <Text size="lg">{'при Кастрации Кота и Стерилизации Кошки*'}</Text>
            <Image component={NextImage} src={Present} alt={'logo'} />
          </div>
          <Link
            href={'/services/kastratciya_i_sterilizatciya'}
            className={styles.linkService}
          >
            <Button
              visibleFrom="sm"
              size="xs"
              variant="gradient"
              gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            >
              {'Кастрация и стерилизация'}
            </Button>
          </Link>
          <Text className={styles.limitation}>
            {'*количество подарков ограничено'}
          </Text>
        </SwiperSlide>
      </Swiper>
      <section className={styles.servicesSection}>
        <Link href={'/services'}>
          <Title order={2}>{'Услуги'}</Title>
        </Link>
        <div className={styles.services}>
          {SERVICES_CATEGORIES.map((service, index) => {
            return (
              <Link href={`/services/${service.url}`} key={index}>
                <Image
                  component={NextImage}
                  src={service.icon}
                  alt={'logo'}
                  w={45}
                  h={45}
                />
                <Text>{service.name}</Text>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};
