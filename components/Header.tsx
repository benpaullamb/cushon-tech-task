import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between">
      <Image src={logo} alt="Cushon Logo" height={36} />
      <nav className="flex justify-evenly gap-16">
        <Link href="/" className="text-sm font-light">Invest</Link>
        <Link href="/my-investments" className="text-sm font-light">My Investments</Link>
      </nav>
    </header>
  );
}
