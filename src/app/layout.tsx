import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import clsx from "clsx";

import { siteConfig } from '@/config';  

import { WEBSITE_HOST_URL } from '@/lib/constants';

import { Layout } from '@/components/Layout';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
  },
  description: 'A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos. | (61) 9 8669-2775',
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  manifest: '/manifest.json',
  authors: [{ name: 'Glazing Design' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Glazing Design',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  },
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  keywords: [
    'Vidro temperdo',
    'Vidro laminado',
    'Box para banheiro',
    'Espelho',
    'Guarda corpo de vidro',
    'Pergolado',
    'Vidro para varanda',
    'Glazing design',
    'Pele de vidro',
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning lang="pt-BR" className="[color-scheme:dark]">
      <body className={clsx(
					"min-h-screen bg-background font-sans antialiased bg-gray-900 overflow-y-scroll bg-[url('/grid.svg')] pb-36",
					fontSans.variable
				)}>
          <div className="max-w-8xl mx-auto space-y-8 px-2 lg:p-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-zinc-950 p-3.5 lg:p-6"> 
              {children}
            </div>
          </div>
        </div>
        </body>
      </html>
    </>
  );
}
