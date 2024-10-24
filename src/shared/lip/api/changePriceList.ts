import axios from 'axios';
import {
  MultiplePrices,
  PriceList,
  PropsValues,
  ServicePriceList,
} from 'shared/types';

export async function changePriceList(
  priceList: PriceList,
  values: PropsValues | null,
  TOKEN: string | undefined,
  X_MASTER_KEY: string | undefined
): Promise<void> {
  if (values) {
    const { category, service, price, title, cost } = values;

    const workCategory: ServicePriceList[] | undefined = category
      ? priceList[category]
      : undefined;

    if (workCategory && price) {
      if (typeof price === 'string') {
        workCategory.filter((item) => item.name === service)[0].price = price;
      }
      if (Array.isArray(price)) {
        const price: string | MultiplePrices[] = workCategory.filter(
          (item) => item.name === service
        )[0].price;
        if (Array.isArray(price) && cost) {
          price.filter((item) => item.title === title)[0].cost = cost;
        }
      }
    }
  }

  await axios.put(`https://api.jsonbin.io/v3/b/${TOKEN}`, priceList, {
    headers: { 'X-Master-Key': X_MASTER_KEY },
  });
}
