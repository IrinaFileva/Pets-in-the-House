import { getPriceList } from 'shared/lip';
import { PriceList } from 'shared/types';
import { AdminForm } from 'widgets/AdminForm';

export default async function LayoutAdmin() {
  const priseList: PriceList | undefined = await getPriceList();

  const key = process.env.ADMIN_KEY;

  return <AdminForm priceList={priseList} keyAdmin={key} />;
}
