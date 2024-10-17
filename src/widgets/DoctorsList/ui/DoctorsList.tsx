import { Box, Group, Title, Text, Image, Breadcrumbs } from '@mantine/core';
import NextImage from 'next/image';
import styles from './DoctorsList.module.scss';
import { DOCTORS } from 'shared/constants';
import Link from 'next/link';

const breadCrumbsItem = [
  { title: 'Главная', href: '/' },
  { title: 'Наши Врачи', href: '#' },
].map((item, index) => (
  <Link href={item.href} key={index}>
    {item.title}
  </Link>
));

export const DoctorsList = () => {
  return (
    <main className={styles.doctorsSection}>
      <h2>{'Наши Врачи'}</h2>
      <Breadcrumbs className={styles.breadcrumbs}>
        {breadCrumbsItem}
      </Breadcrumbs>
      {DOCTORS.map((doc, index) => {
        return (
          <Group
            key={index}
            wrap="nowrap"
            align="start"
            className={styles.doctor}
          >
            <Image component={NextImage} src={doc.image} alt={doc.name} />
            <Box className={styles.description}>
              <Title order={2}>{doc.name}</Title>
              <Text size="md" style={{ whiteSpace: 'pre-wrap' }}>
                {doc.about}
              </Text>
              <Box component="div" className={styles.dialog}>
                {doc.dialog}
              </Box>
            </Box>
          </Group>
        );
      })}
    </main>
  );
};
