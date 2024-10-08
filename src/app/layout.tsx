import '@mantine/core/styles.css';
import './globals.scss';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Header } from 'widgets/Header/ui/Header';
import { NavBar } from 'widgets/NavBar';
import { Footer } from 'widgets/Footer';

export const metadata = {
  title: 'Любимцы в доме',
  description: 'Ветеринарная Клиника',
  icons: './favicon.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="378e280dfcb217d9" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Header>
            <NavBar />
          </Header>
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
