import Image from 'next/image';
import Cat from 'shared/assets/img/catNotFound.png';

export default function NotFound() {
  return (
    <div className="notFound">
      <Image src={Cat} alt={'cat'} width={350} height={350} priority />
      <div>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
      </div>
    </div>
  );
}
