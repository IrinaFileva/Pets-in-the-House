'use client';
import { Service, ServicePriceList } from 'shared/types';
import { SERVICES_CATEGORIES } from 'shared/constants';
import { HeaderPage } from 'shared/ui/HeaderPage';
import { List } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import styles from './ServicePriceList.module.scss';

interface PropsServiceList {
  nameService: string;
  service: ServicePriceList[];
}

export const ServiceList: FC<PropsServiceList> = ({ nameService, service }) => {
  const category: Service = SERVICES_CATEGORIES.filter(
    (category: Service) => category.url === nameService
  )[0];

  return (
    <main className={styles.servicePriceList}>
      <HeaderPage titlePage="Услуги" extraPage={category.name} />
      {service[0].precondition && <h3>{service[0].precondition}</h3>}
      <List
        classNames={{
          root: styles.list,
          itemIcon: styles.icon,
          itemWrapper: styles.wrapperItem,
          item: styles.listItem,
          itemLabel: styles.listLabelItem,
        }}
      >
        {service.map((pr: ServicePriceList, index: number) => {
          if (typeof pr.price === 'string') {
            return (
              <List.Item key={index}>
                <span className={styles.titleService}>{`${pr.name}`}</span>
                <span>{`${pr.price}`}</span>
              </List.Item>
            );
          } else {
            return (
              <List.Item key={index}>
                <span className={styles.titleService}>{`${pr.name}:`}</span>
                <List
                  classNames={{
                    root: styles.additionalList,
                    itemWrapper: styles.additionalWrapperItem,
                    item: styles.listItem,
                    itemLabel: styles.listLabelItem,
                  }}
                >
                  {pr.price.map((p, index: number) => {
                    return (
                      <List.Item key={index} icon={<span />}>
                        <span
                          className={styles.titleService}
                        >{`${p.title}`}</span>
                        <span>{`${p.cost}`}</span>
                      </List.Item>
                    );
                  })}
                </List>
              </List.Item>
            );
          }
        })}
      </List>
      <Image
        className={styles.imageService}
        src={category.image}
        alt={category.name}
        width={300}
        height={250}
        priority
      />
    </main>
  );
};
