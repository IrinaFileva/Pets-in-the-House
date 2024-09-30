import axios from 'axios';
import { PriceList, PropsValues } from 'shared/types';

export async function changePriceList({
  priceList,
  values,
  TOKEN,
  X_MASTER_KEY,
}: {
  priceList: PriceList;
  values: PropsValues | null;
  TOKEN: string | undefined;
  X_MASTER_KEY: string | undefined;
}) {
  if (values && values.category) {
    if (typeof values.price === 'string') {
      priceList[values.category].filter(
        (item) => item.name === values.service
      )[0].price = values.price;
    }
    if (Array.isArray(values.price)) {
      const price = priceList[values.category].filter(
        (item) => item.name === values.service
      )[0].price;
      if (Array.isArray(price) && values.cost) {
        price.filter((item) => item.title === values.title)[0].cost =
          values.cost;
      }
    }
  }

  await axios.put(`https://api.jsonbin.io/v3/b/${TOKEN}`, priceList, {
    headers: { 'X-Master-Key': X_MASTER_KEY },
  });
}
