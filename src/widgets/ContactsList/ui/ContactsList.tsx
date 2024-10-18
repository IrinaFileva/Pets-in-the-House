'use client';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Container, List } from '@mantine/core';
import { OUTSIDE_LINKS } from 'shared/constants';
import { HeaderPage } from 'shared/ui/HeaderPage';
import Link from 'next/link';
import Image from 'next/image';
import Phone from 'shared/assets/svg/phone.svg';
import Address from 'shared/assets/svg/map.svg';
import Telega from 'shared/assets/svg/telegram.svg';
import Clock from 'shared/assets/svg/clock.svg';
import VK from 'shared/assets/svg/vk.svg';
import styles from './ContactsList.module.scss';

export const ContactsList = () => {
  return (
    <main className={styles.contactsSection}>
      <section className={styles.contacts}>
        <HeaderPage titlePage="Контакты" />
        <Container className={styles.containerLists}>
          <List
            classNames={{
              item: styles.listItem,
              itemLabel: styles.itemLabel,
            }}
          >
            <List.Item
              icon={<Image src={Phone} alt="phone" width={27} height={27} />}
            >
              {'Телефон:'}
            </List.Item>
            <List.Item
              icon={
                <Image src={Address} alt="address" width={27} height={27} />
              }
            >
              {'Aдрес:'}
            </List.Item>
            <List.Item
              icon={<Image src={Clock} alt="clock" width={27} height={27} />}
            >
              {'График:'}
            </List.Item>
            <List.Item
              icon={<Image src={VK} alt="VK" width={27} height={27} />}
            >
              {'ВКонтакте:'}
            </List.Item>
            <List.Item
              icon={
                <Image src={Telega} alt="Telegram" width={27} height={27} />
              }
            >
              {'Telegram:'}
            </List.Item>
          </List>
          <List
            classNames={{
              item: styles.listItemLink,
            }}
          >
            <List.Item icon={<span />}>
              <Link href={OUTSIDE_LINKS.tel} target="_blank">
                {' +7‒960‒393‒83‒90'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <Link href={OUTSIDE_LINKS.map} target="_blank">
                {' г. Уфа Уфимское шоссе, 25'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <p className={styles.clockTitle}>
                {'Ежедневно, с 10:00 до 21:00'}
              </p>
            </List.Item>
            <List.Item icon={<span />}>
              <Link
                className={styles.linkVk}
                href={OUTSIDE_LINKS.vk}
                target="_blank"
              >
                {' Любимцы в Доме'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <Link
                className={styles.linkVk}
                href={OUTSIDE_LINKS.telegram}
                target="_blank"
              >
                {' @lyubimtsyvdome'}
              </Link>
            </List.Item>
          </List>
        </Container>
      </section>
      <Container className={styles.constantsMap}>
        <YMaps>
          <Map
            style={{
              position: 'relative',
              top: '0',
              width: '100%',
              height: '100%',
            }}
            defaultState={{ center: [54.78506, 56.047126], zoom: 18 }}
          >
            <Placemark defaultGeometry={[54.78506, 56.047126]} />
          </Map>
        </YMaps>
      </Container>
      <iframe
        src="https://swdgts.ru/7362bf9facaa657dda53a26744bbba9c"
        width="100%"
        height="300"
        frameBorder="0"
      ></iframe>
    </main>
  );
};
