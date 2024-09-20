'use client';
import { FC, ReactNode } from 'react';
import { Container, Title } from '@mantine/core';
import MapSvg from 'shared/assets/svg/map.svg';
import PhoneSvg from 'shared/assets/svg/phone.svg';
import Clock from 'shared/assets/svg/clock.svg';
import Logo from 'shared/assets/img/Logo.png';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type ProsHeader = {
  children: ReactNode;
};

export const Header: FC<ProsHeader> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.linkLogo} href={'/'}>
        <Image src={Logo} alt="Logo" width={90} height={95} priority />
        <Title>{'« Любимцы в доме »'}</Title>
      </Link>
      <Container className={styles.rootLinks} visibleFrom="sm">
        <div className={styles.titleContact}>
          <Image src={MapSvg} alt="map" priority />
          {'Адрес '}
        </div>
        <Link
          className={styles.link}
          href={
            'https://2gis.ru/ufa/firm/70000001029826447?m=56.047195%2C54.784976%2F16'
          }
          target="_blank"
        >
          г. Уфа <br /> &nbsp; Уфимское шоссе, 25
        </Link>
      </Container>
      <Container className={styles.rootLinks} visibleFrom="sm">
        <div className={styles.titleContact}>
          <Image src={Clock} alt="clock" priority />
          {'Время работы'}
        </div>
        <span style={{ fontWeight: '600' }}>
          Ежедневно <br /> с 10:00 до 21:00
        </span>
      </Container>
      <Container className={styles.rootLinks}>
        <div className={styles.titleContact}>
          <Image src={PhoneSvg} alt="phone" priority />
          <span>{'Телефон'} </span>
        </div>
        <Link className={styles.link} href={'tel:+79603938390'} target="_blank">
          {'+7‒960‒393‒83‒90'}
        </Link>
      </Container>
      {children}
    </header>
  );
};
