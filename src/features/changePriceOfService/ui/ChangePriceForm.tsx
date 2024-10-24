import { FC, FormEvent, useState } from 'react';
import { PriceList, PropsPriceAdminForm, PropsValues } from 'shared/types';
import { Button, Select, TextInput } from '@mantine/core';
import { changePriceList } from 'shared/lip';

export const ChangePriceForm: FC<PropsPriceAdminForm> = ({
  priceList,
  TOKEN,
  X_MASTER_KEY,
}) => {
  const services: string[] = Object.keys(priceList);
  const [values, setValues] = useState<PropsValues | null>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await changePriceList(priceList, values, TOKEN, X_MASTER_KEY);
    setValues(null);
  };

  return (
    <form onSubmit={handleForm}>
      {'Прайс Лист'}
      <Select
        value={values?.category}
        label={'Категория'}
        data={services}
        onChange={(value) => {
          const newValue = value as keyof PriceList;
          setValues({
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
              setValues({
                ...values,
                service: value,
                price: values.category
                  ? priceList[values.category].find((ser) => ser.name === value)
                      ?.price
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
            setValues({
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
                setValues({
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
                setValues({
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
  );
};
