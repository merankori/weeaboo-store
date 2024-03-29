import type { Metadata } from 'next';
import { inter } from '@/fonts/inter';
import { Header } from '@/components/Header/Header';
import '@/styles/globals.scss';
import '@/styles/variables.scss';
import { AppProvider } from '@/providers/AppProvider/AppProvider';
import { SEO_TITLE } from '@/shared/constants/seo';
import { NotActivatedPopup } from '@/shared/components/NotActivatedPopup/NotActivatedPopup';

const mainMetaData = {
  title: SEO_TITLE,
  description: 'Japanese goods store',
};

export const metadata: Metadata = {
  ...mainMetaData,
  openGraph: mainMetaData,
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <NotActivatedPopup />
          {children}
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
