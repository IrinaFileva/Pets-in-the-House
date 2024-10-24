import { Button, Checkbox, Select, TextInput } from '@mantine/core';
import { useState, FormEvent, FC } from 'react';
import { removeItemPriseList } from 'shared/lip';
import { PropsValues, PriceList, PropsPriceAdminForm } from 'shared/types';

export const RemoveItemPriceForm: FC<PropsPriceAdminForm> = ({
  priceList,
  TOKEN,
  X_MASTER_KEY,
}) => {
  const services: string[] = priceList ? Object.keys(priceList) : [];
  const [values, setValues] = useState<PropsValues | null>(null);
  const [checked, setChecked] = useState(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await removeItemPriseList(priceList, values, checked, TOKEN, X_MASTER_KEY);
    setValues(null);
  };

  return (
    <form onSubmit={handleForm}>
      <Select
        value={values?.category}
        label={'Категория'}
        data={services}
        onChange={(value) => {
          const newValue = value as keyof PriceList;
          setValues({
            category: newValue,
            service: priceList ? priceList[newValue][0].name : undefined,
            price: priceList ? priceList[newValue][0].price : undefined,
            title: undefined,
          });
        }}
      />
      {values?.category && (
        <Select
          label={'Услуга'}
          value={values?.service}
          data={
            priceList ? priceList[values.category].map((val) => val.name) : []
          }
          onChange={(value) => {
            if (value)
              setValues({
                ...values,
                service: value,
                price:
                  values.category && priceList
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
            setValues({
              ...values,
              price: ev.currentTarget.value,
            })
          }
        />
      )}
      {Array.isArray(values?.price) && (
        <>
          <Checkbox
            color="red"
            mt={'10px'}
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            label="Удалить услугу полностью"
          />
          {!checked && (
            <Select
              label={'Подкатегория'}
              value={values?.title}
              data={values.price.map((val) => val.title)}
              onChange={(value) => {
                if (value) {
                  setValues({
                    ...values,
                    title: value,
                  });
                }
              }}
            />
          )}
        </>
      )}
      <Button type="submit" mt="sm">
        {'Удалить'}
      </Button>
    </form>
  );
};
