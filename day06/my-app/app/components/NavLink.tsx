"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`p-2 rounded transition-colors ${isActive ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-700'}`}
    >
      {children}
    </Link>
  );
}