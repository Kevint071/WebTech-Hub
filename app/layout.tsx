import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebTech Hub | Modern Web Development',
  description: 'Explore the most popular web technologies and development tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-background text-foreground antialiased min-h-screen")}>
        <SiteHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}