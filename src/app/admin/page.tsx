import { getPriceList } from 'shared/lip';
import { PriceList } from 'shared/types';
import { AdminForm } from 'widgets/AdminForm';

export default async function LayoutAdmin() {
  const key = process.env.ADMIN_KEY;
  const TOKEN = process.env.TOKEN_PRICE_LIST;
  const X_MASTER_KEY = process.env.X_MASTER_KEY;

  const priseList: PriceList | undefined = await getPriceList();

  return (
    <AdminForm
      priceList={priseList}
      keyAdmin={key}
      TOKEN={TOKEN}
      X_MASTER_KEY={X_MASTER_KEY}
    />
  );
}
