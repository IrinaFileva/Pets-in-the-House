import axios from 'axios';
import { PriceList } from 'shared/types';

const TOKEN = process.env.TOKEN_PRICE_LIST;
const X_MASTER_KEY = process.env.X_MASTER_KEY;

export async function getPriceList(): Promise<PriceList> {
  const res = await axios.get(`https://api.jsonbin.io/v3/b/${TOKEN}/latest`, {
    headers: { 'X-Master-Key': X_MASTER_KEY },
  });

  const json: PriceList = res.data.record;

  return json;
}
