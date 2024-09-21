'use client';
import { FC, ReactNode } from 'react';
import { Container, Title } from '@mantine/core';
import PhoneSvg from 'shared/assets/svg/phone.svg';
import Logo from 'shared/assets/img/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

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
