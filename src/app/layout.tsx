import '@mantine/core/styles.css';
import './globals.scss';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Header } from 'widgets/Header/ui/Header';
import { NavBar } from 'widgets/NavBar';

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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Header>
            <NavBar />
          </Header>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
