'use client';
import { AppShell, Autocomplete, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MapSvg from '../../../shared/assets/svg/map.svg';
import PhoneSvg from '../../../shared/assets/svg/phone.svg';
import Logo from 'shared/assets/img/Logo.png';
import styles from './Header.module.scss';
import Image from 'next/image';
import { serviceCategories } from 'shared/constants/serviceСategories';
import Link from 'next/link';

const largeData = serviceCategories.map((category) => category.name);

export const Header = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell.Header className={styles.header}>
      <Link className={styles.linkLogo} href={'/'}>
        <Image src={Logo} alt="Logo" width={90} height={95} />
        <Title>{'« Любимцы в доме »'}</Title>
      </Link>
      <Autocomplete
        placeholder="Поиск..."
        data={largeData}
        maxDropdownHeight={200}
        classNames={{ input: styles.textInput }}
      />
      <Link
        className={styles.linkMap}
        href={
          'https://2gis.ru/ufa/firm/70000001029826447?m=56.047195%2C54.784976%2F16'
        }
        target="_blank"
      >
        <Image src={MapSvg} alt="map" />
        Как нас найти
      </Link>
      <Link
        className={styles.linkMap}
        href={'tel:+79603938390'}
        target="_blank"
      >
        <Image src={PhoneSvg} alt="phone" />
        Позвонить нам
      </Link>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    </AppShell.Header>
  );
};
