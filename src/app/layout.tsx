import '@mantine/core/styles.css';
import './globals.scss';
import { AppShell, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Header } from 'widgets/Header/ui/Header';

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
          <AppShell
            navbar={{
              width: 300,
              breakpoint: 'sm',
            }}
            padding="md"
          >
            <Header />
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
