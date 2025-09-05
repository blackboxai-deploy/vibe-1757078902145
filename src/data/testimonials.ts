import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    role: 'Compradora - Copacabana',
    content: 'Excelente profissional! Josivan me ajudou a encontrar o apartamento dos meus sonhos em Copacabana. Muito atencioso e sempre disponível para esclarecer dúvidas. Recomendo!',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Maria+Silva+cliente+satisfeita'
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'Vendedor - Barra da Tijuca',
    content: 'Vendi minha casa na Barra através do Josivan e não poderia estar mais satisfeito. Processo rápido, transparente e com ótimo preço. Profissionalismo exemplar!',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Carlos+Oliveira+vendedor+satisfeito'
  },
  {
    id: '3',
    name: 'Ana Santos',
    role: 'Inquilina - Ipanema',
    content: 'Encontrei o apartamento perfeito em Ipanema com a ajuda do Josivan. Ele foi muito paciente e me mostrou várias opções até encontrarmos a ideal. Ótimo atendimento!',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Ana+Santos+inquilina+feliz'
  },
  {
    id: '4',
    name: 'Roberto Costa',
    role: 'Investidor - Leblon',
    content: 'Como investidor imobiliário, preciso de um corretor que entenda do mercado. Josivan tem vasta experiência e me ajudou a fazer excelentes investimentos no Leblon.',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Roberto+Costa+investidor+imobiliario'
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    role: 'Locatária - Tijuca',
    content: 'Processo de locação muito tranquilo! Josivan cuidou de toda a documentação e me orientou em cada etapa. Profissional competente e confiável.',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Fernanda+Lima+locataria+tijuca'
  },
  {
    id: '6',
    name: 'Eduardo Martins',
    role: 'Comprador - Flamengo',
    content: 'Comprei meu primeiro imóvel com o Josivan e foi uma experiência excelente. Ele explicou todo o processo de financiamento e me ajudou a conseguir as melhores condições.',
    rating: 5,
    image: 'https://placehold.co/100x100?text=Eduardo+Martins+primeiro+comprador'
  }
];

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.slice(0, 4);
};