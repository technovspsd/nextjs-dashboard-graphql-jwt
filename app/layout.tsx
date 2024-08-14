import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard | @technovspsd',
    default: 'Dashboard by @technovspsd',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-acme.vercel.app'),
  authors: [{name: 'Vivek Singh Polywal', url:'https://www.linkedin.com/in/viveksinghpolywal'}],
  keywords: ['Next.js 14', 'Acme', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://nextjs-dashboard-acme.vercel.app',
    type: 'website',
  },
  twitter: {
    site: '@acme',
    description:'',
    title:'Dashboard by @technovspsd',
    creator:'@technovspsd',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
