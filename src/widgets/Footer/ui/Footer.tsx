'use client';
import { List } from '@mantine/core';
import Link from 'next/link';
import VK from 'shared/assets/svg/vkFooter.svg';
import Telegram from 'shared/assets/svg/telegramFooter.svg';
import styles from './Footer.module.scss';
import { OUTSIDE_LINKS } from 'shared/constants';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <List className={styles.listContacts}>
        {'Ветеринарная клиника "Любимцы в доме"'}
        <List.Item icon={<span />}>
          <Link href={OUTSIDE_LINKS.map} target="_blank">
            {'г.Уфа Уфимское шоссе, 25'}
          </Link>
        </List.Item>
        <List.Item icon={<span />}>{'Ежедневно, с 10.00 до 21.00'}</List.Item>
      </List>
      <Link href={OUTSIDE_LINKS.tel} target="_blank">
        {' +7‒960‒393‒83‒90'}
      </Link>
      <List className={styles.listSocial}>
        <Link href={OUTSIDE_LINKS.vk} target="_blank">
          <Image src={VK} alt="vk" width={45} />
        </Link>
        <Link href={OUTSIDE_LINKS.telegram} target="_blank">
          <Image src={Telegram} alt="telegram" width={45} />
        </Link>
      </List>
    </footer>
  );
};
