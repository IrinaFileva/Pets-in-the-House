'use client';
import { Breadcrumbs, Button, Card } from '@mantine/core';
import { SERVICES_CATEGORIES } from 'shared/constants';
import { Service } from 'shared/types';
import Image from 'next/image';
import styles from './ServicesList.module.scss';
import Link from 'next/link';

const breadCrumbsItem = [
  { title: 'Главная', href: '/' },
  { title: 'Услуги', href: '#' },
].map((item, index) => (
  <Link href={item.href} key={index}>
    {item.title}
  </Link>
));

export const ServicesList = () => {
  return (
    <main className={styles.servicesSection}>
      <div className={styles.titleSection}>
        <h2>{'Услуги'} </h2>
        <Breadcrumbs className={styles.breadcrumbs}>
          {breadCrumbsItem}
        </Breadcrumbs>
      </div>
      <section className={styles.servicesList}>
        {SERVICES_CATEGORIES.map((service: Service, index: number) => {
          return (
            <Link href={`/services/${service.url}`} key={index}>
              <Card
                padding="sm"
                radius="md"
                bd={'1px solid grey'}
                bg={'rgb(174, 184, 174, 0.4)'}
                mb={'20px'}
                withBorder
              >
                <Card.Section>
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={300}
                    height={200}
                  />
                </Card.Section>
                <Button
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                >
                  {service.name}
                </Button>
              </Card>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
