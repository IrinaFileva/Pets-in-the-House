import { Box, Group, Title, Text, Image } from '@mantine/core';
import NextImage from 'next/image';
import styles from './DoctorsList.module.scss';
import { DOCTORS } from 'shared/constants';

export const DoctorsList = () => {
  return (
    <main className={styles.doctorsSection}>
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
