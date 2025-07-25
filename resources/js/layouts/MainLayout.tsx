import { Link, usePage } from '@inertiajs/react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { url } = usePage();

  const navLink = (name: string, href: string) => (
    <Link
      href={href}
      className={`px-4 py-2 hover:text-emerald-600 ${
        url === href ? 'font-semibold text-emerald-600' : ''
      }`}
    >
      {name}
    </Link>
  );

  return (
    <div>
      <nav className="bg-white border-b shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-600">CompanyName</h1>
        <div className="space-x-4">
          {navLink('Beranda', '/')}
          {navLink('Tentang', '/tentang')}
          {navLink('Layanan', '/layanan')}
          {navLink('Kontak', '/kontak')}
        </div>
      </nav>

      <main className="p-8">{children}</main>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} CompanyName. All rights reserved.
      </footer>
    </div>
  );
}
