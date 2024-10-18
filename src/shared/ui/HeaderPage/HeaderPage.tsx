'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from '@mantine/core';
import Link from 'next/link';
import styles from './HeaderPage.module.scss';

interface PropsHeaderPage {
  titlePage: string;
  extraPage?: string;
}

export const HeaderPage: FC<PropsHeaderPage> = ({ titlePage, extraPage }) => {
  const path = usePathname();
  const pages = path.split('/');

  const breadCrumbsItem = [
    { title: 'Главная', href: '/' },
    { title: titlePage, href: pages.length > 2 ? `/${pages[1]}` : '#' },
    { title: extraPage, href: extraPage && '#' },
  ].map((item, index) => {
    if (item.href) {
      return (
        <Link href={item.href} key={index}>
          {item.title}
        </Link>
      );
    }
  });

  return (
    <div className={styles.headerPage}>
      <h2>{extraPage ? extraPage : titlePage}</h2>
      <Breadcrumbs className={styles.breadcrumbs}>
        {breadCrumbsItem}
      </Breadcrumbs>
    </div>
  );
};
