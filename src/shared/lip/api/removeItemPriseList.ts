import axios from 'axios';
import {
  MultiplePrices,
  PriceList,
  PropsValues,
  ServicePriceList,
} from 'shared/types';

export async function removeItemPriseList(
  priceList: PriceList,
  values: PropsValues | null,
  checked: boolean,
  TOKEN: string | undefined,
  X_MASTER_KEY: string | undefined
): Promise<void> {
  if (values) {
    const { category, service, price, title } = values;

    const workCategory: ServicePriceList[] | undefined = category
      ? priceList[category]
      : undefined;

    if (workCategory && category) {
      if (typeof price === 'string' || checked) {
        const newCategory: ServicePriceList[] = workCategory.filter(
          (item) => item.name !== service
        );
        priceList[category] = newCategory;
      }
      if (Array.isArray(price)) {
        const subCategory: string | MultiplePrices[] = workCategory.filter(
          (item) => item.name === service
        )[0].price;
        if (Array.isArray(subCategory)) {
          const newArrayPrice: MultiplePrices[] = subCategory.filter(
            (item) => item.title !== title
          );
          priceList[category].map((item) => {
            if (item.price === subCategory) {
              item.price = newArrayPrice;
            }
          });
        }
      }
    }
  }
  await axios.put(`https://api.jsonbin.io/v3/b/${TOKEN}`, priceList, {
    headers: { 'X-Master-Key': X_MASTER_KEY },
  });
}
