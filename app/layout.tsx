import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Biblioteca Acadêmica', description: 'Gestão de livros, leitores e empréstimos' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
