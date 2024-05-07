import '@/styles/globals.css';
import { Metadata } from 'next';
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

import { siteConfig } from '@/config';  

import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Blog onde falo sobre livros e código',
  manifest: '/manifest.json',
  authors: [{ name: 'Junior Alves' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Dev Junior Alves',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

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
