'use client';
import { Loader } from '@mantine/core';
import styles from './Loader.module.scss';

export const LoaderSpinner = () => {
  return (
    <main className={styles.loader}>
      <h2>Загрузка...</h2>
      <Loader color="gray" size={100} />
    </main>
  );
};
