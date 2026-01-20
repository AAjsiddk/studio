import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { BookMarked } from 'lucide-react';

export const metadata: Metadata = {
  title: 'دفتر رمضان',
  description: 'All your important links in one place.',
};

const cairoFont = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn('antialiased min-h-screen bg-background', cairoFont.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                  <a className="mr-6 flex items-center space-x-2" href="/">
                    <BookMarked className="h-6 w-6 text-primary" />
                    <span className="font-bold">دفتر رمضان</span>
                  </a>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <ThemeToggle />
                </div>
              </div>
            </header>
            <div className="flex-1">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
