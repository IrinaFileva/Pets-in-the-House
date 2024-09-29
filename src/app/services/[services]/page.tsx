import { notFound } from 'next/navigation';
import { SERVICES_CATEGORIES } from 'shared/constants';
import { getPriceList } from 'shared/lip';
import { PriceList, Service } from 'shared/types';
import { ServiceList } from 'widgets/ServicePriceList';

export default async function ServicesPage({
  params,
}: {
  params: { services: string };
}) {
  const service = params.services as keyof PriceList;
  const priseList: PriceList | undefined = await getPriceList();

  if (SERVICES_CATEGORIES.some((ser: Service) => ser.url === service)) {
    return (
      priseList && (
        <ServiceList nameService={service} service={priseList[service]} />
      )
    );
  } else {
    notFound();
  }
}
