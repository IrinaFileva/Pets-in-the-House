'use client';
import { useForm } from '@mantine/form';
import { PropsPriceAdminForm } from 'shared/types';
import { FC, useState } from 'react';
import { ChangePriceForm } from 'features/changePriceOfService';
import { RemoveItemPriceForm } from 'features/removeItemPriceOfService';
import { Button, Group, Radio, TextInput } from '@mantine/core';
import styles from './AdminForm.module.scss';

interface PropsAdminForm extends PropsPriceAdminForm {
  keyAdmin: string | undefined;
}

export const AdminForm: FC<PropsAdminForm> = ({
  priceList,
  keyAdmin,
  TOKEN,
  X_MASTER_KEY,
}) => {
  const [isLogin, setLogin] = useState(false);
  const [value, setValue] = useState<string>('Изменить');

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
      <div className={styles.formPriceList}>
        {'Прайс Лист'}
        <Radio.Group m={'5% auto'} value={value} onChange={setValue}>
          <Group mt="xs">
            <Radio value="Изменить" label="Изменить" />
            <Radio value="Удалить" label="Удалить" />
            <Radio value="Добавить" label="Добавить" />
          </Group>
        </Radio.Group>
        {value === 'Изменить' && (
          <ChangePriceForm
            priceList={priceList}
            TOKEN={TOKEN}
            X_MASTER_KEY={X_MASTER_KEY}
          />
        )}
        {value === 'Удалить' && (
          <RemoveItemPriceForm
            priceList={priceList}
            TOKEN={TOKEN}
            X_MASTER_KEY={X_MASTER_KEY}
          />
        )}
      </div>
    </main>
  );
};
