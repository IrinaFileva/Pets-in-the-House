import { notFound } from 'next/navigation';
import { SERVICES_CATEGORIES } from 'shared/constants';
import { getPriceList } from 'shared/lip';
import { Service, ServicePriceList } from 'shared/types';
import { ServiceList } from 'widgets/ServicePriceList';

export default async function ServicesPage({
  params,
}: {
  params: { services: string };
}) {
  const { services } = params;

  if (SERVICES_CATEGORIES.some((ser: Service) => ser.url === services)) {
    const priseList: ServicePriceList[] = await getPriceList(services);

    return <ServiceList nameService={services} service={priseList} />;
  } else {
    notFound();
  }
}
