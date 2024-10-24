import axios from 'axios';
import { PriceList, PropsValues, ServicePriceList } from 'shared/types';

export async function addItemPriseList(
  priceList: PriceList,
  values: PropsValues | null,
  TOKEN: string | undefined,
  X_MASTER_KEY: string | undefined
): Promise<void> {
  if (values) {
    const { category, service, price, position } = values;

    const workCategory: ServicePriceList[] | undefined = category
      ? priceList[category]
      : undefined;

    if (workCategory && position && category && service && price) {
      const newItem: ServicePriceList = {
        name: service,
        price: price,
      };
      if (position === '-1') {
        priceList[category].push(newItem);
      } else {
        priceList[category].splice(+position - 1, 0, newItem);
      }
    }
  }
  await axios.put(`https://api.jsonbin.io/v3/b/${TOKEN}`, priceList, {
    headers: { 'X-Master-Key': X_MASTER_KEY },
  });
}
