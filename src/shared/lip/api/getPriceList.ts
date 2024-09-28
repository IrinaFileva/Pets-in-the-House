import axios from 'axios';
import { ServicePriceList } from 'shared/types';

export async function getPriceList(path: string): Promise<ServicePriceList[]> {
  const res = await axios.get(
    'https://api.jsonbin.io/v3/b/66f67396acd3cb34a88cf381/latest',
    {
      headers: {
        'X-Master-Key':
          '$2a$10$.Q5OSQIzFJYs3WqiftXPk.WZelLiEp6.v0CnQd.UC/Wtvm7nbs9Za',
      },
    }
  );

  const json = res.data.record;

  const result: ServicePriceList[] = JSON.parse(JSON.stringify(json))[path];

  return result;
}
