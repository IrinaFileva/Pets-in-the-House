'use client';
import Link from 'next/link';
import Image from 'next/image';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Breadcrumbs, Container, List } from '@mantine/core';
import Phone from 'shared/assets/svg/phone.svg';
import Address from 'shared/assets/svg/map.svg';
import Telega from 'shared/assets/svg/telegram.svg';
import Clock from 'shared/assets/svg/clock.svg';
import VK from 'shared/assets/svg/vk.svg';
import styles from './ContactsList.module.scss';

const breadCrumbsItem = [
  { title: 'Главная', href: '/' },
  { title: 'Контакты', href: '#' },
].map((item, index) => (
  <Link href={item.href} key={index}>
    {item.title}
  </Link>
));

export const ContactsList = () => {
  return (
    <main className={styles.contactsSection}>
      <section className={styles.contacts}>
        <h2>Контакты</h2>
        <Breadcrumbs className={styles.breadcrumbs}>
          {breadCrumbsItem}
        </Breadcrumbs>
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
              <Link href={'tel:+79603938390'} target="_blank">
                {' +7‒960‒393‒83‒90'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <Link
                href={
                  'https://yandex.ru/maps/org/lyubimtsy_v_dome/132929888489/?ll=56.047131%2C54.785060&rl=56.046959%2C54.786275~0.000257%2C0.001339&rlt=area&z=14'
                }
                target="_blank"
              >
                {' г. Уфа Уфимское шоссе, 25'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <p className={styles.clockTitle}>Ежедневно, с 10:00 до 21:00</p>
            </List.Item>
            <List.Item icon={<span />}>
              <Link
                className={styles.linkVk}
                href={'https://vk.com/lyubimtsyvdome'}
                target="_blank"
              >
                {' Любимцы в Доме'}
              </Link>
            </List.Item>
            <List.Item icon={<span />}>
              <Link
                className={styles.linkVk}
                href={'https://t.me/lyubimtsyvdome'}
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
