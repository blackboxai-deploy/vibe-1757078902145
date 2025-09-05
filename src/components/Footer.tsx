import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { formatPhone } from '@/lib/formatters';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">JS</span>
              </div>
              <div>
                <div className="text-lg font-bold">{COMPANY_INFO.name}</div>
                <div className="text-sm text-gray-400">{COMPANY_INFO.creci}</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Há anos ajudando pessoas a realizarem o sonho da casa própria e encontrarem os melhores investimentos imobiliários no Rio de Janeiro.
            </p>
            
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                <span className="font-semibold mr-2">Telefone:</span>
                {formatPhone(COMPANY_INFO.phone)}
              </p>
              <p className="flex items-center text-sm">
                <span className="font-semibold mr-2">Email:</span>
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-start text-sm">
                <span className="font-semibold mr-2">Endereço:</span>
                <span>
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.neighborhood}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}<br />
                  CEP: {COMPANY_INFO.address.zipCode}
                </span>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/imoveis" className="text-gray-400 hover:text-white transition-colors">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Venda de Imóveis</li>
              <li className="text-gray-400 text-sm">Locação de Imóveis</li>
              <li className="text-gray-400 text-sm">Consultoria Imobiliária</li>
              <li className="text-gray-400 text-sm">Avaliação Profissional</li>
              <li className="text-gray-400 text-sm">Financiamento</li>
              <li className="text-gray-400 text-sm">Acompanhamento Jurídico</li>
            </ul>
          </div>
        </div>
        
        {/* Working Hours */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Horário de Atendimento</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>Segunda a Sexta: {COMPANY_INFO.workingHours.weekdays}</p>
                <p>Sábado: {COMPANY_INFO.workingHours.saturday}</p>
                <p>Domingo: {COMPANY_INFO.workingHours.sunday}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href={`https://instagram.com/${COMPANY_INFO.socialMedia.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={`https://facebook.com/${COMPANY_INFO.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://linkedin.com/in/${COMPANY_INFO.socialMedia.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}