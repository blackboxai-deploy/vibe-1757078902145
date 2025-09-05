'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Imóveis', href: '/imoveis' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">JS</span>
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-gray-900">{COMPANY_INFO.name}</div>
              <div className="text-xs text-gray-600">{COMPANY_INFO.creci}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">{COMPANY_INFO.phone}</div>
              <div className="text-xs text-gray-600">WhatsApp</div>
            </div>
            <Link href="/contato">
              <Button>Fale Conosco</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t">
                  <div className="text-sm font-semibold text-gray-900 mb-2">{COMPANY_INFO.phone}</div>
                  <Link href="/contato" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Fale Conosco</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}