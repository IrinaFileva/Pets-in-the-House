import { FC, useState } from 'react';
import { PriceList, PropsValues } from 'shared/types';
import { Button, Select, TextInput } from '@mantine/core';
import styles from './ChangePriceForm.module.scss';

interface PropsChangeProps {
  priceList: PriceList;
}

export const ChangePriceForm: FC<PropsChangeProps> = ({ priceList }) => {
  const services: string[] = Object.keys(priceList);
  const [values, setValueS] = useState<PropsValues | null>(null);

  return (
    <div className={styles.formPriceList}>
      <form>
        {'Прайс Лист'}
        <Select
          value={values?.category}
          label={'Категория'}
          data={services}
          onChange={(value) => {
            const newValue = value as keyof PriceList;
            setValueS({
              category: newValue,
              service: priceList[newValue][0].name,
              price: priceList[newValue][0].price,
              title: undefined,
              cost: undefined,
            });
          }}
        />
        {values?.category && (
          <Select
            label={'Услуга'}
            value={values?.service}
            data={priceList[values.category].map((val) => val.name)}
            onChange={(value) => {
              if (value)
                setValueS({
                  ...values,
                  service: value,
                  price: values.category
                    ? priceList[values.category].find(
                        (ser) => ser.name === value
                      )?.price
                    : undefined,
                });
            }}
          />
        )}
        {typeof values?.price === 'string' && (
          <TextInput
            label={'Цена'}
            value={values?.price}
            onChange={(ev) =>
              setValueS({
                ...values,
                price: ev.currentTarget.value,
              })
            }
          />
        )}
        {Array.isArray(values?.price) && (
          <>
            <Select
              label={'Подкатегория'}
              value={values?.title}
              data={values.price.map((val) => val.title)}
              onChange={(value) => {
                if (value)
                  setValueS({
                    ...values,
                    title: value,
                    cost:
                      values?.price && Array.isArray(values?.price)
                        ? values.price.find((val) => val.title === value)?.cost
                        : undefined,
                  });
              }}
            />
            {values?.cost && (
              <TextInput
                label={'Цена'}
                value={values.cost}
                onChange={(ev) =>
                  setValueS({
                    ...values,
                    cost: ev.currentTarget.value,
                  })
                }
              />
            )}
          </>
        )}
        <Button type="submit" mt="sm">
          {'Изменить'}
        </Button>
      </form>
    </div>
  );
};
