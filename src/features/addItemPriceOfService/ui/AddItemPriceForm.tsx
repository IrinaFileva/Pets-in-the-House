import { useState, FormEvent, FC } from 'react';
import { Button, Checkbox, Select, TextInput, Text, Flex } from '@mantine/core';
import {
  PropsValues,
  PriceList,
  MultiplePrices,
  PropsPriceAdminForm,
} from 'shared/types';
import { addItemPriseList } from 'shared/lip';

export const AddItemPriceForm: FC<PropsPriceAdminForm> = ({
  priceList,
  TOKEN,
  X_MASTER_KEY,
}) => {
  const services: string[] = priceList ? Object.keys(priceList) : [];
  const [values, setValues] = useState<PropsValues | null>(null);
  const [checked, setChecked] = useState(false);
  const [valuesMiniForm, setValuesMiniForm] = useState<MultiplePrices[]>([]);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addItemPriseList(priceList, values, TOKEN, X_MASTER_KEY);
    setValues(null);
    setValuesMiniForm([]);
  };

  const handleButtonAdd = () => {
    if (values?.title && values.cost) {
      valuesMiniForm.push({ title: values?.title, cost: values?.cost });
    }
    setValuesMiniForm(valuesMiniForm);
    setValues({
      ...values,
      price: valuesMiniForm,
      title: '',
      cost: '',
    });
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
            service: '',
            price: '',
            title: '',
            cost: '',
            position: '-1',
          });
        }}
      />
      {values?.category && (
        <>
          <Flex align={'flex-end'} gap={'20px'}>
            <TextInput
              label={'Услуга'}
              value={values?.service}
              onChange={(ev) =>
                setValues({
                  ...values,
                  service: ev.currentTarget.value,
                })
              }
            />
            <input
              type="number"
              min={'-1'}
              value={values.position}
              onChange={(ev) =>
                setValues({
                  ...values,
                  position: ev.currentTarget.value,
                })
              }
            />
          </Flex>
          {!checked && typeof values.price === 'string' && (
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
          <Checkbox
            color="red"
            mt={'10px'}
            checked={checked}
            onChange={(event) => {
              setChecked(event.currentTarget.checked);
              setValues({
                ...values,
                price: '',
              });
            }}
            label="Добавить подкатегорию"
          />
        </>
      )}
      {checked && values?.service && (
        <div>
          {valuesMiniForm.map((item, index) => {
            return (
              <Text
                c="red"
                size="xs"
                key={index}
              >{`${item.title}: ${item.cost}`}</Text>
            );
          })}
          <TextInput
            label={'Подкатегория'}
            value={values?.title}
            onChange={(ev) =>
              setValues({
                ...values,
                title: ev.currentTarget.value,
              })
            }
          />
          <TextInput
            label={'Цена'}
            value={values?.cost}
            onChange={(ev) =>
              setValues({
                ...values,
                cost: ev.currentTarget.value,
              })
            }
          />
          <Button
            type="button"
            size="xs"
            mt={'10px'}
            color="cyan"
            onClick={handleButtonAdd}
            disabled={!values?.title && !values?.cost}
          >
            {'готово'}
          </Button>
        </div>
      )}
      <Button type="submit" mt="sm">
        {'Добавить'}
      </Button>
    </form>
  );
};
