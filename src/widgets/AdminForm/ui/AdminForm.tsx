'use client';
import { FC, useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import styles from './AdminForm.module.scss';
import { PriceList } from 'shared/types';
import { ChangePriceForm } from 'features/changePriceOfService';

interface PropsAdminForm {
  priceList: PriceList;
  keyAdmin: string | undefined;
  TOKEN: string | undefined;
  X_MASTER_KEY: string | undefined;
}

export const AdminForm: FC<PropsAdminForm> = ({
  priceList,
  keyAdmin,
  TOKEN,
  X_MASTER_KEY,
}) => {
  const [isLogin, setLogin] = useState(false);

  const formLogin = useForm({
    mode: 'uncontrolled',
    initialValues: { key: '' },

    validate: {
      key: (value) => (value !== keyAdmin ? 'Не верный ключ' : null),
    },
  });

  if (!isLogin)
    return (
      <main className={styles.mainAdmin}>
        <div className={styles.loginForm}>
          <form onSubmit={formLogin.onSubmit(() => setLogin(true))}>
            <TextInput
              label="Ключ"
              placeholder="Введите ключ"
              key={formLogin.key('key')}
              {...formLogin.getInputProps('key')}
            />
            <Button type="submit" mt="sm">
              {'Войти'}
            </Button>
          </form>
        </div>
      </main>
    );

  return (
    <main className={styles.mainAdmin}>
      <ChangePriceForm
        priceList={priceList}
        TOKEN={TOKEN}
        X_MASTER_KEY={X_MASTER_KEY}
      />
    </main>
  );
};
